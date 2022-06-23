
<template>
  <a-Header/>
  <a-Nav/>
  <a-Mainpage/>
</template>

<script>
import AHeader from './components/a-Header.vue'
import ANav from './components/a-Nav.vue'
import AMainpage from '@/components/a-Mainpage.vue'

export default {
  name: 'App',
  components: {
    AHeader,
    ANav,
    AMainpage
  }
}

</script>

<style scoped>

</style>
