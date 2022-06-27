<template>
    <div v-for="card in hoverCards()" :key="card" class="card border-0 me-2">
        <div class="card-body px-4 pt-4 pb-5 px-xl-5">
            <h5 class="card-title text-black mb-2">
                <strong>{{ card.FirstTitle }}</strong>
                <span class="fw-normal">{{ card.SecondTitle }}</span>
            </h5>
            <p class="card-text fs-7">
                {{ card.text }}
            </p>
            <img class="position-absolute" src="./../../assets/arrow-right-blue.svg" alt="arrow">
            <img class="position-absolute" src="./../../assets/arrow-right.svg" alt="arrow">
        </div>
        <a href="#" class="position-absolute w-100 h-100"></a>
    </div>
</template>
<script>
export default {
    props: ['data'],
    data() {
        return {
            labsCards: [
                { FirstTitle: 'Hybrid', SecondTitle: 'Lab', text: 'Študenti sa učia vyvíjať hybridné aplikácie v HTML, PHP, CSS, JavaScript, Ionicu, Vue a OctoberCMS.' },
                { FirstTitle: 'Games', SecondTitle: 'Lab', text: 'Študenti vyvíjajú mobilné hry v Unity a GDevelop, učia sa tvoriť 2D grafiku v programe Piskel, 3D grafiku v programe Blender a herný dizajn.' },
                { FirstTitle: 'Apps', SecondTitle: 'Lab', text: 'Študenti sa učia vyvíjať mobilné aplikácie v C# a Xamarin.forms a webové aplikácie v Java a Angular JS.' },
            ],
            joinCards: [
                { FirstTitle: 'Labmastri', text: 'Odborníci z praxe, ktorí odovzdávajú študentom svoj know-how v roli mentora 5 hodín týždenne celý školský rok.' },
                { FirstTitle: 'Firmy', text: 'Technologické firmy sú garantmi obsahu jednotlivých labov, spolupracujú so študentmi na projektoch a v rámci študentských stáží.' },
                { FirstTitle: 'Školy', text: 'Stredné odborné školy zamerané na digitálne technológie v jednotlivých regiónoch inovujú svoje technologické vzdelávanie.' },
                { FirstTitle: 'Študenti', text: 'Stredoškoláci so záujmom o najnovšie technológie a silnou vnútornou motiváciou učiť sa nové veci a rozvíjať svoje schopnosti.' },
            ]
        }
    },
    methods: {
        hoverCards() {
            return this.data == 'labsCards' ? this.labsCards : this.joinCards;
        }
    }
}
</script>
<style>
    
</style>