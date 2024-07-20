<script setup>
import SignIn from "./components/Sign-in.vue";
import SignOut from "./components/Sign-out.vue";
import LoggedIn from "./components/LoggedIn.vue";
</script>

<template>
  <SignIn v-if="!user" @response="(msg) => googleSignin()" />
  <div v-else>
    <LoggedIn
      class="dark:text-white"
      :db="db"
      :user="user"
      @logOut="() => googleSignout()"
    />
  </div>
</template>

<script>
import { initializeApp } from "firebase/app";
import { getFirestore, doc, updateDoc, collection } from "firebase/firestore";
import {
  getAuth,
  GoogleAuthProvider,
  signInWithPopup,
  signOut,
} from "firebase/auth";

// Yes, IK this is bad, I don't want to majorly rewrite this old project, I'm just trying to get it working.
// Also I'd need to have a server in that case which is a hassle, espically if vercel doesn't end up working.
const firebaseConfig = {
  apiKey: "AIzaSyA7QOFfxtcX5_86-pwGKyDwoV0QFNQqpJE",
  authDomain: "auth-vue-firevbase.firebaseapp.com",
  projectId: "auth-vue-firevbase",
  storageBucket: "auth-vue-firevbase.appspot.com",
  messagingSenderId: "853679707197",
  appId: "1:853679707197:web:5f0084be8ba5fa2eb4c654",
  measurementId: "G-0D23SZXQE9",
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app);

const db = getFirestore(app);

export default {
  data() {
    return {
      user: null,
    };
  },
  methods: {
    googleSignin() {
      console.log("stage 1");
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
        .then((result) => {
          // This gives you a Google Access Token. You can use it to access the Google API.
          const credential = GoogleAuthProvider.credentialFromResult(result);
          const token = credential.accessToken;

          this.user = result.user;
          localStorage.setItem("user", JSON.stringify(this.user));

          console.log("user: ", this.user);
          console.log("Username: ", this.user.displayName);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;

          console.log(error);
          console.log(errorCode);
          console.log(errorCode);
        });
    },
    googleSignout() {
      const user = this.user;
      console.log(user.uid);
      const docRef = doc(db, "users", user.uid);
      updateDoc(docRef, {
        online: false,
      });
      signOut(auth)
        .then(() => {
          // Sign-out successful.
          console.log("Sign-out successful.");
          this.user = null;
          localStorage.removeItem("user");
        })
        .catch((error) => {
          // An error happened.
          console.log("Error");
          console.log(error);
        });
    },
  },
  mounted() {
    this.user = JSON.parse(localStorage.getItem("user"));
  },
  components: {
    SignIn,
    SignOut,
  },
};
</script>

<style></style>
