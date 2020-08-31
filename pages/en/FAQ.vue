<template>
  <div>
    <breadcrumb :end="$t('common_problem')"></breadcrumb>
    <!-- End breadcrumb-->
    <div class="faq">
      <div class="container">
        <h1 class="title green-underline ml-0px">{{$t('common_problem')}}</h1>
        <div id="accordion">
          <div class="faq-question mb-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_0')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_1')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_2')}}</h3>
          </div>
          <div class="faq-answer">
            <p>
              {{$t('common_problem_3')}}
            </p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_4')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_5')}}</p>
          </div>

          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_6')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_7')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_8')}}</h3>
          </div>
          <div class="faq-answer">
            <p>
              {{$t('common_problem_9')}}
            </p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_10')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_11')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_12')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_13')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_14')}}</h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_15')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">
              {{$t('common_problem_16')}}
            </h3>
          </div>
          <div class="faq-answer">
            <p>{{$t('common_problem_17')}}</p>
          </div>
          <div class="faq-question mb-10px mt-10px">
            <i class="icon_plus"></i>
            <h3 class="faq-question mb-10px mt-10px">{{$t('common_problem_18')}}</h3>
          </div>
          <div class="faq-answer">
            <p>
              {{$t('common_problem_19')}}
            </p>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import {fetchReturn} from "@/mixins/fetch/headerFetch"
  import mixinDefaultInit from "@/mixins/mixinDefaultInit"

  export default {
    mixins: [mixinDefaultInit],
    name: 'FAQ',
    fetch(ctx) {
      return fetchReturn(ctx, [])
    },
  }
</script>

<style scoped></style>
