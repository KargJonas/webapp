<template>
  <div v-editable="blok" class="mainstage">
    <div class="placeholder">
    </div>
    <div v-swiper:swiper="swiperOption">
      <div class="swiper-wrapper">
        <div class="swiper-slide" :key="s._uid" v-for="s in blok.slides" :style="{ 'background-image': 'url(' + $resizeImage(s.image, '1600x0') + ')' }">
          <div class="wrapper">
            <span class="title" :class="{ 'dark': s.dark }">{{s.title}}</span>
          </div>
        </div>
      </div>
      <div class="swiper-pagination"></div>
    </div>
  </div>
</template>

<script>
export default {
  props: ['blok'],
  data() {
    return {
      swiperOption: {
        loop: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: true
        },
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  methods: {
  }
}
</script>

<style lang="scss">
@import '@/assets/scss/styles.scss';

.mainstage {
  height: calc(72vh - 64px); // 100vh - top-header height
  @include media-breakpoint-down(sm) {
    height: 60vh;
  }

  position: relative;
  @include margin-page-wide();
  z-index: 3;

  .placeholder {
    top: 0;
    bottom: 0;
    position: absolute;
    height: 100%;
    width: 100%;
    background-image:url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAoAAAAICAIAAABPmPnhAAAPZXpUWHRSYXcgcHJvZmlsZSB0eXBlIGV4aWYAAHjarZlpciU5coT/4xQ6QmIHjoPVTDfQ8fU5kHxkVXPGbGQqdtV7zERiCffw8Mg263/+e5v/4k94vDMh5pJqSg9/Qg3VNb6U5/65n/YJ59/7p72f9s/r5vOQ45Ln099f03rHN67H7wdyeK/3P6+bPN55yjuR/Ux8/nitrO/vuPJO5N29bt/fTf3acfhxnPevG++07+R//x4ywZiR+YiRW976h3+LVvHswFffzmfjr3X6Fvnu3+vx99iZz9e/gjfG77F72jvC/xkK86R3QPorRu91G/+67j+ouT92ZL++uj9vtPq8uP0zdnvPsve6p2shEalk3kN9hfB8Y2AnlP48lvjJ/I18z+en8lM44gCxCZqdn2FstY5obxvstM1uu87nsIMtBrdc5tO54fy5Vnx21Y0DRtCP3S4DwzS+gNUANc9l99mLPevWs96whZWnZaSzTGZ54h8/5reL/5efz0R7C29rFcxxice+nDjNNoSc/mUUgNj9xjSe+J4f84H1+4+A9SAYT5gLB2xPv1P0aL+55Q/OnnHxCea5qWHzfCcgRKwd2Qy8DvZJENsm+2TnsrXEsYBPY+fOB9dBwMbopjUbbLxPgFOc1uaZbM9YF929jLQARPTJZ6AhUQArhAh/cihwqEUfg4kxpphjiTW25FNIMaWUkzSqZZ9DjjnlnEuuuRVfQokllVxKqaVVVz0SFmuq2dRSa22NRRtTN55ujGitu+576LGnnnvptbcBfUYYcaSRRxl1tOmmn6T/TDObWWadbdkFlVZYcaWVV1l1tQ3Xtt9hx5123mXX3T6ovaj+iZr9C7l/j5p9URNi4YzL36hxOeevKazkJAozEHPBgngWAhDaCbOn2BCckBNmT3UkRXSgZqPAmVaIgWBY1sVtP9h9I/dvcTMx/Ee4uX+FnBF0/x/IGUH3IvdP3H5BbbZTUfwBSFmomD5+I2xrsb5jCz48rTE2z756THzvezIJq6bHRRv4DwwRrV4yI1wM+dlz+B1bNa6WJ4b55G2j8gClGjGMELqei8q8XDd6xwoIZt6+jd5m6OP8vmPezFSnSXGqypXcLOEJHgVDEr22SM182iw8PEPIe62yV4w82y1q3ErRVHOyMgGFkPssjSa0MffqYXpXt8+cyIdB3YRIQY8M2DIZqO+sZiuiqUcf62fbRuNZbMbeWk1dM+3dCdHSme/Ih2NG4CBkrF+j7RyoN79xHOEEcyvYN7Ytf98N/NXsjqNA8jFGc9BgtHOYlWvTjcyMZ6fbxz1Mq7FkKgMREwQJJsEOeEfF4NQ21B5yk5kpqaXid2llNkIZY+uek3btawezpiCC33AVcoIm07M0PAPlzkEgSv0NOX4bULnD8vkUs4NrsHyNmqaG+bUtMCGcbNWtzJkOojz225hnNoj/nBg1zya4jVNqbljKHanaiWx3scOS3b/v/7ZgwXKNZmIagcA2d2AlRTmyTvXPSaIgsOMpIt7sNkA478kKkHTLfNAhuQEhW80EFASZ0NeWYpy9xWgzpsKVNWefrVm4sMpBGOvGZNnsZRt5HSlHGd6S3TYkiET1qUMqwKSQvGc/xHGwZ9Nnj6X9vGS2ruDpWPlg8s3PjtiF1DzFqxGS4erLBAXSEceWLg+sLpunIaMuntzCT35x+etzJiWNBA6dUnCg/ID/EHhZ0Y5T9+4OamIPO4xUT+/mzZ8RCEcPCwqeDzQg2AVjxD3kxto3z9gn7Jh+mfOp/L+ZS9FdLOiXwFKyP8hfPsipOmlF1+B4SDb62c919hYfNBvpUsbEXaQ+853RVpfn3IMgocuB8O8y0Xpq/pFBosnRMLt5ZxTBCX5P0FNBQ+YMe5zELBNHDLYpjr2mhQq91V1Pkto2a3GWQj0X5C11dFcSjg3uxDGpI55gaeDCKO6Zyekl7cQXdu9yozjulJDwhI6VlsSPaV3r6F8lRtGuYdfmxAMxG2Q8o+gnen9yn6Fi4Ev2ncn9ARDddBAt9N3gx6YIoYytGAHxdFAYvuP+AyK4V2JAa2I5M1PmirT1OXuLksYFdmKDspm4bm4YNnyfS4c3e5/R+F7fn6SWAqGv6GNfKkdTvRgBPbvwawJsYQYeNcCVywhtxFkqk1N98xqqajO6Jm2lnlDENqXPz9haKKAdx6IuEdbK8U/PZfhiTzT8zas5k6NIUkIxEAW+JbIybnbENgbpgjJkJ65lqaqABMa4jXXcL/Q9FJjVdKcxT6WS4BH3Lw/9NhGiToGMI+McRpQ8IxFlTuQ3lmoT3FFNKRsLQnlB86H1ijgK1AJhzIR3pDlWbsNQgVTfnuSXqvZolPnp0OyOEIbDlviTFzNwhA5XlPxzcnNhddYygnnC/1Vh48JYPDYxJTxO68hKytoTFbZHpB0wSRXkys7thTL8Rzr7NhTJu4F9v4HAhz6Qb/kha8WdxumxHxQqVfXlmK7SwUgJwN+bTLjWzAuV+3wD7ck8uy+ZjvzmH0HgcLHN7EZYmx+NpIxR33YyBPNkfzgVgpnO/VFqxjRgKzKVrWcQqIDPzvdc7LrKR+3QURuIQ+1r5py0yhukQynPwF7I6eWOdainsuw4VV98HH1mFLauKufUE6FDNtx+zOJZlB33gjMDRiAu4QjZwpPo01lNdKjl8bGbiJAa7M/pLo7uaAZ9PzLXdsj3jg6pO+cymBEWpD7Ea5hqKa6zsLsm6+lJNEYIRjEx2xrJI9Rg5KKqSDBRIpx0s5Khd4LhJ0RYftvDTTxXSt03Cki8Oyo4+rP2ShC+trGoeRQl0t+rWOxTLLq0CN91ogZ8p1iEJ5VbbcYTDWGHpOAK8Jsm/fi9aEkS2qyyjo6FawTp4tAYgJznQ+9TjnqnEK7RGhORZbH7RRVmnFrmEAg3XzMbsHC3wEnSonPx3Q0OQgbbYKqVyEoP8aQ/kynHxUtBS+gyvBrpvXUc2j7xvHlLQYZpzVRLAZ8yxdTo1VN7LiL5etahG4Xupkvz7r80HySLx0lCB3wDPUHMBiswB0X2GWs9vg46h4gaxnzg9yQ+Tu0WyKbDaXsryTxJJ5bW4ywk7fKUFxoKwIykR3YShzKyw3TKKmF2OydnZ/JF8ZgQpKUfL1+ofMuqGDbDUV+07LO4EPHTDKzHeVMCcbzYnAhKiBGIB8QvyzjRIanoA1tg5QSz1U1MDKX+1QRUF29nwYR2DJqatlDF3p1FHioXbMavrUavyPmq3oNM9IgpqBzsaiBAk37EH/vgEV6rDHSusNGkalIrnRo560in7RL3osz9Pm7kOaqDEEwUNdLLEPp+NgDDtAU/qvqQfRompNPaokbCD1SCmDYnSxocKUI+kqSrVDVYDwliaVvio9zrQ3Mce1PiylcV/FS67WZjr7iuZ3baUmuYv6DDPOnk2xALL2dT7cmOB2/PYSMWNDzLAm0BNSqwL+qmlcMS9UQrWsTjdS0TxuZlDJay/sD9yAajy2X2GX4HWxoa0qaDmohTc0RbvK+z452RTLoRDtzDsPcw7aQM1VbWpqrK5f6626k+pVbzsqjRFY5h1WNuPaVnGE6ey7Yn8ZeovJ0lsfo5m+aK5l32LqrHIazGysT9vTJlzf4xcXReGqMybgj4z2mwa8Pf46TPcdS7WCf3ggo/N04xfA57HqGKzOg/0y/1rlgcT6RHzlhc9eL+tCvYpSOqCRCOUr5tTZL2RYPXzZLTgYfD8J8ax+T0J+yQfpumAplePklEMd0lIbCJLhCqYzco0DxcpzWkIGLroWW1eAiLTqo+Z6q/ldf0KS4aQ4vqxgIsrJbfRksvUM6OOglshAPaQcQsrJyntxqiMPKp6J6nvp9pJVBkjhcPFdM+EyWYHKgmXipeMxxHvQJ6bfJ7UMyzCrd32JFXpwvZONQbO+uFYC9i9sQOduuoduP2zfcuGdDflwR3QIPtbhbUTpYAx4GXTF+/ULIpEWqX9f4CP/9FUP9Vp1pwyYasSoltYPa3NpUYcIw0fRRCO9WLoF3PfRGC+UwVRayBYE/qGqORsqACy6Ra/OsXEB9vpaJBx92ZDX2AsLGFfGxf4DRgVpBLhC2MWwXTI1HtWS7svmVAA94umEYjDhq/+oZedawq9p/IL4h03q2MJpvhRqGZLFDi/V8gyQcaYklsc6bDxSUNpGu5UhKSxC5K7E5zChHoOxcWu0Ycn5xKHQfXOJQIJUw8MPBnsYyGm2jhiDgOYoQ9XEmN1efdRIuUVIo4qZTU9wpOHhwKmtp0gl0Czr7L9auWUhmixIhJow90VfLOIVACKdLqSpDioVtrqsNbegmld43GwR1i3dkBqatzlu8R7F7v8Nra3zfXHzflDC2ikw05QdlF2LsMkt6vEaCgN/Nq+kmS76t+qBbQQSw1ibZmmRuIVuXtsTVyk6RvZ7CqBnFmUFo/+AuW3zetwNt0Hdmq4SaTJ91gp64NWh+BNupVQvqWn5fOhRpCqpNWoMmM0wfQyNABE49s0+ilNoNAkljL0Yqk7jqSlO0rEu7SgQJcUyEWNHvZq0fsJwPrLvUcleZ6NtOWhHmd4ruwbL00uqX7GsDhAkkYvXmhFh/XkkUGnMaXlcO7z8Mps6RsmIDV0k2mY5GjGrLT1ETPDPiIgsslGHWGmWjDHLRON3kwN/SrBpYhF6GLT+Pr3UD4vIaM5+1tGOl9byDHe1+jvIP1vyP0SeNXSfNTALzM9hRdyFjl9GrnzZpeqsDkFQji0Y/3UEg4/MJmZLLDTO2wIskwTTujZtEo0Wzpjd9oCSVwFH1i2EXveYXuFFyWVdfwHAsm548Lwq7TYVaaPl8BkYqRtQy+h8HLE2paMizdWQ1TN51vS051Ho+eljcy8TgKdjxEaQ5xezcA2vl0aOonXagiFxV1KiEpiSTzQqTJDimrCxTIdZ8mmj++N388f/zXk0MkzNbX3NFgeQZ9d6VRWHoBbBX5oANN5fgzVMnqS1Lkg8iRee6wr50ln7OkQfmyd7gZVq+KHKHa78o2PlS4U8JReIxZ/XEmdYG0nbtcWExLPSds7/Ewequ076ItSTm2ltSrU70csE6Q1ARx8OO4KdG9I900A9u482oZF51kWcMsnXDQUG8RkT1Tyi87HR1cn0vUpiyVN4vk4atoZjSdXj/ed4t5agNJ7yiB9CKKB8SAvUZDTdWdAj1553KKktGqNr2NF6XTHunS/6CgeShXWLre/sHRrz1U4oLgq3FT+xrldwz9HRE+gUL3Yu/RUcPSm1i2fh+9pdPCY8/1AvH56h1J8lnJ/v8F6T2QUtiLuXcAAADsSURBVAjXBcHNToMwAADgtrRA24G0kG2ZiYnGBzDz6tGD72uMnvRq4s0r8SfifuIJKGy0pcXvgy9Pj8e+jRlns2S7qay1q9Ozrq0PfS9kgSlnlDE3mkzm+XwxWuvdNBpdzJeD1qj6/kiFwBFt6loPWmuj2ibJJAmj97dXZB2IYvq338eUBghxzjMpojAICby5vUPnF5ckxFfra+/c6CajD2BUJ0mMfD9LUrzbVIvV8vnhPi9ySOIAIUqcd1YWYlv+4iShu58vKVKtzeTA5P0APAKuVuazLLE7KtU31ui6GyaIIACdUoKH3mpG4D/xf3hEcOh7mgAAAABJRU5ErkJggg==');
    background-size: cover;
    background-position: center;

  }
  .swiper-container {
    height: 100%;
    .swiper-slide {
      background-size: cover;
      background-position: center;
      display: flex;
      align-items: flex-end;
      .wrapper {
        padding: 20px;
        width: 60%;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        .title {
          font-size: 11.5vw;
          z-index: 9;
        }
        .teaser,
        .title {
          margin-bottom: 5px;
          padding: 5px 10px;
          display: block;
          color: #000;
          font-weight: bold;
          &.dark {
            color: #FFF;
          }
        }
      }
    }
  }
}
</style>
