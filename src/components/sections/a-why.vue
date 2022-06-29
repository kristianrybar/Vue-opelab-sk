<template>
    <section id="why">
        <div class="container py-4">
            <div class="row justify-content-center">
                <div class="col-12 z-index-1">
                    <h1 class="text-center mb-5">
                        Prečo OpenLab?
                    </h1>
                    <p class="text-dark text-md-center col-md-10 mx-md-5">
                        V OpenLabe študentov učíme najnovšie technológie. Zároveň im dávame veľkú slobodu, pričom
                        ich vedieme k zodpovednosti a samostatnosti, učíme ich princípy partnerského prístupu,
                        pracovať v tíme, trénujeme ich schopnosti sebareflexie a podnecujeme ich kreativitu. Takto
                        študentov pripravujeme osobnostne aj tech zručnosťami na veľké veci, ktoré môžu v budúcnosti
                        tvoriť.
                    </p>
                </div>
                <a-whycards/>
            </div>
        </div> 
    </section>
</template>

<script>
import AWhycards from './../cards/a-whycards.vue'

export default {
    name: 'a-why',
    components: {
       AWhycards
    }
}

</script>

<style scoped>

</style>