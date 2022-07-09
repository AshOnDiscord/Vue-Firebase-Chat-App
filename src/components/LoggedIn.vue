<script setup>
import Chat from "./Chat.vue";
</script>

<template>
  <Chat :db="db" :user="user" @logOut="() => $emit('logOut', 'logOut')" />
</template>

<script>
export default {
  props: {
    db: Object,
    user: Object,
  },
  emits: ["logOut"],
};
</script>
