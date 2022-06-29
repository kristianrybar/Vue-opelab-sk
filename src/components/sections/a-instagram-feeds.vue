<template>
    <section id="instagram-feeds">
        <div class="d-flex py-5">
            <div class="ig-img col-sm-3 col-4 col-md-2">
                <img src="../../assets/ig-17934659900287394-s.jpg" alt="instagram">
            </div>
            <div class="ig-img col-sm-3 col-4 col-md-2">
                <img src="../../assets/ig-17991800194488272-s.jpg" alt="instagram">
            </div>
            <div class="ig-img col-sm-3 col-4 col-md-2">
                <img src="../../assets/ig-18139357072265173-s.jpg" alt="instagram">
            </div>
            <div class="ig-img d-none d-sm-block col-sm-4 col-md-2">
                <img src="../../assets/ig-17918681213337014-s.jpg" alt="instagram">
            </div>
            <div class="ig-img d-none d-md-block col-md-2">
                <img src="../../assets/ig-17932774010100094-s.jpg" alt="instagram">
            </div>
            <div class="ig-img d-none d-md-block col-md-2">
                <img src="../../assets/ig-17951708893783726-s.jpg" alt="instagram">
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'a-instagram-feeds'
}
</script>

<style scoped>
#instagram-feeds div {
    max-width: 100%;
}

.ig-img img {
    max-height: 100%;
    min-height: 100%;
    object-fit: cover;
}

.ig-img:hover {
    filter: brightness(60%);
}
</style>