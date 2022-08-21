<template>
  <div class="contact wrap">
    <Header></Header>
    <div class="contents">
      <div class="container">
        <!-- title -->
        <div class="title">
          <h4>SAY HELLO !</h4>
          <h2>CONTACT</h2>
        </div>

        <div class="map">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3171.1505166753072!2d126.73483245049262!3d37.36261524343963!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x357b70f5dbb12b97%3A0x5d3210aa34a6d685!2z7Iuc7Z2l7IucIOyYpOydtOuPhOyXreyVng!5e0!3m2!1sko!2skr!4v1660632819211!5m2!1sko!2skr"
            width="600"
            height="450"
            style="border: 0"
            allowfullscreen=""
            loading="lazy"
            referrerpolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
        <div class="contact-info">
          <div class="contact-contents">
            <div class="information">
              <span><i class="xi-maker"></i></span>
              <h4>Address</h4>
            </div>
            <p>경기도 시흥시</p>
          </div>
          <div class="contact-contents">
            <div class="information">
              <span><i class="xi-call"></i></span>
              <h4>Phone</h4>
            </div>
            <p>010-4756-9683</p>
          </div>
          <div class="contact-contents">
            <div class="information">
              <span><i class="xi-gmail"></i></span>
              <h4>E-mail</h4>
            </div>
            <p>wlsdl950@gmail.com</p>
          </div>
        </div>

        <form action="">
          <div class="input-field">
            <input id="input_name" type="text" class="validate" />
            <label for="input_name">Your Name</label>
          </div>
          <div class="input-field">
            <input id="input_email" type="email" class="validate" />
            <label for="input_email">Your E-mail</label>
            <span
              class="helper-text"
              data-error="wrong"
              data-success="right"
            ></span>
          </div>
          <div class="input-field">
            <textarea id="input_msg" class="materialize-textarea"></textarea>
            <label for="input_msg"> Message...</label>
          </div>
          <p><a href="#" id="input_submit" class="btn btn1">SEND</a></p>
        </form>
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
};
</script>

<style lang="scss" scoped>
@import '../../scss/variable';

.contact {
  .contents {
    .map {
      margin-bottom: $mb30;

      iframe {
        width: 100%;
        height: 200px;
        border-radius: 30px;
      }
    }
    .contact-info {
      padding: 0 50px;
      margin-bottom: $mb40;
      .contact-contents {
        display: flex;
        margin-bottom: 15px;

        .information {
          width: 120px;
          display: flex;

          span i {
            font-size: 1.8rem;
            color: rgb(61, 171, 109);
            margin-right: 20px;
          }
        }
        h4 {
          font-size: 1.6rem;
        }
      }
    }
  }

  form {
    .input-field {
      margin-bottom: $mb50;
      margin-top: $mt50;

      input:not([type]):focus:not([readonly]),
      input[type='text']:not(.browser-default):focus:not([readonly]),
      input[type='password']:not(.browser-default):focus:not([readonly]),
      input[type='email']:not(.browser-default):focus:not([readonly]),
      textarea.materialize-textarea:focus:not([readonly]) {
        border-bottom: 1px solid $secondary;
        box-shadow: 0 1px 0 0 $secondary;
      }
      input:not([type]):focus:not([readonly]) + label,
      input[type='text']:not(.browser-default):focus:not([readonly]) + label,
      input[type='password']:not(.browser-default):focus:not([readonly])
        + label,
      input[type='email']:not(.browser-default):focus:not([readonly]) + label,
      textarea.materialize-textarea:focus:not([readonly]) + label {
        color: $secondary;
      }
      input:not([type]):focus.valid ~ label,
      input[type='text']:not(.browser-default):focus.valid ~ label,
      input[type='password']:not(.browser-default):focus.valid ~ label,
      input[type='email']:not(.browser-default):focus.valid ~ label,
      textarea.materialize-textarea:focus:not([readonly]) ~ label {
        color: $secondary;
      }
    }
    p {
      text-align: center;
    }
  }
}
</style>
