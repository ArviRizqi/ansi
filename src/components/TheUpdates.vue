<template>
    <div class="updates">
      <div class="update" v-for="(item, index) in updates" :key="index">
        <img :src="item.image" alt="Update Image" class="update-image" />
        <div class="update-content">
          <h3>{{ item.title }}</h3>
          <p>{{ item.description }}</p>
          <button class="view-more">View More</button>
        </div>
      </div>
    </div>
  </template>
  
  <script>
  export default {
    data() {
      return {
        updates: [
          {
            image: '',
            title: 'Genshin Plus',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
          },
          {
            image: '',
            title: 'Genshin Plus',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
          },
          {
            image: '',
            title: 'Genshin Plus',
            description: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.'
          }
        ]
      };
    }
  };
  </script>
  
  <style scoped>
  .updates {
    display: flex;
    flex-direction: column;
    gap: 20px;
  }
  
  .update {
    display: flex;
    background-color: none;
    padding: 20px;
    border-radius: 8px;
    color: #FFFFFF;
  }
  
  .update-image {
    width: 150px;
    height: 150px;
    object-fit: cover;
    margin-right: 20px;
    border-radius: 8px;
  }
  
  .update-content {
    flex: 1;
  }
  
  .view-more {
    background-color: #3B7CFF;
    border: none;
    color: white;
    padding: 10px 20px;
    text-align: center;
    text-decoration: none;
    display: inline-block;
    font-size: 16px;
    margin-top: 10px;
    border-radius: 8px;
    cursor: pointer;
  }
  
  .view-more:hover {
    background-color: #1A5AC8;
  }
  </style>
  