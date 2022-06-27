<template>
    <section id="labs">
        <div>
            <div>
                <div>
                    <h1>
                        V akých laboch<br>možeš študovať?
                    </h1>
                </div>
                <a-HoverCard data="labsCards"/>
            </div>
        </div>
    </section>
</template>

<script>
import AHoverCard from './../cards/a-HoverCard.vue'
export default {
    name:'a-Labs',
    components: {
        AHoverCard
    }
    
}
</script>

<style scoped>
    
</style>