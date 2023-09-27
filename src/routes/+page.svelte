<script lang="ts">
  import { onMount } from "svelte";

  let bigNumberFormatter = new Intl.NumberFormat("en-US");

  let scrolledEnough = false;
  let scrolledHeight = "";

  function scroll() {
    scrolledEnough = window.scrollY > (window.innerHeight / 5) * 3;
    scrolledHeight = bigNumberFormatter.format(+window.scrollY.toFixed(0));
  }

  onMount(() => {
    document.addEventListener("scroll", scroll);
    return () => document.removeEventListener("scroll", scroll);
  });
</script>

<h1 class="text-center text-5xl my-36">The Hole</h1>

<div class="flex flex-col items-center gap-0 text-lg mb-8">
  <p>Scroll to enter</p>
  <p class="text-3xl">↓</p>
</div>

<main class="flex w-full justify-center">
  <!-- Left side of the hole -->
  <div class="border border-white h-[10000vh] mt-10 relative"></div>

  <!-- Entrance to the hole -->
  <div class="border-2 border-white rounded-1/2 w-80 h-20 bg-black"></div>
  <!-- Ground -->
  <div class="border border-white w-full absolute mt-10 -z-10"></div>

  <!-- Right side of the hole -->
  <div class="border border-white h-[10000vh] mt-10"></div>
</main>

{#if scrolledEnough}
  <p class="fixed bottom-8 left-8">Scrolled {scrolledHeight} pixels down</p>
{/if}
