<script>
export default{
  name: "TheNavbar"
}
</script>
<template>
  <div class="container">
    <div class="logo">LOGO</div>
    <ul class="nav">
      <li><a href="../components/TheHero.vue">Home</a></li>
      <li><a href="#">Products</a></li>
      <li><a href="#">Update</a></li>
      <li><a href="#">Contacts</a></li>
    </ul>
    <div>
      <a href="#" class="button discord"><img src="../assets/discord.svg" alt="Discord"> Discord</a>
      <a href="#" class="button cart" style="margin-left: 1rem;"><img src="../assets/cart.svg" alt="Free Item"> Free Item</a>
    </div>
  </div>
</template>

<style scoped>

.container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem;
}

.logo {
  font-size: 2.5rem;
  font-weight: bold;
  color: #fff;
  margin-right: 2rem;
}

.nav {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 3rem;
}

.nav li {
  margin-right: 1rem;
}

.nav a {
  color: #aaa;
  text-decoration: none;
  transition: color 0.3s ease;
}

.nav a:hover {
  color: #ccc90d;
}

.button {
  display: inline-block;
  padding: 0.5rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
}

.button:hover {
  background-color: #555;
}

.button.discord {
  background-color: #7289da;
}

.button.discord:hover {
  background-color: #444;
}

.button.cart {
  background-color: #7289da;
}

.button.cart:hover {
  background-color: #444;
}

.button img {
  margin-right: 0.5rem;
  vertical-align: middle;
}
.button.discord img {
  width: 16px; /* adjust the width to your liking */
  height: 16px; /* adjust the height to your liking */
  margin-right: 0.5rem;
  vertical-align: middle;
}
.button.cart img {
  width: 16px; /* adjust the width to your liking */
  height: 16px; /* adjust the height to your liking */
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
  
