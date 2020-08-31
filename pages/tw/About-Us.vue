<template>
  <div class="about-us">
    <breadcrumb :end="$t('about_us')"></breadcrumb>
    <div class="container">
      <div class="our-story">
        <div class="row">
          <div class="col-12 col-md-6 mb-40px">
            <div class="our-story_text">
              <h1 class="title green-underline">{{$t('about_us')}}</h1>
              <p>
                {{$t('abuot_us_1')}}
              </p>
              <div class="about_us_h3">
                <h3 class="mt-4 mb-4">{{$t('abuot_us_0')}}</h3>
                <div>{{$t('about_us_2')}}</div>
                <br/>
                <p>
                  {{$t('about_us_3')}}
                </p>
                <br/>
                <p>{{$t('about_us_4')}}</p>
                <br/>
                <p>{{$t('about_us_5')}}</p>
                <br/>
                <p>
                  {{$t('about_us_6')}}
                </p>
              </div>
            </div>
          </div>
          <div class="col-12 col-md-6">
            <div class="our-story_video">
              <img src="images/webs/img_aboutous.png" alt="play video"/>
            </div>
          </div>
        </div>
      </div>
      <benefits style="margin-left: -15px; margin-right: -15px"></benefits>
    </div>
  </div>
</template>

<script>
  import Benefits from '@/components/Benefits'
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins:[mixinDefaultInit],
    name: 'AboutUs',
    components: {
      Benefits
    },
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
