<template>
    <div v-for="card in members" :key="card" class="col-6 col-md-3 mb-4 pt-4">
        <div class="card border-0">
            <img :src="card.imgSource" alt="person" class="card-img-top rounded">
            <div class="card-body px-0 pt-3">
                <h6 class="know-card-subtitle text-gray card-subtitle mb-2">{{ card.role }}</h6>
                <h5 class="card-title mb-0 mt-3 text-black">{{ card.name }}</h5>
                <p class="text-gray card-text">{{ card.position }}</p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            members: [
                { name: 'Grigor Ayrumyan', position: 'Co-founder & Executive Director', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSource: require('@/assets/images/grigor-ayrumyan.jpg') },
                { name: 'Slavomír Terezka', position: 'Co-founder', role: 'BOARD MEMBER', imgSource: require('@/assets/images/slavomir-terezka.jpg') },
                { name: 'Roman Sekerka', position: 'Co-founder & Tech Garant pre HybridLab a AppsLab', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSource: require('@/assets/images/roman-sekerka.jpg') },
                { name: 'Ján Kožlej', position: 'Tech Garant pre GamesLab', role: 'BOARD MEMBER & EXECUTIVE TEAM', imgSource: require('@/assets/images/jan-kozlej.jpg') },
                { name: 'Veronika Radobická', position: 'Marketing Manager', role: 'EXECUTIVE TEAM', imgSource: require('@/assets/images/veronika-radobicka.jpg') },
                { name: 'Dominika Krullová', position: 'Project Manager', role: 'EXECUTIVE TEAM', imgSource: require('@/assets/images/dominika-krullova.jpg') },
                { name: 'Viktória Jakubovičová', position: 'Relationship Manager', role: 'EXECUTIVE TEAM', imgSource: require('@/assets/images/viktoria-jakubovicova.jpg') }
            ],
        }
    }
}
</script>
<style>
    
</style>