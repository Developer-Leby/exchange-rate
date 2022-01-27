<template>
  <div>
    <div class="error">
      환율 정보를 불러오는데 실패하였습니다.<br/>
      {{message}}
    </div>
    <router-link to="/">새로고침</router-link>
  </div>
</template>

<script>

export default {
  name: 'ErrorPage',
  props: {
    message: {
      type: String,
      default: ''
    }
  },
}
</script>

<style scoped>

</style>