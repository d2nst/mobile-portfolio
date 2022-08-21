<template>
  <div class="loading">
    <h1 class="logo">
      <router-link to="/home">
        <img src="../assets/images/loading/logo@2x.png" alt="logo icon" />
        <span class="ir">Logo</span>
      </router-link>
    </h1>

    <div class="preloader">
      <div class="preloader-dots">
        <div class="dot">
          <i class="xi-heart"></i>
        </div>
        <div class="dot">
          <i class="xi-heart"></i>
        </div>
        <div class="dot">
          <i class="xi-heart"></i>
        </div>
        <div class="dot">
          <i class="xi-heart"></i>
        </div>
        <div class="dot">
          <i class="xi-heart"></i>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'loading',

  data() {
    return {};
  },

  mounted() {
    this.homeMove();
  },

  methods: {
    // 홈으로 이동함수
    homeMove() {
      setTimeout(() => {
        this.$router.push('/home');
      }, 4500);
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.loading {
  background-color: #f8f5ff;
  width: 100%;
  height: 100vh;
  position: relative;

  // Preloader
  .preloader {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: auto;
    position: absolute;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%);

    .preloader-dots {
      height: 50px;

      .dot {
        display: inline-block;
        margin-right: 15px;
        opacity: 0.3;
        animation: moveit 1.8s infinite;
        color: $secondary;

        &:nth-child(2) {
          animation-delay: 0.15s;
        }

        &:nth-child(3) {
          animation-delay: 0.3s;
        }

        &:nth-child(4) {
          animation-delay: 0.45s;
        }

        &:nth-child(5) {
          animation-delay: 0.6s;
          margin-right: 0;
        }

        @keyframes moveit {
          0% {
            transform: translateY(0px);
          }
          35% {
            transform: translateY(0px);
            opacity: 0.3;
          }
          50% {
            transform: translateY(-20px);
            opacity: 0.8;
          }
          70% {
            transform: translateY(3px);
            opacity: 0.8;
          }
          85% {
            transform: translateY(-3px);
          }
        }

        i {
          font-size: 2rem;
        }
      }
    }
  }
}
</style>
