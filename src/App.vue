
<template>
  <a-Header/>
  <a-Nav/>
  <a-Mainpage/>
  <a-Footer/>
</template>

<script>
import AHeader from '@/components/a-Header.vue'
import ANav from '@/components/a-Nav.vue'
import AMainpage from '@/components/a-Mainpage.vue'
import AFooter from '@/components/a-Footer.vue'

export default {
  name: 'App',

  components: {
    AHeader,
    ANav,
    AMainpage,
    AFooter
  }
}

</script>

<style scoped>

</style>
