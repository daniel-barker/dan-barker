<script>
  import { fade } from 'svelte/transition';
</script>

<section class="min-h-screen bg-gradient-to-b from-slate-50 to-slate-100 dark:from-slate-800 dark:to-slate-600">
  <!-- Hero Section -->
  <section class="container mx-auto px-4 flex flex-col items-center text-center" in:fade>
    <h1 class="text-5xl md:text-6xl font-bold text-slate-800 dark:text-white mb-6">
      Hey, I'm Dan 👋
    </h1>
    <p class="text-xl md:text-2xl text-slate-600 dark:text-slate-300 max-w-2xl mb-12">
      I'm a versatile individual who loves creating, fixing, and helping. Whether it's crafting code, maintaining vehicles, or taking care of pets - I take pride in doing things well and learning something new along the way.
    </p>
    <div class="flex gap-4">
      <a href="/dev" class="px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg transition-colors">
        Explore Services
      </a>
      <a href="/contact" class="px-6 py-3 bg-slate-200 hover:bg-slate-300 dark:bg-slate-700 dark:hover:bg-slate-600 text-slate-800 dark:text-white rounded-lg transition-colors">
        Get in Touch
      </a>
    </div>
  </section>
</section>
