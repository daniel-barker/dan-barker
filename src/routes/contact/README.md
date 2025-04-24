# Contact Form with Google Sheets Integration

This contact form sends data to a Google Sheet using Google Apps Script. Follow these setup instructions to get it working.

## Setup Instructions

### 1. Create a Google Sheet

1. Go to [Google Sheets](https://sheets.google.com) and create a new spreadsheet
2. Name your spreadsheet something like "Website Contact Form Responses"
3. The Apps Script will automatically create a sheet named "Form Responses" with headers

### 2. Set up Google Apps Script

1. In your Google Sheet, click on "Extensions" > "Apps Script"
2. Delete any code in the editor and paste the code from the `google-apps-script-code.js` file
3. Save the project and give it a name like "Contact Form Handler"
4. Click on "Deploy" > "New deployment"
5. Select "Web app" as the deployment type
6. Configure the deployment:
   - Description: "Contact Form Handler"
   - Execute as: "Me"
   - Who has access: "Anyone" (This allows your form to submit data without authentication)
7. Click "Deploy"
8. Copy the Web app URL that is generated (it will look like `https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec`)

### 3. Update the Contact Form

1. Open the contact form component at `/src/routes/contact/+page.svelte`
2. Replace the placeholder URL in the `SCRIPT_URL` constant with your actual deployment URL:

```javascript
const SCRIPT_URL = 'https://script.google.com/macros/s/YOUR_DEPLOYMENT_ID_HERE/exec';
```

## Important Notes

- The form uses `mode: 'no-cors'` for the fetch request, which is necessary for cross-origin requests to Google Apps Script
- Due to using `no-cors`, we can't read the actual response from the server, so we assume success if no error is thrown
- If you need more advanced error handling, you might need to set up a proxy server or use a different approach
- The script will automatically send an email notification to dbarker16@gmail.com when someone submits the form

## Troubleshooting

- If the form isn't submitting properly, check the browser console for errors
- Make sure your Google Apps Script deployment is properly configured and accessible
- You may need to authorize the script to access your Google Sheets the first time you run it
- For email notifications to work, you'll need to authorize the script to send emails on your behalf when prompted during the first execution
