<template>
  <div class="main wrap">
    <Header></Header>
    <div class="contents">
      <div class="container">
        <div class="title">
          <h4>Who I am ?</h4>
          <h2>ABOUT ME</h2>
        </div>

        <div class="about-content card">
          <div class="card-content">
            <img src="../assets/images/main/user-ai@2x.png" alt="user-ai" />
            <h2>
              "도전을 멈추지 않는<br />
              퍼블리셔 김경진입니다"
            </h2>
            <p>
              '해보지 않고는 무엇을 해낼 수 있는지 알 수 없다'는 신념을 가지고
              새로운 관점으로 늘 생각하고 도전하여 최선의 결과를 만들 수 있는
              무한한 가능성을 가지고 있습니다.
              <br />
              <br />항상 새로운 것을 받아들일 준비가 되어 있는, 사람의 마음을
              움직이는 퍼블리셔로 성장하겠습니다.
            </p>
          </div>
        </div>

        <div class="strength-content">
          <h3>Strength</h3>
          <ul>
            <li>
              <div class="card wow rotateInUpLeft" data-wow-delay="0.4">
                <div class="card-content">
                  <img
                    src="../assets/images/main/Strength1@2x.png"
                    alt="strength1"
                  />
                  <div class="strength-text">
                    <h3>탄탄한 기본기</h3>
                    <p>
                      포토샵과 XD, HTML5, CSS3, JavaScript 등 다양한 프로그램을
                      배워 웹 페이지를 제작할 수 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card wow rotateInUpRight" data-wow-delay="0.8">
                <div class="card-content">
                  <img
                    src="../assets/images/main/Strength2@2x.png"
                    alt="strength2"
                  />
                  <div class="strength-text">
                    <h3>소통능력</h3>
                    <p>
                      새로운 환경에 잘 적응하며 원만한 대인관계로 목표 달성을
                      위한 문제해결과 동료간의 협업 능력을 갖추고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </li>
            <li>
              <div class="card wow rotateInUpLeft" data-wow-delay="1.6">
                <div class="card-content">
                  <img
                    src="../assets/images/main/Strength3@2x.png"
                    alt="strength3"
                  />
                  <div class="strength-text">
                    <h3>자기개발</h3>
                    <p>
                      직무를 수행함에 있어 구체적인 목표를 정하고 도달하기 위해
                      자기개발에 끊임없는 노력을 하고 있습니다.
                    </p>
                  </div>
                </div>
              </div>
            </li>
          </ul>
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
    this.wowAni();
  },
  methods: {
    wowAni() {
      new WOW().init();
    },
  },
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.main {
  .about-content {
    text-align: center;
    margin-bottom: $mb60;
    padding: 38px 12px 75px;

    img {
      width: 176px;
      height: 176px;
      margin-bottom: $mb30;
    }

    h2 {
      font: 700 2rem/28px sans-serif;
      margin-bottom: $mb30;

      text-decoration-line: underline;
      text-decoration-color: #ffea98;
      text-decoration-thickness: 3px;
      text-underline-position: under;
    }
  }

  .strength-content {
    & > h3 {
      font-size: 1.9rem;
      font-weight: 500;
      margin-bottom: 41px;
    }

    li {
      margin-bottom: 44px;
      .card {
        padding: 32px 15px;

        .card-content {
          display: flex;
          align-items: center;
          padding: 15px 10px;

          img {
            width: 100px;
            height: 100px;
            margin-right: 15px;
          }
          .strength-text {
            display: flex;
            flex-direction: column;

            h3 {
              margin-bottom: $mb10;
            }
          }
        }
      }
    }
  }
}
</style>
