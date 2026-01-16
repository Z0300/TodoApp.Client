<script
  lang="ts"
  generics="T extends {id: string | number, title:string, description: string, isCompleted: boolean}"
>
  import { enhance } from "$app/forms";

  import { Button, buttonVariants } from "$lib/components/ui/button";
  import * as Item from "$lib/components/ui/item/index";
  import { Pagination } from "$lib/components/ui/pagination";
  import * as AlertDialog from "./ui/alert-dialog";

  export let title: string;
  export let items: T[] = [];

  export let pageNumber = 1;
  export let totalPages = 1;
  export let hasPreviousPage = false;
  export let hasNextPage = false;
</script>

<div class="space-y-6">
  <div class="flex items-center justify-between">
    <div>
      <h1 class="text-3xl font-semibold tracking-tight text-foreground">
        {title}
      </h1>
      {#if items.length === 0}
        <p class="mt-2 text-sm text-muted-foreground">No todos yet</p>
      {/if}
    </div>
  </div>

  <div class="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
    {#each items as item (item.id)}
      <Item.Root
        variant="outline"
        class="bg-card hover:bg-accent/50 transition-colors duration-200 shadow-sm hover:shadow-md border-border"
      >
        <div class="flex-1 flex flex-col space-y-3">
          <div class="flex-1 space-y-2">
            <Item.Title class="text-base font-semibold leading-tight">
              <a
                href="/todos/{item.id}"
                class="text-foreground hover:text-primary transition-colors"
              >
                {item.title}
              </a>
            </Item.Title>
            <Item.Description
              class="text-sm text-muted-foreground line-clamp-3 leading-relaxed"
            >
              {item.description}
            </Item.Description>
          </div>

          {#if !item.isCompleted}
            <Item.Actions class="pt-2 border-t border-border flex gap-2">
              <form action="?/complete" method="post" use:enhance>
                <input type="hidden" name="id" value={item.id} />
                <Button variant="outline" type="submit" size="default">
                  Complete</Button
                >
              </form>
              <AlertDialog.Root>
                <AlertDialog.Trigger
                  class={buttonVariants({ variant: "destructive" })}
                  >Delete</AlertDialog.Trigger
                >
                <AlertDialog.Content>
                  <AlertDialog.Header>
                    <AlertDialog.Title
                      >Are you absolutely sure?</AlertDialog.Title
                    >
                    <AlertDialog.Description>
                      This action cannot be undone. This will permanently delete
                      your todo item and remove your data from our servers.
                    </AlertDialog.Description>
                  </AlertDialog.Header>
                  <AlertDialog.Footer>
                    <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
                    <form action="?/delete" method="post">
                      <input type="hidden" name="id" value={item.id} />
                      <AlertDialog.Action type="submit"
                        >Continue</AlertDialog.Action
                      >
                    </form>
                  </AlertDialog.Footer>
                </AlertDialog.Content>
              </AlertDialog.Root>
            </Item.Actions>
          {/if}
        </div>
      </Item.Root>
    {/each}
  </div>

  {#if totalPages > 1}
    <div class="flex justify-center pt-4 border-t border-border">
      <Pagination {pageNumber} {totalPages} {hasPreviousPage} {hasNextPage} />
    </div>
  {/if}
</div>
