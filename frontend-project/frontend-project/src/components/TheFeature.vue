<template>
    <div class="features">
        <h1>Our Services</h1>
        <div class="row m-custom-feature justify-content-between">
        <div class="col-5">
            <div class="card-custom row ">
                <div class="card-icon col-4">
                    <img src="../assets/shield.svg" alt="Always Safe">
                </div>
                <div class="card-content col-8">
                    <h2>Always Safe</h2>
                    <p>We have a full on-board development team working 24/7 to ensure safety. Be it day or night.</p>
                </div>
            </div>
        </div>
        <div class="col-5">
            <div class="card-custom row">
                <div class="card-icon col-4 icon2">
                    <img src="../assets/lock.svg" alt="Always Undetected">
                </div>
                <div class="card-content col-8">
                    <h2>Always Undetected</h2>
                    <p>Perfection is our craft; We take product quality very seriously and won't allow for anything less than perfect.</p>
                </div>
            </div>
        </div>
    </div>
    <div class="col-5 mx-auto mt-5">
        <div class="card-custom row">
            <div class="card-icon col-4 icon3">
                <img src="../assets/headset.svg" alt="Always Support">
            </div>
            <div class="card-content col-8">
                <h2>Always Support</h2>
                <p>The support we provide knows no limits, our team of professionals will help you quickly solve any issues at any time. Simply unrivaled.</p>
            </div>
        </div>
    </div>
    </div>
</template>

<style>
.features {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    padding: 5rem;
    background-color: #80979f60;
    color: hsla(0, 20%, 92%, 0.908);
    margin-top: 3rem;
    padding-top: 50px;

    h1{
        margin-bottom: 50px;
    }
  }

  .m-custom-feature{
    padding: 0 15rem;
  }

  .card-custom{
    background-color: #16163F;
    border-radius: 10px;
  }

  .card-content{
    padding: 40px 5px;

  }

 .card-icon {
    height: auto;
  }

 .card-icon img {
    width: 200px;
    height: 200px;
  }
  .icon2 img{
    padding: 35px 35px 35px 0;
  }

</style>