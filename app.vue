<template>
  <v-app>
    <v-app-bar elevation="1">
      <v-btn to="/" nuxt variant="tonal">HMP</v-btn>
      <v-spacer></v-spacer>
      <v-btn to="/about" nuxt>About</v-btn>
    </v-app-bar>

    <v-main>
      <NuxtPage />
    </v-main>
  </v-app>
</template>
