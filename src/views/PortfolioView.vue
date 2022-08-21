<template>
  <div class="portfolio wrap">
    <Header></Header>
    <div class="contents">
      <div class="container">
        <!-- title -->
        <div class="title">
          <h4>Take a Look at</h4>
          <h2>MY WORKS</h2>
        </div>
        <!-- g-menu -->
        <div class="g-menu">
          <ul>
            <li><a href="#" id="m1" class="active">All</a></li>
            <li><a href="#" id="m2">WEB</a></li>
            <li><a href="#" id="m3">RWD</a></li>
            <li><a href="#" id="m4">APP</a></li>
          </ul>
          <span class="highlight">highlight</span>
        </div>

        <!-- gallery -->
        <div class="grid" id="gallery">
          <ul>
            <li class="grid-item g1 g2">
              <a href="#popup1">
                <img
                  src="../assets/images/portfolio/img1@2x.png"
                  alt="work project1"
                />
                <div class="caption">
                  <h4>960GS</h4>
                  <span>WEB</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g2">
              <a href="#popup2">
                <img
                  src="../assets/images/portfolio/img2@2x.png"
                  alt="work project2"
                />
                <div class="caption">
                  <h4>1200GS</h4>
                  <span>WEB</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g2">
              <a href="#popup3">
                <img
                  src="../assets/images/portfolio/img3@2x.png"
                  alt="work project3"
                />
                <div class="caption">
                  <h4>HYUNDAI Motorstudio</h4>
                  <span>WEB</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g2">
              <a href="#popup4">
                <img
                  src="../assets/images/portfolio/img4@2x.png"
                  alt="work project4"
                />
                <div class="caption">
                  <h4>SAMSUNG-JBL</h4>
                  <span>WEB</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g2">
              <a href="#popup5">
                <img
                  src="../assets/images/portfolio/img5@2x.png"
                  alt="work project5"
                />
                <div class="caption">
                  <h4>RETINA</h4>
                  <span>WEB</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g4">
              <a href="#popup6">
                <img
                  src="../assets/images/portfolio/img6@2x.png"
                  alt="work project6"
                />
                <div class="caption">
                  <h4>Megabox</h4>
                  <span>Design</span>
                </div>
              </a>
            </li>
            <li class="grid-item g1 g3">
              <a href="#popup7">
                <img
                  src="../assets/images/portfolio/img7@2x.png"
                  alt="work project7"
                />
                <div class="caption">
                  <h4>ALIA CORNS</h4>
                  <span>RWD</span>
                </div>
              </a>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <project></project>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
import Project from '../components/project.vue';
export default {
  components: {
    Header,
    Project,
  },
  mounted() {
    this.trigger();
    this.filterBtnActive();
    this.gallery();
  },

  methods: {
    trigger() {
      let $triggerBtn = $('.g-menu ul li:first-child');
      $triggerBtn.trigger('click');
    },
    filterBtnActive() {
      const filtersBtn = document.querySelectorAll('.g-menu ul li a');
      const highLight = document.querySelector('.highlight');

      for (let i = 0; i < filtersBtn.length; i++) {
        filtersBtn[i].addEventListener('click', function (e) {
          e.preventDefault();
          let targetLeft = this.offsetLeft;
          let targetWidth = this.offsetWidth;
          highLight.style.left = targetLeft + 'px';
          highLight.style.width = targetWidth + 'px';
          e.target.classList.add('active');
          for (let k = 0; k < filtersBtn.length; k++) {
            if (filtersBtn[k] !== e.target) {
              filtersBtn[k].classList.remove('active');
            }
          }
        });
      }
    },
    gallery() {
      $(window).load(function () {
        $('.grid').isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
        });
      });

      var grid = $('.grid');
      var m1 = $('#m1');
      var m2 = $('#m2');
      var m3 = $('#m3');
      var m4 = $('#m4');

      // 라이트박스 초기 설정

      $('.grid-item a').magnificPopup({
        type: 'inline',
        closeOnBgClick: false,
        closeBtnInside: true,
        gallery: {
          enabled: true,
        },
      });
      $('.g2 a').magnificPopup({
        type: 'inline',
        closeOnBgClick: false,
        closeBtnInside: true,
        gallery: {
          enabled: true,
        },
      });
      $('.g3 a').magnificPopup({
        type: 'inline',
        closeOnBgClick: false,
        closeBtnInside: true,
        gallery: {
          enabled: true,
        },
      });
      $('.g4 a').magnificPopup({
        type: 'inline',
        closeOnBgClick: false,
        closeBtnInside: true,
        gallery: {
          enabled: true,
        },
      });

      m1.click(function (e) {
        e.preventDefault();
        grid.isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
          filter: '.grid-item',
        });
        $('.grid-item a').magnificPopup({
          type: 'inline',
          closeOnBgClick: false,
          closeBtnInside: true,
          gallery: {
            enabled: true,
          },
        });
      });
      m2.click(function (e) {
        e.preventDefault();
        grid.isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
          filter: '.g2',
        });
        $('.g2 a').magnificPopup({
          type: 'inline',
          closeOnBgClick: false,
          closeBtnInside: true,
          gallery: {
            enabled: true,
          },
        });
      });
      m3.click(function (e) {
        e.preventDefault();
        grid.isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
          filter: '.g3',
        });

        $('.g3 a').magnificPopup({
          type: 'inline',
          closeOnBgClick: false,
          closeBtnInside: true,
          gallery: {
            enabled: true,
          },
        });
      });
      m4.click(function (e) {
        e.preventDefault();
        grid.isotope({
          itemSelector: '.grid-item',
          layoutMode: 'fitRows',
          filter: '.g4',
        });

        $('.g4 a').magnificPopup({
          type: 'inline',
          closeOnBgClick: false,
          closeBtnInside: true,
          gallery: {
            enabled: true,
          },
        });
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.portfolio {
  height: 100%;
  .g-menu {
    margin-bottom: $mb30;
    position: relative;

    ul {
      display: flex;
      justify-content: flex-start;
      align-items: center;
      z-index: 100;

      li {
        width: 70px;
        height: 33px;
        line-height: 33px;
        z-index: 999;

        a {
          display: block;
          width: 100%;
          line-height: 33px;
          color: $primary;
          text-align: center;

          &.active {
            color: $color3;
          }
        }
      }
    }
    .highlight {
      position: absolute;
      display: block;
      width: 70px;
      height: 33px;
      top: 1px;
      left: 0;
      background: $secondary;
      text-indent: -9999em;
      border-radius: 30px;
      transition: 400ms ease-in-out;
    }
  }

  .grid {
    ul {
      display: flex;
      flex-wrap: wrap;
      justify-content: center;
      align-content: center;
      li {
        width: 45%;

        a {
          display: block;
          width: 136px;
          height: 175px;
          margin: auto;
          position: relative;
          margin-bottom: $mb30;

          .caption {
            content: '';
            display: block;
            background-color: rgba(0, 0, 0, 0.7);
            color: $color3;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            border-radius: 15px;
            opacity: 0;
            display: flex;
            align-items: center;
            transition: all ease-in 0.4s;

            h4,
            span {
              position: absolute;
              left: 7px;
            }
            h4 {
              bottom: 30%;
              font-size: 1.5rem;
              font-weight: 500;
            }

            span {
              bottom: 30px;
              font-size: 1.2rem;
              font-weight: 400;
            }
          }

          &:hover .caption {
            opacity: 1;
            transform: translate3d(0, 0, 0);
          }

          img {
            width: 100%;
            height: 100%;
          }
        }
      }
    }
  }
}
</style>
