<template>
  <div class="slider">
    <div class="full-fluid">
      <div class="slider_wrapper">
        <div class="slider-block pointer"
             :style="{
             'background-image':`url('${imageLink(banner.bigimage)}')`
             }"
             style="min-height: 725px"
             @click="toLink(banner)"
             v-for="banner in banners" :key="banner.id">
          <div class="slider-content">
            <div class="container pl-0px pr-0">
              <div class="row align-items-center justify-content-center">
                <div class="col-12 col-md-5 col-xl-6">
                  <div class="slider-text d-flex flex-column align-items-center align-items-md-start">
                    <h5 data-animation="fadeInUp" data-delay=".2s">{{get_content(banner,'subtitle')}}</h5>
                    <h1 style="margin-right: 20px; margin-left: 20px; text-align: center" data-animation="fadeInUp" data-delay=".3s">{{get_content(banner,'title')}}</h1>
                    <h3 style="margin-right: 20px; margin-left: 20px; text-align: center" data-animation="fadeInUp" data-delay=".4s">{{get_content(banner,'description')}}</h3><a
                    class="normal-btn"
                    :href="banner.link"
                    data-animation="fadeInUp"
                    v-if="get_content(banner,'button')"
                    data-delay=".4s">{{get_content(banner,'button')}}</a>
                  </div>
                </div>
                <div class="col-12 col-md-6">
                  <div class="slider-img" data-animation="zoomIn" data-delay=".1s"
                       v-if="banner.smallimage"
                  ><img
                    style="width: 570px; height: 525px"
                    src="/images/homepage01/slider_subbackground_1.png" alt="">
                    <div class="prallax-img" style="top: 50%;left: 50%;transform: translateX(-50%) translateY(-50%)">
                      <div :id="'img-block-'+banner.id">
                        <img class="img"
                             :src="imageLink(banner.smallimage)"
                             alt=""
                             data-depth="1"></div>
                    </div>
                  </div>
                  <div v-else style="width: 570px; height: 525px"></div>
                </div>
              </div>
            </div>
          </div>
        </div>


      </div>
      <benefits></benefits>
    </div>
  </div>
</template>

<script>
  import Benefits from '@/components/Benefits'
  import mixinCategory from "@/mixins/mixinCategory"
  import {mapState} from 'vuex'

  function mainSlider() {
    let BasicSlider = $('.slider_wrapper')
    BasicSlider.on('init', function (e, slick) {
      let $firstAnimatingElements = $('.slider-block:first-child').find('[data-animation]')
      doAnimations($firstAnimatingElements)
    })
    BasicSlider.on('beforeChange', function (e, slick, currentSlide, nextSlide) {
      let $animatingElements = $('.slider-block[data-slick-index="' + nextSlide + '"]').find('[data-animation]')
      doAnimations($animatingElements)
    })
    BasicSlider.slick({
      // appendArrows: $('.slider_wrapper .slider-control'),
      prevArrow: '<button type="button" class="slick-prev"><i class="arrow_carrot-left"></i></button>',
      nextArrow: '<button type="button" class="slick-next"><i class="arrow_carrot-right"></i></button>',
      infinite: true,
      fade: true,
      // autoplay: true,
      speed: 3000,
      cssEase: 'ease-out',
    })

    function doAnimations(elements) {
      let animationEndEvents = 'webkitAnimationEnd mozAnimationEnd MSAnimationEnd oanimationend animationend'
      elements.each(function () {
        let $this = $(this)
        let $animationDelay = $this.data('delay')
        let $animationType = 'animated ' + $this.data('animation')
        $this.css({
          'animation-delay': $animationDelay,
          '-webkit-animation-delay': $animationDelay
        })
        $this.addClass($animationType).one(animationEndEvents, function () {
          $this.removeClass($animationType)
        })
      })
    }
  }


  export default {
    mixins: [mixinCategory],
    components: {
      Benefits,
    },
    data() {
      return {}
    },
    computed: {
      ...mapState('banner', {
        banners: state => state.items
      })
    },
    methods: {
      toLink(banner) {
        // process.client 是只有在client 端才有 用nuxt 需要增加這個if 判斷
        if (process.client) {
          window.location.href = banner.link
        }
      },
      get_content(banner, key) {
        let language_type = 1
        let ret = ''
        for (let item of banner.content) {
          if (item.language_type === language_type) {
            ret = item[key]
            break
          }
        }
        return ret
      }
    },
    mounted() {
      this.$nextTick(() => {
        for (let banner of this.banners) {
          let sence = document.getElementById(`img-block-${banner.id}`)
          if (sence) {
            let parallaxInstance = new Parallax(sence, {
              hoverOnly: true,
            })
          }
        }
        mainSlider()

      })
    }
  }
</script>
