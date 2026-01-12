<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { Button } from "$lib/components/ui/button";

  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen bg-gray-900">
  <!-- NAVBAR -->
  <nav class="border-b border-gray-800">
    <div class="mx-auto max-w-7xl px-8 py-4 flex items-center justify-between">
      <!-- Left -->
      <div class="flex items-center gap-8">
        <a href="/" class="text-xl font-bold text-white"> Todos </a>

        <div class="hidden md:flex gap-6">
          <a href="/" class="text-gray-300 hover:text-white transition">
            All Todos
          </a>
          <a
            href="/todos/completed"
            class="text-gray-300 hover:text-white transition"
          >
            Completed
          </a>
          <a
            href="/todos/new"
            class="text-gray-300 hover:text-white transition"
          >
            New Todo
          </a>
        </div>
      </div>
    </div>
  </nav>

  <!-- PAGE CONTENT -->
  <main class="mx-auto max-w-7xl px-8 py-6">
    {@render children()}
  </main>
</div>
