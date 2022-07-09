<template>
  <button @click="$emit('logOut', 'logOut')">Log Out</button>
</template>

<script>
export default {
  // declare emitted events
  emits: ["logOut"],
};
</script>
