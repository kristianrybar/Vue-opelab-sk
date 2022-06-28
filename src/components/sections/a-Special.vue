<template>
    <section id="special">
        <div>
            <div>
                <div>
                    <h1>
                        Čím sme výnimočný?
                    </h1>
                </div>
            <a-SpecialCard/>
            </div>
            <div class="row pt-5">
                <div class="col-12 py-4 text-center">
                    <h1 class="mb-5">
                        <strong>Spoznaj nás</strong>
                    </h1>
                </div>
                <a-MemberCard/>
            </div>    
        </div>
    </section>
</template>

<script>
import ASpecialCard from '@/components/cards/a-SpecialCard.vue'
import AMemberCard from '@/components/cards/a-MemberCard.vue'


export default {
    name:'a-Special',
    components: {
        ASpecialCard,
        AMemberCard

    }

    
}
</script>

<style scoped>
    
</style>