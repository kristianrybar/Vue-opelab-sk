<template >
    <section id="join">
        <div>
            <div>
                <div>
                    <h1>
                        Pridajte sa k nám
                        <br>
                        My všetci sme OpenLab…
                    </h1>
                </div>
                <div>
                    <a-HoverCard data="joinCards" />
                </div>
            </div>
        </div>
        <a-CarouselJoin/>
    </section>
</template>

<script>
import ACarouselJoin from '@/components/subsections/a-CarouselJoin.vue'
import AHoverCard from '@/components/cards/a-HoverCard.vue'
import AMemberCard from '@/components/cards/a-MemberCard.vue'

export default {
    name:'a-Join',
    components: {
        ACarouselJoin,
        AHoverCard,
        AMemberCard
        
    }
}
</script>

<style scoped>
    
</style>