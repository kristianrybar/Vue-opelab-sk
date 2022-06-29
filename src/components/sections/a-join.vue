<template >
    <section id="join" class="position-relative py-3 py-md-5">
        <div class="container pt-4 pt-md-5">
            <div class="row">
                <div class="col-12">
                    <h1 class="text-center mb-5">
                        Pridajte sa k nám
                        <br>
                        <strong>My všetci sme OpenLab…</strong>
                    </h1>
                </div>
                <div class="col-12 card-group indicators d-flex flex-nowrap justify-content-xl-center overflow-scroll z-index-1 py-2">
                    <a-hovercards data="joinCards" />
                </div>
            </div>
        </div>
        <a-carousel-join/>
    </section>
</template>

<script>
import ACarouselJoin from '@/components/subsections/a-carousel-join.vue'
import AHovercards from '@/components/cards/a-hovercards.vue'

export default {
    name:'a-join',
    components: {
        ACarouselJoin,
        AHovercards,      
    }
}
</script>

<style scoped>
    
</style>