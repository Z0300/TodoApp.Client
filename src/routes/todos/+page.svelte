<script lang="ts">
  import { Button } from "$lib/components/ui/button";
  import * as Item from "$lib/components/ui/item/index";
  import { Pagination } from "$lib/components/ui/pagination";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-semibold tracking-tight text-foreground">
        All Todos
      </h1>
      {#if data.items.length === 0}
        <p class="mt-2 text-sm text-muted-foreground">No todos yet</p>
      {/if}
    </div>
  </div>

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {#each data.items as todo (todo.id)}
      <Item.Root
        variant="outline"
        class="bg-card hover:bg-accent/50 transition-colors duration-200 shadow-sm hover:shadow-md border-border"
      >
        <div class="flex-1 flex flex-col space-y-3">
          <div class="flex-1 space-y-2">
            <Item.Title class="text-base font-semibold leading-tight">
              <a
                href="/todos/{todo.id}"
                class="text-foreground hover:text-primary transition-colors"
              >
                {todo.title}
              </a>
            </Item.Title>
            <Item.Description
              class="text-sm text-muted-foreground line-clamp-2 leading-relaxed"
            >
              {todo.description}
            </Item.Description>
          </div>
          <Item.Actions class="pt-2 border-t border-border flex gap-2">
            <Button variant="outline" size="sm" class="flex-1">Complete</Button>
            <Button variant="destructive" size="sm" class="flex-1"
              >Remove</Button
            >
          </Item.Actions>
        </div>
      </Item.Root>
    {/each}
  </div>

  {#if data.totalPages > 1}
    <div class="flex justify-center pt-4 border-t border-border">
      <Pagination
        pageNumber={data.pageNumber}
        totalPages={data.totalPages}
        hasPreviousPage={data.hasPreviousPage}
        hasNextPage={data.hasNextPage}
      />
    </div>
  {/if}
</div>
