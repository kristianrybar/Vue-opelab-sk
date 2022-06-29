<template>
    <section id="special" class="py-4 py-md-5">
        <div class="container py-4 py-md-5">
            <div class="row justify-content-center border-bottom pb-5">
                <div class="col-12 text-center">
                    <h1 class="mb-5">
                        Čím sme <strong>výnimočný?</strong>
                    </h1>
                </div>
                <a-specialcards/>
            </div>
            <div class="row pt-5">
                <div class="col-12 py-4 text-center">
                    <h1 class="mb-5">
                        <strong>Spoznaj nás</strong>
                    </h1>
                </div>
                <a-membercards/>
            </div>    
        </div>
    </section>
</template>

<script>
import ASpecialcards from '@/components/cards/a-specialcards.vue'
import AMembercards from '@/components/cards/a-membercards.vue'

export default {
    name:'a-special',
    components: {
        ASpecialcards,
        AMembercards
    }

    
}
</script>

<style scoped>
    
</style>