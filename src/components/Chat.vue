<script setup>
import Message from "./Message.vue";
import Sidebar from "./Sidebar.vue";
</script>

<template>
  <main
    class="grid grid-rows-[auto,min-content] overflow-hidden h-[calc(calc(100vh-env(safe-area-inset-bottom))-env(safe-area-inset-top))] grid-cols-[[min-content,auto,max-content] dark:bg-slate-800"
  >
    <!-- Sidebar -->
    <Sidebar
      class="col-start-1 col-end-2 row-start-1 row-end-3"
      :db="db"
      :channels="channels"
      :selectedChannel="selectedChannel"
      @swap="(newChannel) => (selectedChannel = newChannel)"
      @logOut="() => $emit('logOut', 'logOut')"
    />

    <!-- Messages -->
    <section
      class="max-w-screen flex flex-col justify-between items-start overflow-y-scroll overflow-x-hidden bg-slate-100 col-start-2 col-end-3 row-start-1 row-end-2 dark:bg-slate-900"
      id="chat"
    >
      <ul
        class="py-4 pt-[calc(1rem+env(safe-area-inset-top))] flex gap-2 flex-col items-start w-full"
      >
        <li
          :class="{ 'mt-2': checkIfPfp(index) }"
          v-for="(message, index) in messages"
          :id="message.id"
          class="grid grid-cols-[2rem,auto] w-full px-4"
        >
          <img
            referrerpolicy="no-referrer"
            v-if="checkIfPfp(index)"
            class="rounded-full"
            :src="JSON.parse(message.data().user).photoURL"
            alt=""
          />
          <Message
            @reply="selectedMessage = index"
            @delete="deleteMessage(message)"
            @seeReply="selectMessage(message.data().reply)"
            @isEditing="
              (value) => {
                editingMessage(value, message.id);
              }
            "
            @edit="(newMessage) => editMessage(newMessage, message)"
            :messages="messages"
            :message="message"
            :user="user"
            :index="index"
            class="col-start-2 col-end-3"
          />
        </li>
      </ul>
      <div ref="scrollIntoView" class="bg-red-500 w-screen"></div>
    </section>

    <!-- Send Messages -->
    <form
      class="w-full flex bg-slate-200 px-5 py-6 items-end mb-[env(safe-area-inset-bottom)] relative col-start-2 col-end-3 row-start-2 row-end-23 dark:bg-[#0c1221]"
      @submit.prevent="sendMessage"
      ref="sendForm"
    >
      <div v-if="selectedMessage" class="absolute top-0 -translate-y-full pb-4">
        <div class="bg-slate-200 px-3 py-2 rounded-md text-sm">
          Replying to message:
          <span class="text-slate-500">{{
            messages[selectedMessage].data().message
          }}</span
          ><button
            type="button"
            class="underline ml-4 text-indigo-500"
            @click="selectedMessage = null"
          >
            Cancel
          </button>
        </div>
      </div>
      <input
        class="py-2 px-3 rounded-l-md w-full outline-none border border-solid border-slate-300 dark:bg-slate-800 dark:border-slate-700"
        type="text"
        placeholder="Send a message"
        :value="newMess"
        @input="(event) => (newMess = event.target.value)"
      />
      <button
        class="py-2 px-3 rounded-r-md bg-indigo-500 active:bg-indigo-600 text-slate-200 active:text-slate-300 border border-l-0 border-solid border-slate-300 dark:border-slate-700"
        type="submit"
      >
        Send
      </button>
    </form>

    <!-- Users List -->
    <aside
      class="bg-white col-start-3 col-end-4 row-start-1 row-end-3 px-4 py-3 pt-6 dark:bg-[#0a0f1c]"
    >
      <h1 class="mb-2">Users - {{ users.length }}</h1>

      <ul class="flex flex-col items-start gap-2">
        <li v-for="user in onlineUsers" class="flex gap-2 items-center">
          <img
            referrerpolicy="no-referrer"
            :src="user.data().pfp"
            class="h-8 w-8 rounded-full"
            alt=""
          />
          <p class="whitespace-nowrap">
            {{ user.data().username }}
          </p>
        </li>
        <li v-for="user in offlineUsers" class="flex gap-2 items-center">
          <img
            referrerpolicy="no-referrer"
            :src="user.data().pfp"
            class="h-8 w-8 rounded-full brightness-75 contrast-75"
            alt=""
          />
          <p class="whitespace-nowrap text-slate-500 dark:text-slate-400">
            {{ user.data().username }}
          </p>
        </li>
      </ul>
    </aside>
  </main>
</template>

<script>
import {
  collection,
  query,
  onSnapshot,
  addDoc,
  orderBy,
  deleteDoc,
  doc,
  setDoc,
  limit,
} from "firebase/firestore";

