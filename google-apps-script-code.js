// Google Apps Script code to handle form submissions and write to a Google Sheet

function doGet(e) {
  return handleResponse(e);
}

function doPost(e) {
  return handleResponse(e);
}

function handleResponse(e) {
  // Prevent CORS issues
  var lock = LockService.getScriptLock();
  lock.tryLock(10000);

  try {
    // Get the sheet
    var ss = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = ss.getSheetByName('Form Responses') || ss.insertSheet('Form Responses');

    // Set up headers if they don't exist
    if (sheet.getLastRow() === 0) {
      sheet.appendRow(['Timestamp', 'Name', 'Email', 'Message']);
      sheet.getRange(1, 1, 1, 4).setFontWeight('bold');
    }

    // Parse the request data
    var data;
    if (e.postData && e.postData.contents) {
      data = JSON.parse(e.postData.contents);
    } else if (e.parameter) {
      data = e.parameter;
    } else {
      throw new Error('No data received');
    }

    // Append the data to the sheet
    sheet.appendRow([
      new Date(),
      data.name || '',
      data.email || '',
      data.message || ''
    ]);

    // Send email notification
    sendEmailNotification(data);

    // Return success response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'success' }))
      .setMimeType(ContentService.MimeType.JSON);

  } catch (error) {
    // Log the error
    console.error('Error processing request: ' + error.message);

    // Return error response
    return ContentService
      .createTextOutput(JSON.stringify({ 'result': 'error', 'error': error.message }))
      .setMimeType(ContentService.MimeType.JSON);
  } finally {
    lock.releaseLock();
  }
}

/**
 * Sends an email notification when a new form submission is received
 * @param {Object} data - The form submission data
 */
function sendEmailNotification(data) {
  try {
    // Email recipient
    var emailTo = "dbarker16@gmail.com";

    // Email subject
    var subject = "New Contact Form Submission from " + (data.name || "Unknown");

    // Email body
    var body = "You've received a new contact form submission:\n\n" +
               "Name: " + (data.name || "Not provided") + "\n" +
               "Email: " + (data.email || "Not provided") + "\n" +
               "Message: " + (data.message || "Not provided") + "\n\n" +
               "Timestamp: " + new Date().toString();

    // Send the email
    MailApp.sendEmail({
      to: emailTo,
      subject: subject,
      body: body
    });

    console.log("Email notification sent successfully");
  } catch (error) {
    console.error("Failed to send email notification: " + error.message);
    // Continue with the form submission even if email fails
  }
}
