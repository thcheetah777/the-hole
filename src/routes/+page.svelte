<script lang="ts">
  import { onMount } from "svelte";
  import { fade } from "svelte/transition";

  class Section {
    scrolled: number;

    constructor(scrolled: number = 0) {
      this.scrolled = scrolled;
    }
  }

  const bigNumberFormatter = new Intl.NumberFormat("en-US");

  let scrolledEnough = false;
  let scrolledHeight = "";

  let sections: Section[] = [new Section()];

  function scroll() {
    scrolledEnough = window.scrollY > (window.innerHeight / 5) * 3;
    scrolledHeight = bigNumberFormatter.format(+Math.round(window.scrollY));

    if ((window.innerHeight + window.scrollY) + 100 >= document.documentElement.scrollHeight) {
      console.log("at bottom of page");
      sections = [...sections, new Section(window.scrollY)];
    }
  }

  function background() {
    let result = "";

    for (let i = 0; i < 6000; i++) {
      if (Math.random() > 0.98) {
        if (Math.random() > 0.03) {
          result += ".";
        } else {
          const random = Math.random();
          if (random > 0.8) {
            result += ">";
          } else if (random > 0.6) {
            result += "<";
          } else if (random > 0.4) {
            result += "^";
          }
        }
      } else {
        result += " ";
      }
    }

    return result;
  }

  onMount(() => {
    document.addEventListener("scroll", scroll);

    return () => document.removeEventListener("scroll", scroll);
  });
</script>

<h1 class="text-center text-5xl my-36 font-light">The Hole</h1>

<div class="flex flex-col items-center gap-2 text-lg mb-8">
  <p>Scroll to enter</p>
  <p class="text-3xl animate-bounce">↓</p>
</div>

<main class="flex flex-col items-center h-full relative">
  <!-- Entrance to the hole -->
  <div class="border-2 border-white rounded-1/2 w-60 h-12 bg-black z-20"></div>
  <!-- Ground -->
  <div class="border-t-2 border-white w-full absolute mt-6"></div>

  <div class="-mt-6 w-full">
    {#each sections as section}
      <!-- Sides -->
      <div class="w-full flex justify-center">
        <div class="absolute break-all whitespace-pre-wrap text-xl">
          {background()}
        </div>
        <div class="border-x-2 border-white h-[100vh] w-60 bg-black z-10"></div>
      </div>
    {/each}
  </div>
</main>

{#if scrolledEnough}
  <p class="fixed bottom-8 left-8" transition:fade>
    You have scrolled {scrolledHeight} pixels down the hole
  </p>
{/if}
