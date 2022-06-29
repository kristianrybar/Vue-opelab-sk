<template>
    <div v-for="card in specials" :key="card" class="col-md-4 col-xl-3 ms-xl-5 pt-3 pt-md-5">
        <div class="card border-0">
            <img :src="card.imgSource" width="44">
            <div class="card-body px-0 pt-4">
                <h5 class="card-title mb-4">
                    <strong>{{ card.title }}</strong>
                </h5>
                <p class="card-text text-dark">
                    {{ card.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'a-specialcards',
    data() {
        return {
            specials: [ { title: 'Partnerstvo', text: 'Dáva študentom slobodu, ktorú vyvažujú zodpovednosťou. Spolupráca LabMastra a študentov je v partnerskej rovine.', imgSource: new URL('../../assets/special1.svg', import.meta.url).href },
                        { title: 'LabMaster', text: 'Je mentor s expertízou v danej oblasti, ktorý nastavuje rámce a sprevádza študentov pri dosahovaní míľnikov.', imgSource: new URL('../../assets/special2.svg', import.meta.url).href }, 
                        { title: 'Učebný blok', text: 'Je základný dokument, z ktorého sa študenti učia. Obsahuje všetky vzdelávacie podklady pre konkrétnu fázu.', imgSource: new URL('../../assets/special3.svg', import.meta.url).href },
                        { title: 'Problem driven', text: 'Je princíp učenia, vďaka ktorému sú študenti vedení ku kritickému mysleniu s cieľom vyriešiť konkrétne problémy.', imgSource: new URL('../../assets/special4.svg', import.meta.url).href },
                        { title: 'Project driven', text: 'Po teoretickej fáze sú študenti rozdelení do tímov, v ktorých v spolupráci s firmami tvoria konkrétny projekt pre zákazníka.', imgSource: new URL('../../assets/special5.svg', import.meta.url).href }, 
                        { title: 'Samoštúdium', text: 'Študenti trávia 80% času samoštúdiom a sú vedení k tímovej spolupráci. 20% teórie slúži iba ako odrazový mostík.', imgSource: new URL('../../assets/special6.svg', import.meta.url).href } 
                    ],
        } 
    } 
} 
</script>

<style>
#special .card-text {
    font-weight: 400 !important;
    font-size: 15px;
}

.person {
    width: 100%;
    border-radius: 9px;
}
.ig-img {
    padding: 0 !important;
    cursor: pointer;
}   
</style>