<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary m-custom">
    <div class="container-fluid">
      <a class="navbar-brand logo" href="#">LOGO</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse justify-content-center" id="navbarSupportedContent">
        <ul class="navbar-nav nav me-auto mb-2 mb-lg-0">
          <li class="nav-item">
            <a class="nav-link active" aria-current="page" href="/">Home</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/product">Product</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/update">Update</a>
          </li>
          <li class="nav-item">
            <a class="nav-link" href="/contact">Contact</a>
          </li>
        </ul>  
      </div>
      <div class="">
        <button class="button cart" type="submit"><a href="../../login.html">Login</a></button>
      </div>
    </div>
  </nav>
</template>

<style scoped>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

.m-custom{
  margin: 0 15rem;
  height: 80px;
}

.logo {
  font-size: 2.2rem;
  font-weight: bold;
  color: #fff;
  margin-right: 2rem;
}

.nav {
  display: flex;
  list-style: none;
  padding: 0;
  gap: 3rem;

  .nav-item{
    margin-right: 1rem;
  }

  .nav-link{
    font-size: 1.2rem;
    font-family: "Poppins", sans-serif;
    font-weight: 600;
    color: #ededed;
    text-decoration: none;
    transition: color 0.3s ease;
  }

  .nav-link:hover {
    color: #ccc90d;
  }
}

.button {
  width: 115px;
  display: inline-block;
  padding: 0.4rem 1rem;
  background-color: #333;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  transition: background-color 0.3s ease;
  margin-right: 1rem;
  border: none;
  font-size: 16px;

  a{
    color: #fff;
  }
}

.button:hover {
  background-color: #555;
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

.button.cart img {
  width: 16px; /* adjust the width to your liking */
  height: 16px; /* adjust the height to your liking */
  margin-right: 0.5rem;
  vertical-align: middle;
}
</style>
