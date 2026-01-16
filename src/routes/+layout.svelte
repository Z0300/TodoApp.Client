<script lang="ts">
  import "./layout.css";
  import favicon from "$lib/assets/favicon.svg";
  import { page } from "$app/state";
  let { children } = $props();
</script>

<svelte:head><link rel="icon" href={favicon} /></svelte:head>
<div class="min-h-screen bg-background">
  <nav
    class="sticky top-0 z-50 border-b border-border bg-card/95 backdrop-blur supports-backdrop-filter:bg-card/80"
  >
    <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <div class="flex h-16 items-center justify-between">
        <div class="flex items-center gap-8">
          <a
            href="/"
            class="text-xl font-semibold text-foreground transition-colors hover:text-primary"
          >
            Todos
          </a>

          <nav class="hidden md:flex items-center gap-1">
            <a
              href="/todos"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors {page
                .url.pathname === '/todos'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}"
            >
              All Todos
            </a>
            <a
              href="/todos/completed"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors {page
                .url.pathname === '/todos/completed'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}"
            >
              Completed
            </a>

            <a
              href="/todos/new"
              class="px-3 py-2 text-sm font-medium rounded-md transition-colors {page
                .url.pathname === '/todos/new'
                ? 'bg-accent text-accent-foreground'
                : 'text-muted-foreground hover:text-foreground hover:bg-accent/50'}"
            >
              Create New
            </a>
          </nav>
        </div>
      </div>
    </div>
  </nav>

  <main class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
    {@render children()}
  </main>
</div>
