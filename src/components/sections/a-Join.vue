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
                    <div>
                        <div>
                            <h5>
                                Labmastri
                            </h5>
                            <p>
                                Odborníci z praxe, ktorí odovzdávajú študentom svoj know-how v roli mentora 5 hodín
                                týždenne celý školský rok.
                            </p>
                            <img src="../../assets/arrow-right-blue.svg" alt="arrow-right-blue" width="20">
                            <img src="../../assets/arrow-right.svg" alt="arrow-right" width="20">
                        </div>
                        <a href="#"></a>
                    </div>
                    <div>
                        <div>
                            <h5>
                                Firmy
                            </h5>
                            <p>
                                Technologické firmy sú garantmi obsahu jednotlivých labov, spolupracujú so študentmi
                                na projektoch a v rámci študentských stáží.
                            </p>
                            <img src="../../assets/arrow-right-blue.svg" alt="arrow-right-blue" width="20">
                            <img src="../../assets/arrow-right.svg" alt="arrow-right" width="20">
                        </div>
                        <a href="#"></a>
                    </div>
                    <div>
                        <div>
                            <h5>
                                Školy
                            </h5>
                            <p>
                                Stredné odborné školy zamerané na digitálne technológie v jednotlivých regiónoch
                                inovujú svoje technologické vzdelávanie.
                            </p>
                            <img src="../../assets/arrow-right-blue.svg" alt="arrow-right-blue" width="20">
                            <img src="../../assets/arrow-right.svg" alt="arrow-right" width="20">
                        </div>
                        <a href="#"></a>
                    </div>
                    <div>
                        <div>
                            <h5>
                                Študenti
                            </h5>
                            <p>
                                Stredoškoláci so záujmom o najnovšie technológie a silnou vnútornou motiváciou učiť
                                sa nové veci a rozvíjať svoje schopnosti.
                            </p>
                            <img src="../../assets/arrow-right-blue.svg" alt="arrow-right-blue" width="20">
                            <img src="../../assets/arrow-right.svg" alt="arrow-right" width="20">
                        </div>
                        <a href="#"></a>
                    </div>
                </div>
            </div>
        </div>
        <a-CarouselJoin/>
    </section>
</template>

<script>
import ACarouselJoin from '@/components/subsections/a-CarouselJoin.vue'

export default {
    name:'a-Join',
    components: {
        ACarouselJoin
        
    }
}
</script>

<style scoped>
    
</style>