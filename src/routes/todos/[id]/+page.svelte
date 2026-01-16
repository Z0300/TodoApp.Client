<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/ui/button";
  import * as AlertDialog from "$lib/components/ui/alert-dialog/index";
  import { buttonVariants } from "$lib/components/ui/button/index";
  import { Badge } from "$lib/components/ui/badge/index";
  import BadgeCheckIcon from "@lucide/svelte/icons/badge-check";
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
          <Badge variant="secondary" class="text-white dark:bg-green-700">
            <BadgeCheckIcon />
            Completed
          </Badge>
        {:else}
          <Badge>Pending</Badge>
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
    {#if !data.isCompleted}
      <form action="?/complete" method="post" use:enhance>
        <Button variant="outline" type="submit" size="default">
          Mark as Complete</Button
        >
      </form>
      <AlertDialog.Root>
        <AlertDialog.Trigger class={buttonVariants({ variant: "destructive" })}
          >Delete</AlertDialog.Trigger
        >
        <AlertDialog.Content>
          <AlertDialog.Header>
            <AlertDialog.Title>Are you absolutely sure?</AlertDialog.Title>
            <AlertDialog.Description>
              This action cannot be undone. This will permanently delete your
              todo item and remove your data from our servers.
            </AlertDialog.Description>
          </AlertDialog.Header>
          <AlertDialog.Footer>
            <AlertDialog.Cancel>Cancel</AlertDialog.Cancel>
            <form action="?/delete" method="post">
              <AlertDialog.Action type="submit">Continue</AlertDialog.Action>
            </form>
          </AlertDialog.Footer>
        </AlertDialog.Content>
      </AlertDialog.Root>
    {/if}
  </div>
</div>
