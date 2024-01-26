<template>
  <v-app>
    <v-main>
      <div class="navbar">
        <NuxtLink to="/" class="navbar-item">HOME</NuxtLink>
        <NuxtLink to="/about" class="navbar-item">ABOUT</NuxtLink>
      </div>
      <NuxtPage />
    </v-main>
  </v-app>
</template>

<style>
.navbar {
  padding-top: 8px;
  position: fixed;
  z-index: 100;
  width: 100%;
  text-align: center;
}

.navbar-item {
  font-family: "Cormorant Garamond", sans-serif;
  font-size: 1.4rem;
  color: black;
  text-decoration: none;
}

.navbar-item+.navbar-item {
  margin-left: 64px;
}

.navbar-item:hover {
  color: black;
  text-decoration: underline;
}
</style>
