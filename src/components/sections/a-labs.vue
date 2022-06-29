<template>
    <section id="labs" class="py-4 py-md-5">
        <div class="container py-4">
            <div class="row align-items-center">
                <div class="col-lg-5 col-xl-4 mb-3 mb-md-5 mb-lg-0">
                    <h1 class="text-start text-md-center">
                        V akých laboch
                        <br>
                        <strong>možeš študovať?</strong>
                    </h1>
                </div>
                <div class="col-lg-7 col-xl-8 card-group">
                    <a-hovercards data="labsCards"/>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
import AHovercards from './../cards/a-hovercards.vue'
export default {
    name:'a-labs',
    components: {
        AHovercards
    }
}
</script>

<style scoped>

</style>