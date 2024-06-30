<template>
  <div class="hero ">
    <div class="container-fluid row mx-auto m-custom-hero">
      <div class="col-6 pt-2">
        <h1 class="banner-text">BEST GENSHIN EXTENSION</h1>
        <p class=" pr-5 banner-desc my-2">We are an extension provider for the Genshin Impact game with many features and affordable prices.</p>
        <div class="buttons">
          <button class="btn btn-primary"><img src="../assets/galeri.svg" alt=""> Media</button>
          <button class="btn btn-secondary"> <img src="../assets/cart.svg" alt="">Purchase</button>
        </div>
      </div>
      <div class="hero-video col-6 row">
          <iframe src="https://www.youtube.com/embed/yo5lVGPnHFs" frameborder="3" allowfullscreen></iframe>
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
    background-color: #16163F;
    color: #fff;
    height: auto;
  }

  .m-custom-hero{
    margin: 0 15rem;
    padding: 5rem 8rem;
  }

  .banner-text{
    font-family: 'poppins', sans-serif;
    font-size: 90px;
    font-weight: bold;
    color: #ffc107;
  }

  .banner-desc{
    font-size: 18px;
    font-weight: 400;
  }

 .hero-video {
    width: 300px;
    height: auto;
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
    padding: 0.5rem 2rem;
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

</style>