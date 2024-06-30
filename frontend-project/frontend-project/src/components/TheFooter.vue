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
  padding: 0 15rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 80px;
  border-top: 1px #646464 solid;
}

.footer-content {
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
}

.logo {
  font-size: 24px;
  font-weight: bold;
  color: white;
}

.copyright {
  font-size: 12px;
  text-align: right;
  color: white;
}

.copyright span {
  display: block;
}
</style>