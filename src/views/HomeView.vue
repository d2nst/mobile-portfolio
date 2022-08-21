<template>
  <div class="home wrap">
    <Header></Header>
    <div class="mainview">
      <img
        src="../assets/images/home/avatar1@2x.png"
        alt="my photo"
        class="circle circle1"
      />
      <div class="circle circle2"></div>
      <div class="circle circle3"></div>
      <div class="circle circle4"></div>
    </div>
    <div class="contents">
      <h3>WELCOME !</h3>
      <h2>I'M <span class="type-it"></span></h2>
      <p>
        안녕하세요, 저의 자기소개앱에 오신걸 환영합니다! <br />
        깔끔함을 사랑하고 사용자 인터페이스를 아름답게 만드는 열정적인 퍼블리셔
        입니다.
      </p>

      <router-link to="/portfolio" class="btn btn1">
        MY WORKS
        <span class="xi-angle-right-min"></span>
      </router-link>
    </div>

    <div class="bar"></div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  components: {
    Header,
  },
  data() {
    return {};
  },

  mounted() {
    this.typeEffect();
    this.mouseMoveAni();
    this.touchMoveAni();
  },

  methods: {
    //type it 함수
    typeEffect() {
      $('.type-it').typeIt({
        strings: ['KYOUNGJIN KIM', 'PUBLISHER'],
        loop: true,
        breakLines: false,
        cursor: false,
        speed: 150,
      });
    },

    mouseMoveAni() {
      let circle1 = document.querySelector('.circle1');
      let circle2 = document.querySelector('.circle2');
      let circle3 = document.querySelector('.circle3');
      let circle4 = document.querySelector('.circle4');
      let x = 0,
        y = 0;
      let mx = 0,
        my = 0;
      const speed = 1;
      const loop = () => {
        mx += (x - mx) * speed;
        my += (y - my) * speed;
        window.requestAnimationFrame(loop);
      };

      loop();
      const mouseFunc = (e) => {
        (x = e.clientX - window.innerWidth / 2),
          (y = e.clientY - window.innerHeight / 2);
        circle1.style.transform = `translate(${-(mx / 70)}px, ${-(my / 70)}px)`;
        circle2.style.transform = `translate(${mx / 60}px, ${my / 60}px)`;
        circle3.style.transform = `translate(${mx / 25}px, ${my / 25}px)`;
        circle4.style.transform = `translate(${mx / 15}px, ${my / 15}px)`;
      };
      window.addEventListener('mousemove', mouseFunc);
    },
    touchMoveAni() {
      var docWidth = window.innerWidth;
      if (docWidth <= 480) {
        let circle5 = document.querySelector('.circle1');
        let circle6 = document.querySelector('.circle2');
        let circle7 = document.querySelector('.circle3');
        let circle8 = document.querySelector('.circle4');
        let xLine = 0,
          yLine = 0;
        let tx = 0,
          ty = 0;
        const speed = 1;
        const loop = () => {
          tx += (xLine - tx) * speed;
          ty += (yLine - ty) * speed;
          window.requestAnimationFrame(loop);
        };

        loop();
        const touchFunc = (e) => {
          var touchX =
            (e.changedTouches && e.changedTouches[0].clientX) || e.clientX;
          var touchY =
            (e.changedTouches && e.changedTouches[0].clientY) || e.clientY;
          (xLine = touchX - window.innerWidth / 2),
            (yLine = touchY - window.innerHeight / 2);
          circle5.style.transform = `translate(${-(tx / 70)}px, ${-(
            ty / 70
          )}px)`;
          circle6.style.transform = `translate(${tx / 60}px, ${ty / 60}px)`;
          circle7.style.transform = `translate(${tx / 25}px, ${ty / 25}px)`;
          circle8.style.transform = `translate(${tx / 15}px, ${ty / 15}px)`;
        };
        window.addEventListener('touchstart', touchFunc, false);
        window.addEventListener('touchmove', touchFunc, false);
        window.addEventListener('touchleave', touchFunc, false);
        window.addEventListener('touchend', touchFunc, false);
      }
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.home {
  text-align: center;
  width: 100%;
  height: 100vh;
  padding: 105px 0 100px 0;
  position: relative;

  .mainview {
    width: 255px;
    height: 255px;
    display: inline-block;
    margin-bottom: 37px;
    position: relative;

    img {
      width: 100%;
    }

    .circle {
      width: 255px;
      height: 255px;
      position: absolute;
      top: 0;
      left: 0;
      border-radius: 50%;
    }
    .circle1 {
      z-index: 4;
    }
    .circle2 {
      background-color: #b591ce70;
      z-index: 3;
    }

    .circle3 {
      background-color: #dabaee80;
      z-index: 2;
    }
    .circle4 {
      background-color: #f7ebff90;
      z-index: 1;
    }
  }

  .contents {
    padding: 0 35px;

    h3 {
      height: 24px;
      font: 400 1.8rem/24px sans-serif;
      margin-bottom: 12px;
    }

    h2 {
      margin-bottom: $mb20;
    }

    p {
      margin-bottom: $mb30;
    }

    a {
      font-weight: normal;
      margin-bottom: $mb60;

      span {
        font-weight: bold;
        line-height: 48px;
        vertical-align: top;
      }
    }
  }

  // *** bar animation ***
  .bar {
    position: absolute;
    text-align: center;
    margin: 0 auto;
    width: 100%;
    height: 100px;
    left: 0;
    right: 0;
    bottom: 70px;
    z-index: 2;

    &::before {
      -webkit-animation: bar-ani 2.4s cubic-bezier(1, 0, 0, 1) infinite;
      -moz-animation: bar-ani 2.4s cubic-bezier(1, 0, 0, 1) infinite;
      -o-animation: bar-ani 2.4s cubic-bezier(1, 0, 0, 1) infinite;
      animation: bar-ani 2.4s cubic-bezier(1, 0, 0, 1) infinite;
      position: absolute;
      top: 0px;
      left: 50%;
      margin-left: -1px;
      width: 1px;
      height: 92px;
      background: #000;
      content: ' ';
      z-index: 6;
    }
  }

  @keyframes bar-ani {
    0% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
    50% {
      -webkit-transform-origin: 0% 0%;
      -ms-transform-origin: 0% 0%;
      -moz-transform-origin: 0% 0%;
      -o-transform-origin: 0% 0%;
      transform-origin: 0% 0%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    50.1% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
    100% {
      -webkit-transform-origin: 0% 100%;
      -ms-transform-origin: 0% 100%;
      -moz-transform-origin: 0% 100%;
      -o-transform-origin: 0% 100%;
      transform-origin: 0% 100%;
      -webkit-transform: scale(1, 0);
      -ms-transform: scale(1, 0);
      -moz-transform: scale(1, 0);
      -o-transform: scale(1, 0);
      transform: scale(1, 0);
    }
  }
}
</style>
