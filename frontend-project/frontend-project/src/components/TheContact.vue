<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      email: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      // Handle form submission
      alert("Form submitted");
    },
  },
};
</script>

<template>
  <div class="contact-form">
    <h1>For More Details</h1>
      <h1>Contact Us!</h1>
    <form @submit.prevent="handleSubmit">
      <div class="row">
        <div class="col-left">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" id="name" v-model="name" required />
          </div>
          <div class="form-group">
            <label for="phone">Phone</label>
            <input type="tel" id="phone" v-model="phone" />
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" id="email" v-model="email" required />
          </div>
        </div>
        <div class="col-right">
          <div class="form-group">
            <label for="message">Comment or Message</label>
            <textarea id="message" v-model="message" rows="5"></textarea>
          </div>
          <button type="submit">Submit</button>
        </div>
      </div>
    </form>
  </div>
</template>



<style>
.contact-form {
  display: flex;
  flex-direction: column;
  align-items: left;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
  margin: 20px auto;
  max-width: 1000px;
}

h1 {
  color: white;
}

.row {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 100%;
}

.col-left,
.col-right {
  flex-basis: 48%;
}

.col-right {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 15px;
  width: 100%;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: white;
}

input,
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box;
  background-color: #1c1c1c; /* Changed to a dark background */
  color: white; /* Changed text color to white */
}

input::placeholder,
textarea::placeholder {
  color: #bbb; /* Placeholder text color */
}

textarea {
  resize: vertical;
}

button {
  padding: 10px 20px;
  background-color: #241ab6;
  color: white;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 16px;
  margin-top: 20px;
  align-self: flex-start;
}

button:hover {
  background-color: #6c757d;
}
</style>
