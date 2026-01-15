<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/ui/button/index";
  import FieldSeparator from "$lib/components/ui/field/field-separator.svelte";
  import * as Field from "$lib/components/ui/field/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Textarea } from "$lib/components/ui/textarea/index";

  let { form } = $props();
</script>

<div class="mx-auto max-w-2xl space-y-6">
  <div>
    <h1 class="text-3xl font-semibold tracking-tight text-foreground">
      Create New Todo
    </h1>
    <p class="mt-2 text-sm text-muted-foreground">
      Add a new todo item to your list.
    </p>
  </div>

  <div class="rounded-lg border border-border bg-card p-6 shadow-sm">
    <form method="POST" use:enhance>
      <Field.Group>
        <Field.Field data-invalid={!!form?.titleError}>
          <Field.Label>Title</Field.Label>
          <Input
            name="title"
            placeholder="Enter todo title"
            aria-invalid={!!form?.titleError}
            class="w-full"
          />
          {#if form?.titleError}
            <Field.Error>{form?.titleError}</Field.Error>
          {/if}
        </Field.Field>

        <Field.Field data-invalid={!!form?.descError}>
          <Field.Label>Description</Field.Label>
          <Textarea
            name="description"
            placeholder="Enter todo description (optional)"
            aria-invalid={!!form?.descError}
            class="w-full min-h-24"
          />
          {#if form?.descError}
            <Field.Error>{form?.descError}</Field.Error>
          {/if}
        </Field.Field>

        <FieldSeparator />

        <Field.Field orientation="horizontal" class="justify-end gap-3">
          <Button variant="outline" href="/todos">Cancel</Button>
          <Button type="submit">Create Todo</Button>
        </Field.Field>
      </Field.Group>
    </form>
  </div>
</div>
