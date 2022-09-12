<template>
  <div class="header">
    <div class="container">
      <!-- Mobile Button -->
      <a
        href="#"
        data-target="slide-out"
        class="sidenav-trigger"
        id="mobile-btn"
      >
        <i class="xi-bars"></i>
      </a>
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.header {
  width: 100%;
  height: 80px;
  background-color: transparent;
  position: fixed;
  left: 0;
  top: 0;
  z-index: 10;

  #mobile-btn {
    width: 44px;
    height: 50px;
    position: absolute;
    right: 10px;
    top: 30px;
    text-align: center;
    color: $primary;
    z-index: 9999;

    i {
      line-height: 50px;
      font-size: 3.3rem;
    }
  }
}
</style>
