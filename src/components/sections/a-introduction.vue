<template>
    <section id="introduction" class="bg-primary position-relative mb-4 mb-md-5">
            <div class="container">
                <div class="row align-items-center">
                    <div class="col-lg-5 my-md-5 py-5 align-heading z-index-1">
                        <h1 class="text-white fw-light mb-4">
                            Inštitút stredoškolského odborného vzdelávania
                            <br>
                            <span class="fw-bolder">zameraný na IT &amp; AI</span>
                        </h1>
                        <p class="text-white">
                            Realizujeme odborné vzdelávanie zamerané na IT pre štátne školy ako nový štandard formálneho
                            vzdelávania
                        </p>
                    </div>
                    <div class="col-image-wrapper d-lg-none z-index-1">
                        <figure class="overflow-hidden image-wrapper mb-0">
                            <img src="../../assets/introduction-img.png" alt="introduction">
                        </figure>
                    </div>
                    <div class="d-none d-lg-block">
                        <img class="introduction-img" src="../../assets/introduction-img.png" alt="introduction">
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-block round-disk">
                <img src="../../assets/o_letter.png" alt="round-disk"> 
            </div>
        </section>
</template>

<script>
export default {
    name:'a-introduction'
}

</script>

<style scoped>
.fw-bolder {
    font-weight: 500 !important;
}
.image-wrapper { 
    width: 100%;
    height: 100%;
    display: flex;
    align-items: end;
}

.introduction-img {
    position: absolute;
    left: 50%;
    bottom: 0;
    height: auto !important;
    width: auto !important;
    max-width: 50%;
    max-height: 95%;
    z-index: 99;
}

.col-image-wrapper .image-wrapper img {
    width: auto !important;
    height: auto !important;
    max-width: 100%;
    max-height: calc( 100% - 5px );
}

.round-disk {
    position: absolute;
    overflow: hidden;
    width: 200px;
    right: 0;
    bottom: -200px;
}

.round-disk img {
    width: 400px;
    height: auto;
    max-width: none;
}

@media (max-width: 1500px) {
.round-disk {
    width: 150px;
    bottom: -150px;
}
.round-disk img {
    width: 300px;
    }
}

@media (max-width: 991.98px) {
    #introduction {
        min-height: 420px;
        padding-top: 50px;
    }
}

@media (max-width: 767.98px) {
    .col-image-wrapper {
        position: absolute;
        bottom: 0;
        z-index: 0;
        opacity: 0.15;
        width: 100%;
        height: 100%;
    } 
}

@media (max-width: 1200px) and (min-width: 1015px) {
    .align-heading {
        width: 46%;
    }
}
</style>