<template>
  <header>
    <h1>Tic-tac-toe</h1>
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/history">History</router-link>
    </nav>
  </header>
</template>

<style scoped>
header {
  background-color: #4caf50;
  padding: 10px;
  text-align: center;
}

nav {
  margin-top: 10px;
}

nav a {
  margin-right: 10px;
}
</style>
