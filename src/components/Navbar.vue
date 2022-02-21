<template>
  <v-app-bar app>
    <v-btn text :to="isLoggedIn ? '/home' : '/'">
      git-flows
    </v-btn>

    <v-spacer></v-spacer>

    <v-menu v-if="isLoggedIn" offset-y>
      <template v-slot:activator="{ on, attrs }">
        <v-btn v-bind="attrs" v-on="on" text>
          {{ userProfile.name }}
          <v-icon right small> mdi-chevron-down </v-icon>
        </v-btn>
      </template>
      <v-list>
        <v-list-item to="/home"> Home </v-list-item>
        <v-list-item to="/settings"> Settings </v-list-item>
        <v-list-item @click="logout">
          <v-list-item-title> Logout </v-list-item-title>
        </v-list-item>
      </v-list>
    </v-menu>
    <v-btn v-else text to="/login"> Login </v-btn>
  </v-app-bar>
</template>

<script>
import { mapState } from "vuex";

export default {
  data() {
    return {};
  },
  computed: {
    ...mapState(["userProfile"]),
    isLoggedIn() {
      return Object.keys(this.userProfile).length > 0;
    },
  },
  methods: {
    logout() {
      this.$store.dispatch("logout");
    },
  },
};
</script>

<style scoped>
</style>