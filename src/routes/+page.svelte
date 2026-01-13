<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Item from "$lib/components/ui/item/index";
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

{#if data.todos.length === 0}
  <div class="py-12 text-gray-400">No todos found</div>
{/if}
<div class="max-w-5xl mx-auto p-6">
  <div class="grid gap-6 sm:grid-cols-2 lg:grid-cols-3 auto-rows-fr">
    {#each data.todos as todo (todo.id)}
      <Item.Root
        variant="outline"
        class="bg-gray-800 p-4 rounded-lg shadow group flex flex-col"
      >
        <!-- Top-left aligned content -->
        <div class="flex-1 flex flex-col space-y-2 text-left">
          <Item.Title class="text-lg font-semibold">
            <a href="/todos/{todo.id}">{todo.title}</a>
          </Item.Title>

          <!-- Description with min-height to keep cards consistent -->
          <Item.Description class="text-sm text-muted-foreground min-h-12">
            {todo.description || "No description provided."}
          </Item.Description>
        </div>

        <!-- Actions at bottom, left-aligned -->
        <Item.Actions class="mt-4 flex gap-2 justify-start">
          <Button variant="outline" size="sm">Complete</Button>
          <Button variant="destructive" size="sm">Remove</Button>
        </Item.Actions>
      </Item.Root>
    {/each}
  </div>
</div>
