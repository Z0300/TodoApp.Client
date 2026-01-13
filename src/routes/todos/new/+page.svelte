<script lang="ts">
  import { enhance } from "$app/forms";
  import { Button } from "$lib/components/ui/button/index";
  import * as Field from "$lib/components/ui/field/index";
  import { Input } from "$lib/components/ui/input/index";
  import { Textarea } from "$lib/components/ui/textarea/index";
  let { data, form } = $props();
</script>

<form method="POST" use:enhance>
  <Field.Group>
    <Field.Field>
      <Field.Label>Title</Field.Label>
      <Input name="title" placeholder="Title" />
      {#if form?.errors?.fieldErrors.title}
        <p class="text-red-500">
          {form?.errors?.fieldErrors.title}
        </p>
      {/if}
    </Field.Field>

    <Field.Field>
      <Field.Label>Description</Field.Label>
      <Textarea name="description" placeholder="Description" />
      {#if form?.errors?.fieldErrors.description}
        <p class="text-red-500">
          {form?.errors?.fieldErrors.description}
        </p>
      {/if}
    </Field.Field>

    <Field.Field orientation="horizontal">
      <Button type="submit">Submit</Button>
      <a href="/">
        <Button variant="outline" type="button">Cancel</Button>
      </a>
    </Field.Field>
  </Field.Group>
</form>
