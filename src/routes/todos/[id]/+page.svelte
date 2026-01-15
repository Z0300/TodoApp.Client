<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  let { data } = $props();
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <Button href="/todos" variant="ghost" size="sm" class="mb-4 -ml-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke-width="1.5"
          stroke="currentColor"
          class="size-4 mr-2"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M10.5 19.5 3 12m0 0 7.5-7.5M3 12h18"
          />
        </svg>
        Back
      </Button>
      <h1 class="text-3xl font-semibold tracking-tight text-foreground">
        {data.title}
      </h1>
      <p class="mt-2 text-sm text-muted-foreground">
        {#if data.isCompleted}
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-primary/10 px-2.5 py-0.5 text-xs font-medium text-primary"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="2"
              stroke="currentColor"
              class="size-3"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M4.5 12.75l6 6 9-13.5"
              />
            </svg>
            Completed
          </span>
        {:else}
          <span
            class="inline-flex items-center gap-1.5 rounded-full bg-muted px-2.5 py-0.5 text-xs font-medium text-muted-foreground"
          >
            Pending
          </span>
        {/if}
      </p>
    </div>
  </div>

  <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
    <div class="space-y-4">
      <div>
        <h2 class="text-sm font-medium text-muted-foreground mb-2">
          Description
        </h2>
        <p
          class="text-base text-foreground leading-relaxed whitespace-pre-wrap"
        >
          {data.description}
        </p>
      </div>
    </div>
  </div>

  <div class="flex items-center justify-end gap-3 pt-4 border-t border-border">
    <Button variant="outline" size="default">Mark as Complete</Button>
    <Button variant="destructive" size="default">Delete</Button>
  </div>
</div>
