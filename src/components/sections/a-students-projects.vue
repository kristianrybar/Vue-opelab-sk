<template>
    <section id="studentsProjetcts" class="py-4 py-md-5 position-relative">
            <div class="container border-bottom">
                <div class="row">
                    <div class="col-12 text-center mb-md-5">
                        <h1 class="mb-5 mt-5 mt-md-0">
                            Pozrite si <strong>študentské projekty</strong>
                        </h1>
                        <p class="text-drak mx-md-5 mb-4 mb-lg-5"> 
                            Stredoškoláci v OpenLaboch pracujú na reálnych projektoch v spolupráci s firmami pričom
                            získavajú praktické zručnosti a osvojujú si prístup, ktorým neskôr posunú svet technológií a
                            celú spoločnosť vpred.
                        </p>
                    </div>
                    <div class="col-12">
                        <h5 class="mb-5">
                            Projekty študentov<strong>v OpenLabe</strong>
                        </h5>
                    </div>
                    <a-carousel-students/>
                </div>
            </div>
            <div class="round-disk d-none d-lg-block">
                <img src="../../assets/a_letter.png" alt="round-disk">
            </div>
        </section>
</template>

<script>
import ACarouselStudents from '@/components/subsections/a-carousel-students.vue'

export default {
    name:'a-students-projects',
    components: {
        ACarouselStudents
    }
}
</script>

<style>
#studentsProjetcts .container {
    padding-bottom: 100px ;
}

.round-disk {
    position: absolute;
    overflow: hidden;
    width: 200px;
    right: 0;
    bottom: -200px;
}

#studentsProjetcts .round-disk {
    width: 435px;
    height: 435px;
    left: -221px;
    z-index: -1;
}

.round-disk img {
    width: 400px;
    height: auto;
    max-width: none;
}

@media (max-width: 1200px){
    #studentsProjetcts .round-disk {
        width: 251px;
        height: 251px;
        left: -125px;
        }

        #studentsProjetcts .round-disk img {
        width: 100%;
    }
    }
</style>