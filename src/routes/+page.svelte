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
        How I Help
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        A mix of practical skills, creative projects, and everyday things I enjoy doing for others.
      </p>
    </a>

    <!-- Projects Card -->
    <a href="/projects" class="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        My Path in Tech
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        A look at how I got into development, what I’ve built, and where I'm going with it.
      </p>
    </a>

    <!-- About/Contact Card -->
    <a href="/me" class="group p-6 bg-white dark:bg-slate-800 rounded-xl shadow-lg hover:shadow-xl transition-all">
      <h2 class="text-2xl font-bold text-slate-800 dark:text-white mb-4 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
        Meet Me
      </h2>
      <p class="text-slate-600 dark:text-slate-300">
        A more personal peek into my background, values, and how to connect with me.
      </p>
    </a>
  </section>
</main>
