<template>
  <div>
    <transition
      name="custom-classes-transition"
      enter-active-class="animated fadeIn slow 1s"
      leave-active-class="animated slideOutRight"
    >
      <router-view class="view" />
    </transition>
  </div>

  <!-- Navbar -->
  <div id="slide-out" class="sidenav">
    <div class="close-btn sidenav-close">
      <i class="xi-close"></i>
    </div>

    <h1 class="logo">
      <router-link to="/home">
        <img src="./assets/images/loading/logo@2x.png" alt="logo icon" />
        <span class="ir">Logo</span>
      </router-link>
    </h1>

    <div class="gnb">
      <ul>
        <li>
          <router-link to="/home" class="sidenav-close"
            ><i class="xi-home"></i>HOME</router-link
          >
        </li>
        <li>
          <router-link to="/main" class="sidenav-close"
            ><i class="xi-profile"></i>MY ABOUT</router-link
          >
        </li>
        <li>
          <router-link to="/skills" class="sidenav-close"
            ><i class="xi-chart-line"></i>SKILLS</router-link
          >
        </li>
        <li>
          <router-link to="/portfolio" class="sidenav-close"
            ><i class="xi-business"></i>PORTFOLIO</router-link
          >
        </li>
        <li>
          <router-link to="/contact" class="sidenav-close"
            ><i class="xi-mail"></i>CONTACT</router-link
          >
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data() {
    return {};
  },
  mounted() {
    this.sideNav();
  },
  methods: {
    sideNav() {
      $('.sidenav').sidenav({
        edge: 'left',
      });
    },
  },
};
</script>

<style lang="scss">
@import '../scss/default';
#app {
  width: 100%;
  overflow: hidden;

  .sidenav {
    background-color: $bg-color3;
    width: 255px;
    height: 700px;
    position: fixed;
    top: 70px;
    border-radius: 20px;
    left: 10px;

    .close-btn i {
      // position: absolute;
      // top: 10px;
      // right: 10px;
      // z-index: 999;
      display: none;
    }

    .logo {
      background-color: $bg-color4;
      width: 255px;
      height: 140px;
      border-radius: 20px 20px 0 0;
      position: absolute;
      top: 50px;
      left: 50%;

      &::before {
        content: '';
        display: block;
        width: 170px;
        height: 170px;
        background-color: $bg-color4;
        border-radius: 50%;
        position: absolute;
        left: 16%;
      }

      a {
        img {
          width: 200px;
          right: 10%;
          top: -10px;
          position: absolute;
        }
      }
    }

    .gnb {
      width: 100%;
      position: absolute;
      top: 50%;
      left: 0;

      ul {
        position: relative;
        top: -80px;
        li {
          margin-bottom: 10px;
          a {
            color: $color3;
            font-size: 1.6rem;
            &:hover {
              background-color: #57326e;
            }
            i {
              color: $color3;
              font-size: 2rem;
            }
          }
        }
      }
    }
  }
}
</style>
