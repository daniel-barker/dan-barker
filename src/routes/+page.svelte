<script>
  import { fade } from 'svelte/transition';
</script>

<main class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-900 dark:to-slate-800">
  <!-- Hero Section -->
  <section class="container mx-auto px-4 py-20 flex flex-col items-center text-center" in:fade>
    <h1 class="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
      Hey, I'm Dan 👋
    </h1>
    <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
      I'm a versatile individual who loves creating, fixing, and helping. Whether it's crafting code, maintaining vehicles, or taking care of pets - I take pride in doing things well and learning something new along the way.
    </p>
    <div class="flex gap-4">
      <a href="#services" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        Explore Services
      </a>
      <a href="#contact" class="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-lg transition-colors">
        Get in Touch
      </a>
    </div>
  </section>

  <!-- Main Sections Navigation -->
  <section class="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
    <!-- Services Card -->
    <a href="/services" class="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        Services & Life
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        From practical services to daily adventures - discover how I can help and what keeps me busy.
      </p>
    </a>

    <!-- Projects Card -->
    <a href="/projects" class="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        Tech Journey
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        Explore my development projects and dive into the technologies I work with.
      </p>
    </a>

    <!-- About/Contact Card -->
    <a href="/about" class="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        About & Contact
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        Learn more about who I am and let's start a conversation.
      </p>
    </a>
  </section>
</main>
