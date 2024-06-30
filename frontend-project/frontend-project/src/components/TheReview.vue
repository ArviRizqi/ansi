<script>
import { library } from '@fortawesome/fontawesome-svg-core'
import { faStar } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(faStar)

export default {
  components: {
    FontAwesomeIcon,
  }

}
</script>
<template>
  <div class="container-fluid row">
      <div class="image-container col-4">
        <img src="../assets/eula(2).png" alt="Eula" class="image">
      </div>
      <div class="review-wrapper col-8 justify-content-between">
        <div class="review-container con-1">
          <div class="review">
            <div class="stars">
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
            </div>
            <p class="review-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer.
            </p>
            <div class="user">
              <img src="#" alt="User Avatar" class="user-avatar">
              <span class="user-info">
                <span class="user-name">Fatal Valo</span>
                <span class="user-title">KOREPI ULTIMATE USER</span>
              </span>
            </div>
          </div>
        </div>
        <div class="review-container con-2">
          <div class="review">
            <div class="stars">
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
              <FontAwesomeIcon :icon="['fas', 'star']" />
            </div>
            <p class="review-text">
              Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.
            </p>
            <div class="user">
              <img src="#" alt="User Avatar" class="user-avatar">
              <span class="user-info">
                <span class="user-name">Are you below me</span>
                <span class="user-title">KOREPI PLUS USER</span>
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
<style scoped>
.container-fluid{
  width: 100%;
  overflow: hidden !important;
  padding: 5rem 15rem;
  background-color: #ffc107dc;
}

.image-container {
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.image {
  width: 550%; /* Adjusted to maintain aspect ratio */
  height: 800px; /* Adjusted to maintain aspect ratio */
  background: transparent;
  background-clip: content-box;
  background-origin: content-box;
}

.review-wrapper {
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.review-container {
  margin-top: 250px;
  margin-right: 20px;
}

.con-1{
  margin-top: 150px;
}

.review {
  background-color: #060435;
  border-radius: 10px;
  padding: 20px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  color: white;
}

.stars {
  color: #ffc107;
  font-size: 20px;
  margin-bottom: 10px;
}

.review-text {
  font-size: 16px;
  line-height: 1.5;
  margin-bottom: 15px;
}

.user {
  display: flex;
  align-items: center;
}

.user-avatar {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 10px;
}

.user-info {
  display: flex;
  flex-direction: column;
}

.user-name {
  font-weight: bold;
  margin-right: 5px;
}

.user-title {
  color: #888;
  font-size: 12px;
}
</style>