<script></script>
<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
      <div class="container d-flex justify-content-end">
        <a class="navbar-brand" href="#">Navbar</a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse d-flex justify-content-end" id="navbarNav">
          <ul class="navbar-nav">
            <li class="nav-item ms-auto">
              <a class="nav-link active" aria-current="page" href="#">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Features</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Pricing</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">Disabled</a>
            </li>
          </ul>
            <button class="btn btn-outline-success btn-left" type="button">button</button>
            <button class="btn btn-outline-success" type="button">button</button>
        </div>
      </div>
    </nav>
</template>
  
<style>
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  .btn{
    width: 75px;
  }

  .btn-left{
    margin-right: 8px;
  }
  </style>
  
