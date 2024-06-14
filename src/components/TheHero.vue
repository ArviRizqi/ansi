<template>
  <div class="hero">
    <div class="hero-content">
      <h1>BEST GENSHIN EXTENSION</h1>
      <p>We are an extension provider for the Genshin Impact game with many features and affordable prices.</p>
      <div class="buttons">
        <button class="btn btn-primary"><img src="../assets/galeri.svg" alt=""> Media</button>
        <button class="btn btn-secondary"> <img src="../assets/cart.svg" alt="">Purchase</button>
      </div>
    </div>
    <div class="hero-video">
      <iframe src="https://www.youtube.com/embed/yo5lVGPnHFs" frameborder="3" allowfullscreen></iframe>
    </div>
  </div>
  <div class="features">
    <div class="card">
      <div class="card-icon1">
        <img src="../assets/shield.svg" alt="Always Safe">
      </div>
      <div class="card-content">
        <h2>Always Safe</h2>
        <p>We have a full on-board development team working 24/7 to ensure safety. Be it day or night.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon">
        <img src="../assets/lock.svg" alt="Always Undetected">
      </div>
      <div class="card-content">
        <h2>Always Undetected</h2>
        <p>Perfection is our craft; We take product quality very seriously and won't allow for anything less than perfect.</p>
      </div>
    </div>
    <div class="card">
      <div class="card-icon3">
        <img src="../assets/headset.svg" alt="Always Support">
      </div>
      <div class="card-content">
        <h2>Always Support</h2>
        <p>The support we provide knows no limits, our team of professionals will help you quickly solve any issues at any time. Simply unrivaled.</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
 .hero {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 5rem;
    background-color: #060435;
    color: #fff;
  }

 .hero-content {
    width: 50%;
  }

 .hero-video {
    width: 500px; /* Adjust width to your liking */
    height: 400px; /* Adjust height to your liking */
    overflow: hidden;
  }

 .hero-video iframe {
    width: 100%;
    height: 100%;
  }

 .buttons {
    display: flex;
    gap: 3rem;
    margin-top: 3rem;
  }

 .btn {
    padding: 1rem 2rem;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

 .btn-primary {
    background-color: #007bff;
  }

 .btn-secondary {
    background-color: #6c757d;
  }

 .btn-secondary img {
    width: 30px; /* Adjust the width to your liking */
    height: 30px; /* Adjust the height to your liking */
    margin-right: 0.5rem;
    vertical-align: middle;
  }

 .btn-primary img {
    width: 30px; /* Adjust the width to your liking */
    height: 30px; /* Adjust the height to your liking */
    margin-right: 0.5rem;
    vertical-align: middle;
  }

 .btn:hover {
    background-color: #111;
  }

 .features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem;
    background-color: #80979f60;
    color: hsla(0, 20%, 92%, 0.908);
    margin-top: 3rem;
  }

 .card {
    width: 30%;
    margin: 4rem;
    background-color: #060435;
    padding: 2rem;
    border-radius: 10px;
    box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  }

 .card-icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100px;
    border-radius: 50%;
    margin: 2rem auto;
  }

 .card-icon img {
    width: 200px;
    height: 200px;
  }

  .card-icon1{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100px;
    border-radius: 50%;
    margin: 2rem auto;
    
  }
  .card-icon1 img{
    width: 400px;
    height: 500px;
  }

  .card-icon3{
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 100px;
    border-radius: 50%;
    margin: 2rem auto;
    
  }

  .card-icon3 img{
    width: 300px;
    height: 400px;
  }

 .card-content {
    padding: 2rem;
  }
</style>