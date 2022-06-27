<template>
    <section id="why">
        <div>
            <div>
                <div>
                    <h1>
                        Prečo OpenLab?
                    </h1>
                    <p>
                        V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom
                        ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu,
                        pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto
                        študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti
                        tvoriť.
                    </p>
                </div>
            </div>
        </div> 
        <a-WhyCard/>
    </section>
</template>

<script>
import AWhyCard from './../cards/a-WhyCard.vue'

export default {
    name: 'a-Why',
    components: {
       AWhyCard
    }
}

</script>

<style scoped>

</style>