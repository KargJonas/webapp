<template>
  <div v-editable="blok" class="col">
    <div class="plan">
      <h2 class="title">{{ blok.name }}</h2>
      <transition name="changeprice">
        <div class="pricewrapper" v-if="priceView == 'monthly'">
          <div class="price">
            <h4 class="title">Ermäßigt</h4>
            <div class="pricetag">
              <div class="price-value">{{blok.price_reduced}},-</div>
              <div class="interval">p.m.</div>
            </div>
          </div>
          <div class="price">
            <h4 class="title">Regulär</h4>
            <div class="pricetag">
              <div class="price-value">{{blok.price_regular}},-</div>
              <div class="interval">p.m.</div>
            </div>
          </div>
        </div>
        <div class="pricewrapper" v-else-if="priceView == 'annually'">
          <div class="price">
            <h4 class="title">Ermäßigt</h4>
            <div class="pricetag">
              <div class="price-value">{{blok.price_reduced_annually}},- </div>
              <div class="interval">p.a.</div>
            </div>
          </div>
          <div class="price">
            <h4 class="title">Regulär</h4>
            <div class="pricetag">
              <div class="price-value">{{blok.price_regular_annually}},- </div>
              <div class="interval">p.a.</div>
            </div>
          </div>
        </div>
      </transition>
      <ul class="feature-list">
        <li class="feature" v-for="item in blok.features" :key="item._uid">{{item.text}}</li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok', 'priceView'],
  methods: {
    register() {
      this.$store.dispatch('setSidebar', 'register');
    }
  },
  computed: {
    registerLink() {
      return '#';
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/scss/styles.scss';

.col {
  display: flex;
  justify-content: space-between;
  .plan {
    box-shadow: darken($color-bright-bg,5%) 10px 8px;
    max-width: 500px;
    padding: 3vw;
    background-color: #FFF;
    display: flex;
    flex-direction: column;
    flex-grow: 1;
    margin-bottom: 2vh;
    h2.title {
      font-weight: normal;
      margin: 0;
      font-family: $font-secondary;
      color: $color-blue-alt;
      min-height: 2em;
    }
    ul.feature-list {
      margin: 10px 0;
      list-style-type: none;
      padding: 10px 0;
      flex-grow: 1;
      li.feature {
        padding: 10px 0;
        font-size: 0.8rem;
        font-family: $font-mono;
        border-bottom: 1px solid #aaa;
        line-height: 1.5em;
        &:last-child {
          border: none;
        }
      }
    }
    .pricewrapper {
      display: flex;
      .price {
        margin-top: .4em;
        width: 50%;
        .title {
          margin: 5px 0;
          text-transform: uppercase;
          font-family: $font-secondary;
          font-size: 0.6rem;
        }
        .pricetag {
          font-weight: bold;
          font-size: 0.8rem;
          display: flex;
          align-items: flex-end;
          width: 100%;
          text-decoration: none;
          .price-value {
            font-size: 1.4em;
            margin-right: .2em;
          }
          .interval {
            color: #999;
          }
        }
      }
    }
  }
  .changeprice-enter-active, .changeprice-leave-active {
    transition: all 0.3s;
  }
  .changeprice-enter, .changeprice-leave-to {
    opacity: 0;
    transform: translateX(.5em);
  }
}
</style>
