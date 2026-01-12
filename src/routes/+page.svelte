<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Item from "$lib/components/ui/item/index";
  import type { PageProps } from "./$types";
  let { data }: PageProps = $props();
</script>

{#if data.todos.length === 0}
  <div class="text-center py-12 text-gray-400">No todos found</div>
{/if}

<div class="max-w-5xl space-y-6">
  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
    {#each data.todos as todo (todo.id)}
      <Item.Root
        variant="outline"
        class="bg-gray-800 p-4 rounded-lg shadow group"
      >
        <div class="space-y-2">
          <Item.Title class="text-lg font-semibold ">
            <a href="/todos/{todo.id}">
              {todo.title}
            </a>
          </Item.Title>

          <Item.Description class="text-sm text-muted-foreground">
            A simple item with title and description.
          </Item.Description>
        </div>

        <Item.Actions class="mt-4 flex gap-2">
          <Button variant="outline" size="sm">Complete</Button>
          <Button variant="destructive" size="sm">Remove</Button>
        </Item.Actions>
      </Item.Root>
    {/each}
  </div>
</div>
