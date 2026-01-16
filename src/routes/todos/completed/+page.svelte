<script lang="ts">
  import ItemPage from "$lib/components/PageItems.svelte";
  import type { PageData } from "./$types";
  export let data: PageData;
</script>

<ItemPage
  title="Completed todos"
  items={data.items}
  pageNumber={data.pageNumber}
  totalPages={data.totalPages}
  hasPreviousPage={data.hasPreviousPage}
  hasNextPage={data.hasNextPage}
/>
