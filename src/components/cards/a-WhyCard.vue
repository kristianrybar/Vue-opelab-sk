<template>
    <div class="col-md-4 col-xl-3 pt-5" v-for="card in whyCards" :key="card" >
        <div class="card border-0 text-center text-md-start">
            <img class="mx-auto mx-md-0" :src="card.imgSource" alt="select" width="50">
            <div class="card-body px-0 pt-3">
                <h5 class="card-title mb-2">
                    <strong>{{ card.title }}</strong>
                </h5>
                <p class="card-text text-dark fs-7">
                    {{ card.text }}
                </p>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            whyCards: [
                { title: 'Celospoločenský rozvoj', text: 'Osnovy aj učebné materiály pre všetky tech oblasti sú open source.', imgSource: new URL('../../assets/select.svg', import.meta.url).href },
                { title: 'Učenie praxou', text: 'Študentov vedieme k tímovému riešeniu problémov.', imgSource: new URL('../../assets/support.svg', import.meta.url).href },
                { title: 'Rozvoj talentu', text: 'Vytvárame šikovné tímy schopné riešiť veľké problémy.', imgSource: new URL('../../assets/intership.svg', import.meta.url).href }
            ]
        }
    }
    
}
</script>

<style scoped>
    
</style>