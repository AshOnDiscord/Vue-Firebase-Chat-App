<script setup>
import DarkToggle from "./DarkToggle.vue";
</script>

<template>
  <main
    class="flex min-h-screen w-screen justify-center items-center bg-slate-100 dark:bg-slate-900"
  >
    <div
      class="bg-white px-8 py-8 rounded-md shadow-md flex flex-col gap-4 justify-center items-center max-w-[min(80vw,30rem)] text-center dark:bg-slate-800"
    >
      <h1 class="text-2xl dark:text-slate-100">Sign In</h1>
      <h2 class="text-slate-800 dark:text-slate-300">
        Sign in using Google to the App because I'm too lazy to add the other
        methods. Also I'll set up perms later using Firebase Auth.
      </h2>
      <button
        class="px-3 rounded-md py-2 bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300 text-sm"
        @click="$emit('response', 'logIn')"
      >
        Sign in with Google
      </button>
    </div>
    <DarkToggle />
  </main>
</template>

<script>
export default {
  // declare emitted events
  emits: ["response"],
};
</script>
