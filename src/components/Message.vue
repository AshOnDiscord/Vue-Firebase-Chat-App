<script setup>
import UpRightArrowVue from "../assets/Up-right-arrow.vue";
</script>

<template>
  <div class="px-2 flex flex-col items-start gap-1">
    <!-- Info -->
    <div v-if="detailsCheck()" class="flex gap-2 items-baseline">
      <!-- Username -->
      <h1>{{ JSON.parse(message.data().user).displayName }}</h1>
      <!-- Time -->
      <h2 class="text-slate-500 text-sm dark:text-slate-400">
        {{ formattedDate() }}
      </h2>
    </div>
    <!-- Reply -->
    <div
      v-if="message.data().reply"
      class="flex gap-1 items-end pl-1 text-slate-700 dark:text-slate-400"
    >
      <UpRightArrowVue
        class="pl-1"
        height="16"
        width="16"
        color="text-slate-700"
      />
      <p class="text-sm">
        Replying to
        <a @click="$emit('seeReply')" :href="'#' + message.data().reply">{{
          findReply()
        }}</a>
      </p>
    </div>
    <!-- Main -->
    <div class="flex gap-2">
      <!-- Message -->
      <div
        class="px-2 py-2 rounded-md"
        :class="{
          'bg-slate-100 dark:bg-slate-700': isEditing,
          'bg-white dark:bg-slate-800': !isEditing,
          'rounded-tl-none': !isEditing,
        }"
      >
        <p v-if="!isEditing && !isOnlyImages()">
          <span v-for="(snippet, index) in message.data().message.split(' ')">
            <span v-if="!isLink(snippet)">{{ snippet }}</span>
            <a v-else :href="snippet" class="underline">{{ snippet }}</a>
            {{
              index != message.data().message.split(" ").length - 1 ? " " : ""
            }}
          </span>
          <span
            class="text-xs text-slate-500 dark:text-slate-300"
            v-if="message.data().edited"
            >{{ " " }}(edited)</span
          >
        </p>
        <!-- Edit Message -->
        <p
          ref="newText"
          v-if="isEditing"
          v-on:keypress.enter.prevent="submitEdit()"
          v-on:keyup.escape="cancelEdit()"
          contenteditable="true"
        >
          {{ message.data().message }}
        </p>
        <div v-if="!isEditing && isOnlyImages()">
          <img
            class="rounded-md max-w-80 max-h-80"
            :class="{ 'rounded-tl-none': index == 0, 'mt-2': index != 0 }"
            v-for="(img, index) in images()"
            :src="img"
            alt=""
          />
        </div>
        <div v-if="!isEditing && !isOnlyImages() && containsImages()">
          <img
            class="rounded-md mt-2 max-w-80 max-h-80"
            v-for="img in images()"
            :src="img"
            alt=""
          />
        </div>
      </div>

      <!-- Extra Stuff -->
      <button
        class="relative DROPDOWN-MENU-TOGGLE"
        @click="togglePopup($event)"
      >
        :
        <div
          class="absolute hide bottom-8 left-0 bg-white rounded-md rounded-bl-none DROPDOWN-MENU flex text-sm flex-col shadow-sm border-slate-200 border transition-all opacity-100 dark:bg-slate-900 dark:border-slate-800"
        >
          <button class="px-2 py-1" @click="$emit('reply')">Reply</button>
          <button
            v-if="JSON.parse(message.data().user).uid == user.uid"
            class="bg-slate-50 px-2 py-1 dark:bg-slate-800/50"
            @click="edit()"
          >
            Edit
          </button>
          <button
            v-if="JSON.parse(message.data().user).uid == user.uid"
            class="px-2 py-1"
            @click="$emit('delete')"
          >
            Delete
          </button>
        </div>
      </button>
    </div>

    <!-- Edit Text -->
    <p class="text-sm text-slate-600 dark:text-slate-300" v-if="isEditing">
      escape to
      <button class="text-indigo-500 dark:text-indigo-400" @click="cancelEdit">
        cancel
      </button>
      • enter to
      <button class="text-indigo-500 dark:text-indigo-400" @click="submitEdit">
        save
      </button>
    </p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      isEditing: false,
    };
  },
  props: {
    message: Object,
    user: Object,
    messages: Object,
    index: Number,
  },
  methods: {
    isLink(snippet) {
      if (snippet.startsWith("https://") || snippet.startsWith("http://")) {
        return true;
      }

      return false;
    },
    isOnlyImages() {
      const message = this.message.data().message;
      const messageArr = message.split(" ");
      for (let i = 0; i < messageArr.length; i++) {
        if (!this.isImage(messageArr[i])) return false;
      }
      return true;
    },
    containsImages() {
      const message = this.message.data().message;
      const messageArr = message.split(" ");
      for (let i = 0; i < messageArr.length; i++) {
        if (this.isImage(messageArr[i])) return true;
      }
      return false;
    },
    images() {
      const message = this.message.data().message;
      const messageArr = message.split(" ");
      const imageArr = [];
      for (let i = 0; i < messageArr.length; i++) {
        if (this.isImage(messageArr[i])) imageArr.push(messageArr[i]);
      }
      return imageArr;
    },
    isImage(url) {
      return /^https?:\/\/.+(\.(jpg|jpeg|png|webp|avif|gif|svg))?$/i.test(url);
    },
    formattedDate() {
      // if same day, show time, else show date
      if (
        new Date(this.message.data().time).toDateString() !==
        new Date().toDateString()
      ) {
        return new Date(this.message.data().time).toLocaleDateString();
      }

      const date = new Date(this.message.data().time);
      const options = {
        hour: "numeric",
        minute: "numeric",
        hour12: true,
      };
      const time = date.toLocaleTimeString([], options);
      return time;
    },
    findReply() {
      const index = this.messages.findIndex(
        (doc) => doc.id == this.message.data().reply
      );
      return this.messages[index].data().message;
    },
    togglePopup(event) {
      event.currentTarget
        .querySelector(".DROPDOWN-MENU")
        .classList.toggle("hide");
      // event.target.querySelector(".DROPDOWN-MENU").add("show");
    },
    detailsCheck(index) {
      if (!this.messages[this.index - 1]) {
        return true;
      }
      if (
        JSON.parse(this.messages[this.index - 1].data().user).uid !=
        JSON.parse(this.messages[this.index].data().user).uid
      ) {
        return true;
      }
      return false;
    },
    edit() {
      this.isEditing = true;
      this.$emit("isEditing", true);
    },
    submitEdit() {
      console.log(this.$refs.newText.innerText);
      const newEdit = this.$refs.newText.innerText.trim();
      this.$emit("edit", newEdit);
      this.isEditing = false;
      this.$emit("isEditing", false);
    },
    cancelEdit() {
      this.isEditing = false;
      this.$emit("isEditing", false);
    },
  },
  emits: ["reply", "delete", "seeReply", "edit", "isEditing"],
};
</script>

<style scoped>
.DROPDOWN-MENU.hide {
  opacity: 0 !important;
  animation-name: hidey;
  animation-delay: 150ms;
  animation-iteration-count: 1;
  display: flex;
  animation-fill-mode: forwards;
}

@keyframes hidey {
  100% {
    visibility: hidden;
    display: none;
  }
}

.selected {
  animation-name: glow;
  animation-duration: 1s;
  animation-timing-function: cubic-bezier(0, 0, 0.2, 1);
  animation-iteration-count: 1;
}
@keyframes glow {
  0% {
    @apply bg-slate-100;
  }
  50% {
    @apply bg-yellow-200;
  }
}
</style>
