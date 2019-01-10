<template>
  <footer class="footer">
    <div class="pre-footer">
      <svg class="icon-bg" xmlns="http://www.w3.org/2000/svg" width="270" height="100">
        <path d="M101.424.285L0 47.777v51.938h270V46.47L101.424.285"></path>
      </svg>
      <div class="pre-footer-top">
        <div class="logo">
          <img src="~/assets/img/icons/gg-logo.svg" alt>
        </div>
      </div>
      <div class="pre-footer-bottom">
        <div class="col text">Innovationswerkstatt für Menschen, Wissen und Technologie</div>

        <div v-swiper:swiper="swiperOption">
          <div class="swiper-wrapper">
            <img class="swiper-slide" v-for="(logo) in this.logos" :key="logo._uid" :src="logo.image">
          </div>
        </div>
      </div>
    </div>
    <div class="background-footer">
      <div class="background-footer-content">
        <div class="newsletter-footer">
          <h4>Immer am Ball bleiben</h4>
          <div class="newsletter-subscribe">
            <input type="email" placeholder="Deine E-Mail Adresse">
            <button>Meld mich an</button>
          </div>
        </div>
        <div class="bottom-footer">
          <div class="footer-navigation">
            <div
              class="nav-item"
              :key="index"
              v-for="(navitem, index) in $store.state.settings.footer_navi"
            >
              <sb-link :link="navitem.link">{{navitem.name}}</sb-link>
            </div>
          </div>
          <div class="spacer"></div>
          <div class="info-item" v-for="item in $store.state.settings.footer_info" :key="item.id">
            <h4>{{item.headline}}</h4>
            <markdown :value="item.content"></markdown>
          </div>
        </div>
      </div>
      <div class="background-footer-image"></div>
    </div>
  </footer>
</template>

<script charset="utf-8">
export default {
  data() {
    return {
      swiperOption: {
        slidesPerView: 4,
        autoplay: {
          delay: 2000,
          disableOnInteraction: false
        },
        loop: true
      }
    };
  },

  computed: {
    logos() {
      return this.$store.state.settings.footer_logos;
    }
  }
};
</script>

<style lang="scss">
@import "@/assets/scss/styles.scss";

.footer {
  display: flex;
  flex-direction: column;
  .pre-footer {
    overflow: hidden;
    display: flex;
    flex-direction: column;
    .icon-bg {
      overflow: hidden;
      z-index: 0;
      fill: #fff;
      position: relative;
      transform: scale(5) translateX(75%) translateY(50%);
      left: 0;
    }
    .pre-footer-top {
      z-index: 1;
      padding: 40px 0;
      display: flex;
      justify-content: center;
      .logo {
        width: 25%;
        img {
          max-width: 100%;
          display: block;
        }
      }
    }
    .pre-footer-bottom {
      z-index: 1;
      margin-bottom: 10px;

      @include media-breakpoint-down(md) {
        flex-direction: column;
      }

      .swiper-container {
        // width: 50%;

        .swiper-wrapper {
          img {
            margin: 0 20px;
            height: 40px;
            width: auto;
          }
        }
      }

      .col {
        padding: 25px;
        flex: 1;

        &.text {
          text-transform: uppercase;
          text-align: center;
        }
        &.logos {
          display: flex;
          img {
            flex: 1;
            max-width: 100%;
            display: block;
            height: auto;
            max-height: 40px;
          }
        }
      }
    }
  }
  .background-footer {
    padding: 50px 20px 20px 20px;
    color: #fff;
    overflow: hidden;
    background-color: #000;
    position: relative;
    .background-footer-image {
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      opacity: 0.3;
      background-image: url(~assets/img/footer-bg.jpg);
      background-size: cover;
      background-position: center;
      height: 100%;
      z-index: 0;
    }
    .background-footer-content {
      padding: 20px;
      position: relative;
      z-index: 1;
      .newsletter-footer {
        h4 {
          max-width: 30%;
          letter-spacing: 0.2rem;
          text-transform: uppercase;
          font-size: 3rem;
        }
        .newsletter-subscribe {
          border-bottom: 1px solid rgba(255, 255, 255, 0.5);
          display: flex;
          margin: 2rem;
          margin-bottom: 4rem;
          input {
            padding: 10px 0;
            font-size: 1rem;
            font-family: $font-secondary;
            outline: none;
            background: none;
            color: #fff;
            border: none;
            flex: 1;
            &::placeholder {
              color: #fff;
            }
          }
          button {
            font-family: $font-secondary;
            font-size: 1.3rem;
            color: #fff;
            background: none;
            border: none;
            outline: none;
            // &:active,
            // &:hover,
            // &:focus {
            // }
          }
        }
      }
      .bottom-footer {
        margin: 3rem 0;
        display: flex;
        @include media-breakpoint-down(sm) {
          flex-direction: column;
        }
        .footer-navigation {
          .nav-item {
            font-size: 1rem;
            padding: 15px;
            a {
              color: #fff;
              text-decoration: none;
              text-transform: uppercase;
              font-weight: bold;
            }
          }
        }
        .spacer {
          flex: 1;
        }
        .info-item {
          h4 {
            text-transform: uppercase;
          }
          p {
            font-family: $font-secondary;
          }
        }
      }
    }
  }
}

@keyframes slide {
  0% {
    margin-left: 0;
  }

  100% {
    margin-left: -200%;
  }
}

@media (min-width: $mobile-large) {
  .footer {
    .pre-footer {
      .pre-footer-bottom {
        display: flex;
        margin-bottom: 10px;
        .swiper-container {
          width: 50%;
          margin-bottom: 0;
        }
      }
    }
  }
}
</style>
