<script setup>
import SignOut from "./Sign-out.vue";
import DarkToggle from "./DarkToggle.vue";
</script>

<template>
  <aside
    class="px-8 py-6 bg-slate-200/75 flex flex-col items-center justify-between dark:bg-slate-900/75"
  >
    <section>
      <!-- Channel List -->
      <h1>Channels</h1>
      <ul class="mt-2">
        <li
          :class="{
            'bg-white/75 dark:bg-slate-700/75': channel == selectedChannel,
            'text-slate-700 dark:text-slate-300': channel != selectedChannel,
          }"
          class="px-2 py-1 rounded-md"
          v-for="channel in channels"
        >
          <button @click="$emit('swap', channel)">{{ channel }}</button>
        </li>
      </ul>
    </section>
    <div class="flex justify-center items-center gap-2">
      <SignOut
        class="py-2 px-3 rounded-md bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300"
        @logOut="() => $emit('logOut', 'logOut')"
      />
      <DarkToggle />
    </div>
  </aside>
</template>

<script>
export default {
  props: {
    db: Object,
    channels: Array,
    selectedChannel: String,
  },
  emits: ["swap", "logOut"],
  mounted() {
    console.log("STUFF:", this.channels[0] == this.selectedChannel);
  },
};
</script>
