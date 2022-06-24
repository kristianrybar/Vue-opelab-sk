<template>
    <section id="studentsProjetcts">
            <div>
                <div>
                    <div>
                        <h1>
                            Pozrite si študentské projekty
                        </h1>
                        <p>
                            Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom
                            získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a
                            celú spoločnosť vpred.
                        </p>
                    </div>
                    <div>
                        <h5>
                            Projekty študentov v OpenLabe
                        </h5>
                    </div>
                    <a-CarouselStudents/>
                </div>
            </div>
            <div>
                <img src="../../assets/a_letter.png" alt="round-disk" width="300">
            </div>
        </section>
</template>

<script>
import ACarouselStudents from '@/components/subsections/a-CarouselStudents.vue'

export default {
    name:'a-StudentsProjects',

    components: {
        ACarouselStudents
    }
    
}
</script>

<style>
    
</style>