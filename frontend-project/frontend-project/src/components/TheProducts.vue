<script>
    
  export default {
    data() {
      return {
        products: [
          {
            id: 1,
            name: 'Genshin Plus',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+Plus',
            price: 30.00,
          },
          {
            id: 2,
            name: 'Genshin Ultimate',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+Ultimate',
            price: 30.00,
          },
          {
            id: 3,
            name: 'Genshin Ultimate V.2.0',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+Ultimate+V.2.0',
            price: 30.00,
          },
          {
            id: 4,
            name: 'Genshin Platinum',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+Platinum',
            price: 30.00,
          },
          {
            id: 5,
            name: 'Genshin ColorBot',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+ColorBot',
            price: 15.00,
          },
          {
            id: 6,
            name: 'Genshin ColorBot 2.0',
            image: 'https://via.placeholder.com/300x200.png?text=Genshin+ColorBot+2.0',
            price: 15.00,
          },
        ],
      };
    },
  };
  </script>

<template>
    <div class="container">
      <div class="search-bar">
        <input type="text" placeholder="Search for a product..." />
        <button class="m-0">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-search">
            <circle cx="11" cy="11" r="8"></circle>
            <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
          </svg>
        </button>
      </div>
      <div class="sort-by">
        <label for="sort-by">Index by:</label>
        <select id="sort-by">
          <option value="default">Default</option>
          <option value="price">Price</option>
          <option value="name">Name</option>
        </select>
      </div>
      <div class="products">
        <div class="product" v-for="product in products" :key="product.id">
          <img :src="product.image" :alt="product.name" />
          <div class="product-info">
            <h3>{{ product.name }}</h3>
            <p>Starting at: ${{ product.price }}</p>
            <button class="group">Buy</button>
          </div>
        </div>
      </div>
    </div>
  </template>
  
  
  
  <style scoped>
  .container {
    display: flex;
    flex-direction: column;
    align-items: center;
    padding: 20px;
  }
  
  .search-bar {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .search-bar input {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    flex-grow: 1;
    margin-right: 10px;
  }
  
  .search-bar button {
    background-color: #333;
    color: #fff;
    padding: 10px;
    padding-top: 12px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  
  .sort-by {
    display: flex;
    align-items: center;
    width: 100%;
    margin-bottom: 20px;
  }
  
  .sort-by label {
    margin-right: 10px;
  }
  
  .sort-by select {
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
  }
  
  .products {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    width: 100%;
  }
  
  .product {
    width: 30%;
    margin-bottom: 20px;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 10px;
  }
  
  .product img {
    width: 100%;
    height: auto;
    margin-bottom: 10px;
  }
  
  .product-info {
    text-align: center;
  }
  
  .product-info h3 {
    margin-bottom: 5px;
  }
  
  .product-info p {
    margin-bottom: 10px;
  }
  
  .group {
    background-color: #333;
    color: #fff;
    padding: 10px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
  }
  </style>