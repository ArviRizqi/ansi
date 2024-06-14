<script>
</script>

<template>
    <footer class="footer">
      <div class="footer-content">
        <div class="logo">
          LOGO
        </div>
        <div class="copyright">
          <span>Copyright © 2023, COMPANY</span>
          <span>All Rights Reserved.</span>
        </div>
      </div>
    </footer>
  </template>

<style scoped>
.footer {
  background-color: #1a1a3c; /* Match the background color */
  color: white;
  padding: 10px 20px;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.logo {
  padding-left: 100px;
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.copyright {
  padding-right: 100px;
  font-size: 12px;
  text-align: right;
  color: white;
}

.copyright span {
  display: block;
}
</style>