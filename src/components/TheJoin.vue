<script>
export default {
  data() {
    return {
      title: 'KOREPI!',
      subtitle: 'Have questions?',
      description: 'You can visit our Discord server or webpanel for product purchase and questions.'
    }
  },
  methods: {
    joinDiscord() {
      // Add your Discord server link here
      window.location.href = 'https://discord.com/your-server-link';
    }
  }
}
</script>

<template>
    <div class="container">
      <h1>{{ title }}</h1>
      <h2>{{ subtitle }}</h2>
      <p>{{ description }}</p>
      <button @click="joinDiscord">
        JOIN DISCORD
        <img src = "../assets/arrow.svg" class="arrow-icon"/>
      </button>
    </div>
  </template>

  <style scoped>
.container {
  text-align: left;
  background-color: transparent;
  color: #fff;
  padding: 20px;
}

h1 {
  font-size: 3em;
  margin-bottom: 1em;
}

h2 {
  font-size: 2em;
  margin-bottom: 0.5em;
}

p {
  font-size: 1.2em;
  line-height: 1.5;
  margin-bottom: 1em;
}

button {
  background-color: transparent;
  color: #fff;
  padding: 10px 20px;
  border: none;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #404448;
}

.arrow-icon{
  margin-left: 10px;
  width: 20px; /* Adjust size as needed */
  height: auto;
}
</style>