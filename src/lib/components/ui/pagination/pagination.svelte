<script lang="ts">
  import { goto } from "$app/navigation";
  import { page } from "$app/state";
  import { Button } from "$lib/components/ui/button";

  type Props = {
    pageNumber: number;
    totalPages: number;
    hasPreviousPage: boolean;
    hasNextPage: boolean;
  };

  let { pageNumber, totalPages, hasPreviousPage, hasNextPage }: Props =
    $props();

  function updatePage(newPage: number) {
    const url = new URL(page.url);
    url.searchParams.set("pageNumber", newPage.toString());
    goto(url.toString(), { noScroll: false, invalidateAll: false });
  }

  function handlePrevious() {
    if (hasPreviousPage) {
      updatePage(pageNumber - 1);
    }
  }

  function handleNext() {
    if (hasNextPage) {
      updatePage(pageNumber + 1);
    }
  }
</script>

<div class="flex items-center justify-between gap-4 px-2">
  <div class="flex items-center gap-2">
    <Button
      variant="outline"
      size="sm"
      onclick={handlePrevious}
      aria-disabled={!hasPreviousPage}
      disabled={!hasPreviousPage}
      class="aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="M15.75 19.5 8.25 12l7.5-7.5"
        />
      </svg>
      Previous
    </Button>
    <Button
      variant="outline"
      size="sm"
      onclick={handleNext}
      aria-disabled={!hasNextPage}
      disabled={!hasNextPage}
      class="aria-disabled:opacity-50 aria-disabled:cursor-not-allowed"
    >
      Next
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="size-4"
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d="m8.25 4.5 7.5 7.5-7.5 7.5"
        />
      </svg>
    </Button>
  </div>

  <div class="text-sm text-muted-foreground">
    Page <span class="font-medium text-foreground">{pageNumber}</span> of{" "}
    <span class="font-medium text-foreground">{totalPages}</span>
  </div>
</div>
