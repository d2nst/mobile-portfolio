<template>
  <div class="skills wrap">
    <Header></Header>
    <div class="contents">
      <div class="container">
        <!-- title -->
        <div class="title">
          <h4>What I do ?</h4>
          <h2>MY SKILLS</h2>
        </div>

        <!-- skill card -->
        <div class="skills-content card">
          <div class="skills-box">
            <div class="skills-list">
              <div class="skill">
                <div class="skill_description">
                  <span>HTML</span>
                  <span>0%</span>
                </div>
                <div class="skill__bar" data-num="90">
                  <div class="skill_value"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill_description">
                  <span>CSS</span>
                  <span>0%</span>
                </div>
                <div class="skill__bar" data-num="85">
                  <div class="skill_value"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill_description">
                  <span>JavaScript</span>
                  <span>0%</span>
                </div>
                <div class="skill__bar" data-num="65">
                  <div class="skill_value"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill_description">
                  <span>Jquery</span>
                  <span>0%</span>
                </div>
                <div class="skill__bar" data-num="65">
                  <div class="skill_value"></div>
                </div>
              </div>
              <div class="skill">
                <div class="skill_description">
                  <span>Design</span>
                  <span>0%</span>
                </div>
                <div class="skill__bar" data-num="85">
                  <div class="skill_value"></div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- experience -->
        <div class="experience-content">
          <h3>Experience</h3>
          <div class="swiper">
            <ul class="swiper-wrapper">
              <li class="swiper-slide">
                <div class="card">
                  <div class="card-content">
                    <div class="experience-img">
                      <img
                        src="../assets/images/skills/streamlinehq-programming-hold-code-coding-apps-websites-48@2x.png"
                        alt="experience1"
                      />
                      <div class="under-bar"></div>
                    </div>
                    <div class="experience-text">
                      <h3>??? ????????????</h3>
                      <p>
                        ??? ????????? ???????????? ????????? ????????? ???????????? ????????? ?????????
                        ????????? ??????????????? ?????? ??????????????????.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="card">
                  <div class="card-content">
                    <div class="experience-img">
                      <img
                        src="../assets/images/skills/streamlinehq-programming-code-design-coding-apps-websites-48@2x.png"
                        alt="experience1"
                      />
                      <div class="under-bar"></div>
                    </div>
                    <div class="experience-text">
                      <h3>??? ?????????</h3>
                      <p>
                        Photoshop??? Illustrator??? ????????? ????????????, Adobe XD???
                        ???????????? ??? ????????? ????????? ??? ??? ????????????.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
              <li class="swiper-slide">
                <div class="card">
                  <div class="card-content">
                    <div class="experience-img">
                      <img
                        src="../assets/images/skills/streamlinehq-front-end-developer-tool-react-native-logos-48@2x.png"
                        alt="experience3"
                      />
                      <div class="under-bar"></div>
                    </div>
                    <div class="experience-text">
                      <h3>????????? ??????</h3>
                      <p>
                        ????????? ????????? ??????????????? ????????? ?????? ??????????????? ????????????
                        ????????? ?????? ????????? ??? ????????????.
                      </p>
                    </div>
                  </div>
                </div>
              </li>
            </ul>
            <!-- pagination -->
            <div class="swiper-pagination"></div>
            <!-- button -->
            <div class="swiper-button-prev">
              <i class="xi-angle-left-min"></i>
            </div>
            <div class="swiper-button-next">
              <i class="xi-angle-right-min"></i>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Header from '../components/Header.vue';
export default {
  components: {
    Header,
  },
  mounted() {
    this.skillAni();
    this.swiperSlide();
  },
  methods: {
    skillAni() {
      const progress = document.querySelectorAll('.skill__bar');
      progress.forEach((item) => numAnimation(item));

      function numAnimation(item) {
        let initialRate = 0;
        let targetRate = item.getAttribute('data-num');
        let progressBar = item.querySelector('.skill_value');

        let progressRate =
          item.previousElementSibling.querySelector('span:last-child');
        let numAinmate = setInterval(() => {
          if (initialRate == targetRate) {
            clearInterval(numAinmate);
          }

          initialRate++;
          progressBar.style.width = `${initialRate}%`;
          progressRate.innerText = initialRate - 1 + '%';
        }, 25);
      }
    },

    swiperSlide() {
      const swiper = new Swiper('.swiper', {
        // Optional parameters
        loop: true,
        speed: 1500,
        autoplay: {
          delay: 3000,
          disableOnInteraction: false,
          pauseOnMouseEnter: true,
        },

        // If we need pagination
        pagination: {
          el: '.swiper-pagination',
        },

        // Navigation arrows
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev',
        },
      });
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';
.skills {
  // skill content start
  .skills-content {
    margin-bottom: $mb60;

    .skills-box {
      padding: 42px 25px;
      .skill {
        margin-bottom: $mb10;

        .skill_description {
          display: flex;
          justify-content: space-between;
          margin-bottom: 4px;

          & > span {
            font-size: 1.4rem;
            font-weight: 600;
            line-height: 19px;

            & + span {
              font-size: 1rem;
              font-weight: 500;
              margin-bottom: 0;
            }
          }
        }
      }
    }

    .skill__bar {
      width: 100%;
      height: 18px;
      border: 1px solid rgb(230, 230, 230);
      border-radius: 18px;
      position: relative;

      .skill_value {
        width: 0;
        height: 11px;
        background-color: $bar1;
        border-radius: 10px;
        position: absolute;
        top: 2.5px;
        left: 3px;
      }
    }
  }

  // experience content start
  .experience-content {
    & > h3 {
      font-size: 1.9rem;
      font-weight: 500;
      margin-bottom: 41px;
    }
    .swiper {
      .card {
        padding: 48px 12px;
        width: 90%;
        height: auto;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: $mb20;

        .experience-img {
          margin-bottom: $mb30;

          img {
            width: 36px;
            height: 36px;
            margin-bottom: 13px;
          }
          .under-bar {
            width: 68px;
            height: 9px;
            background-color: #d580ff6e;
            border-radius: 20px;
            margin: 0 auto;
          }
        }
        .experience-text {
          & > h3 {
            margin-bottom: $mb20;
          }
        }
      }

      .swiper-pagination {
        bottom: 0;
      }

      .swiper-button-prev,
      .swiper-button-next {
        font-size: 3rem;
        color: #ccc;

        &::after {
          content: '';
        }
      }
      .swiper-button-prev {
        left: -8px;
      }

      .swiper-button-next {
        right: -8px;
      }
    }
  }
}
</style>
