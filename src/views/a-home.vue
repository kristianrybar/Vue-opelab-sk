<template>
    <a-header/>
    <a-nav/>
    <a-mainpage/>
    <a-footer/>
</template>

<script>
import AHeader from '@/components/a-header.vue'
import ANav from '@/components/a-nav.vue'
import AMainpage from '@/components/a-mainpage.vue'
import AFooter from '@/components/a-footer.vue'

export default {
    name: 'Home',
    components: {
        AHeader,
        ANav,
        AMainpage,
        AFooter
    }
}

</script>

<style>
    
</style>