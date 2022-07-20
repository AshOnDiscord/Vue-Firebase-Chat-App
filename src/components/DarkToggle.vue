<template>
  <button
    @click="toggle()"
    class="text-slate-500 dark:text-slate-400"
    aria-hidden="true"
  >
    <svg
      v-if="darkMode == 'false'"
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke-linejoin="round"
        d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"
      />
    </svg>
    <svg
      v-else
      xmlns="http://www.w3.org/2000/svg"
      class="h-6 w-6"
      fill="none"
      viewBox="0 0 24 24"
      stroke="currentColor"
      stroke-width="2"
    >
      <path
        stroke-linecap="round"
        stroke5-linejoin="round"
        d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"
      />
    </svg>
  </button>
</template>

<script>
export default {
  data() {
    return {
      darkMode: "false",
    };
  },
  methods: {
    toggle() {
      console.log(this.darkMode);
      if (this.darkMode == "true") {
        this.darkMode = "false";
        document.body.classList.remove("dark");
      } else {
        this.darkMode = "true";
        document.body.classList.add("dark");
      }
      localStorage.setItem("darkTheme", this.darkMode);
    },
  },
  mounted() {
    if (localStorage.getItem("darkTheme")) {
      this.darkMode = localStorage.getItem("darkTheme");
    } else {
      localStorage.setItem("darkTheme", "false");
    }
    if (this.darkMode == "true") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  },
};
</script>