export default {
  data() {
    return {
      newMess: "",
      messages: [],
      selectedMessage: null,
      users: [],
      offlineUsers: [],
      onlineUsers: [],
      selectedChannel: "channel-1",
      channels: [],
    };
  },
  props: {
    db: Object,
    user: Object,
  },
  emits: ["logOut"],
  methods: {
    watch() {
      // run the method on channel open (since only 1 channel just do signin)
      const q = query(
        collection(this.db, "messages", "public", this.selectedChannel),
        orderBy("time", "desc"),
        limit(25)
      );
      const watchCollection = onSnapshot(q, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.unshift(doc);
        });
        console.log(`Current messages: ${this.messages.length}`);
        console.log(this.messages.map((doc) => doc.data().message).join(" | "));
        setTimeout(() => {
          this.$refs.scrollIntoView.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    },
    watchChannels() {
      const unsub = onSnapshot(doc(this.db, "messages", "public"), (doc) => {
        console.log("CHANNELS: ", doc.data().channels);
        this.channels = doc.data().channels;
      });
    },
    watchStatus() {
      const q = query(collection(this.db, "users"));
      const watchCollection = onSnapshot(q, (querySnapshot) => {
        this.users = [];
        querySnapshot.forEach((doc) => {
          this.users.unshift(doc);
        });
        this.onlineUsers = this.users
          .filter((user) => user.data().online)
          .sort((a, b) => this.sortUsers(a, b));
        this.offlineUsers = this.users
          .filter((user) => !user.data().online)
          .sort((a, b) => this.sortUsers(a, b));
        console.log(`Online users: ${this.onlineUsers.length}`);
        console.log(
          this.onlineUsers.map((doc) => doc.data().username).join(" | ")
        );
      });
    },
    sortUsers(a, b) {
      if (a.data().username.toLowerCase() < b.data().username.toLowerCase()) {
        return -1;
      }
      if (a.data().username.toLowerCase() > b.data().username.toLowerCase()) {
        return 1;
      }
      return 0;
    },
    sendMessage() {
      const newMessage = this.newMess.trim();
      if (!newMessage) return;
      const newReply = this.selectedMessage;
      this.selectedMessage = null;
      this.newMess = "";
      addDoc(collection(this.db, "messages", "public", this.selectedChannel), {
        user: JSON.stringify(this.user),
        message: newMessage,
        time: Date.now(),
        reply: this.messages[newReply] ? this.messages[newReply].id : null,
        edited: false,
      });
    },
    async deleteMessage(docDetails) {
      await deleteDoc(
        doc(this.db, "messages", "public", this.selectedChannel, docDetails.id)
      );
    },
    imagify(text) {
      const textArr = text.split(" ");
      let final = [];
      for (let i = 0; i < textArr.length; i++) {
        if (
          textArr[i].startsWith("http://") ||
          textArr[i].startsWith("https://")
        ) {
          if (this.isImage(textArr[i])) {
            final.push(textArr[i]);
          }
        }
      }
      return final;
    },
    isLink(snippet) {
      if (
        (snippet.startsWith("https://") || snippet.startsWith("http://")) &&
        !snippet.includes("javascript:")
      ) {
        return true;
      }

      return false;
    },
    checkIfPfp(index) {
      if (!this.messages[index - 1]) {
        return true;
      }
      if (
        JSON.parse(this.messages[index - 1].data().user).uid !=
        JSON.parse(this.messages[index].data().user).uid
      ) {
        return true;
      }
      return false;
    },
    selectMessage(id) {
      let message = document.querySelector(
        `#${id} div.bg-white.px-2.py-2.rounded-md.rounded-tl-none`
      );
      message.classList.remove("selected");
      message.classList.add("selected");
      setTimeout(() => {
        message.classList.remove("selected");
      }, 1000);
    },
    editingMessage(value, id) {
      if (value) {
        document.getElementById(id).classList.add("bg-slate-200");
        document.getElementById(id).classList.add("dark:bg-slate-800");
        document.getElementById(id).classList.add("p-2");
      } else {
        document.getElementById(id).classList.remove("bg-slate-200");
        document.getElementById(id).classList.remove("dark:bg-slate-800");
        document.getElementById(id).classList.remove("p-2");
      }
    },
    editMessage(newMessage, message) {
      if (!newMessage || !message) {
        return;
      }
      setDoc(
        doc(this.db, "messages", "public", this.selectedChannel, message.id),
        {
          user: message.data().user,
          message: newMessage,
          time: message.data().time,
          reply: message.data().reply ? message.data().reply : null,
          edited: true,
        }
      );
      console.log("DONE");
    },
  },
  mounted() {
    this.watch();
    this.watchStatus();
    this.watchChannels();
    setDoc(doc(this.db, "users", this.user.uid), {
      username: this.user.displayName,
      pfp: this.user.photoURL,
      online: true,
    });
    window.onbeforeunload = () => {
      setDoc(doc(this.db, "users", this.user.uid), {
        username: this.user.displayName,
        pfp: this.user.photoURL,
        online: false,
      });
    };
    window.onclick = function (event) {
      if (
        !event.target.matches(".DROPDOWN-MENU") &&
        !event.target.matches(".DROPDOWN-MENU-TOGGLE")
      ) {
        var dropdowns = document.getElementsByClassName("DROPDOWN-MENU");
        var i;
        for (i = 0; i < dropdowns.length; i++) {
          var openDropdown = dropdowns[i];
          if (!openDropdown.classList.contains("hide")) {
            openDropdown.classList.add("hide");
          }
        }
      }
    };
  },
  watch: {
    selectedChannel() {
      const q = query(
        collection(this.db, "messages", "public", this.selectedChannel),
        orderBy("time", "desc"),
        limit(25)
      );
      const watchCollection = onSnapshot(q, (querySnapshot) => {
        this.messages = [];
        querySnapshot.forEach((doc) => {
          this.messages.unshift(doc);
        });
        console.log(`Current messages: ${this.messages.length}`);
        console.log(this.messages.map((doc) => doc.data().message).join(" | "));
        setTimeout(() => {
          this.$refs.scrollIntoView.scrollIntoView({ behavior: "smooth" });
        }, 100);
      });
    },
  },
};
</script>
