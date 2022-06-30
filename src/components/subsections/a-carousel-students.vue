<template >
    <div class="wrap-slider">
        <div id="slider-44" class="carousel slide" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#slider-44" data-bs-slide-to="0" class="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#slider-44" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#slider-44" data-bs-slide-to="2" aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner">
                <div class="carousel-item active">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-xl-5">
                            <h3 class="mb-5">
                                Študentský projekt Mapovanie z HybridLabu
                            </h3>
                            <p class="text-dark">
                                <strong>Mapovanie</strong> je hybridná aplikácia, ktorá umožní
                                ľuďom so spoločnými záľubami deliť sa o svoje obľúbené miesta a ukladať
                                ich do komunitnej mapy. Aplikáciu tak môžu využívať ľudia z rôznych
                                komunít. Užívateľ sa jednoducho pridá do skupiny, ktorá ho zaujíma, a
                                následne môže vidieť už “zmapované” miesta alebo pridávať nové. Prehľad
                                príspevkov a skupín mu zobrazuje dostupná mapa. Do aplikácie sa užívateľ
                                vie prihlásiť cez SSO, t.j. prihlásenie pomocou služby tretej strany,
                                napr. Facebook alebo Apple ID účet. Na vývoj študenti použili
                                technológie - Ionic, OctoberCMS a Vue. Aktuálne je aplikácia v MVP
                                verzii.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <figure class="position-relative">
                                <img src="../../assets/maxresdefault.jpg" alt="projekt-mapovanie">
                                <img class="play-img position-absolute" src="../../assets/play.svg" alt="play">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-xl-5">
                            <h3 class="mb-5">
                                Študentský projekt RealTopia z GamesLabu
                            </h3>
                            <p class="text-dark">
                                <strong>RealTopia</strong> je fantasy hra s 2D grafikou, ktorá
                                nesie environmentálne posolstvo. Je v nej zakomponovaných množstvo
                                faktov o ekológii, globalizácii a svete okolo nás. V jadre je jednoduchá
                                Open World stratégia s Resource Managementom a Pixel Art grafikou.
                                Študenti ju vyvíjali v multiplatformovom hernom engine - Unity s
                                využitím jazyku C#.
                                Hra je dostupná pre Android. Tento študentský projekt prebehol v
                                spolupráci s Ambrelou - platformou rozvojových organizácií v rámci ich
                                medzinárodného projektu Bridge 47.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <figure class="position-relative">
                                <img src="../../assets/student-project-realtopia.png" alt="projekt-realtopia">
                                <img class="play-img position-absolute" src="../../assets/play.svg" alt="play">
                            </figure>
                        </div>
                    </div>
                </div>
                <div class="carousel-item">
                    <div class="row justify-content-between">
                        <div class="col-md-6 col-xl-5">
                            <h3 class="mb-5">
                                Študentský projekt Renmo z AppsLabu
                            </h3>
                            <p class="text-dark">
                                <strong>Remno</strong> je softvérová aplikácia, ktorá slúži ako
                                rezervačný systém.
                                Užívateľ si vie prostredníctvom systému ľahko a rýchlo zarezervovať
                                rôzne služby, napr. objednať sa ku kaderníkovi. V aplikácii si takisto
                                firmy vedia nastaviť detailné informácie o sebe a ponuku svojich
                                služieb. Aplikácia vie uľahčiť prácu aj zamestnancom, ktorí vidia
                                aktívne rezervácie pre daný deň ale aj nasledujúce.
                                Na vývoj študenti použili technológie: MySQL, SpringBoot a Angular.
                            </p>
                        </div>
                        <div class="col-md-6">
                            <figure class="position-relative">
                                <img src="../../assets/maxresdefault1.jpg" alt="projekt-remno">
                                <img class="play-img position-absolute" src="../../assets/play.svg" alt="play">
                            </figure>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-block position-relative">
                <button class="carousel-control-prev d-none d-md-block" type="button"
                    data-bs-target="#slider-44" data-bs-slide="prev">
                    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Previous</span>
                </button>
                <button class="carousel-control-next d-none d-md-block" type="button"
                    data-bs-target="#slider-44" data-bs-slide="next">
                    <span class="carousel-control-next-icon" aria-hidden="true"></span>
                    <span class="visually-hidden">Next</span>
                </button>
            </div>
            <div class="col-12 position-relative">
                <a class="text-decoration-none text-primary d-flex align-items-center position-relative z-index-1" href="https://www.youtube.com/channel/UCinIL-0-qCLU6zE5fo1SPNw" target="_blank">
                    Pozrieť si všetky projekty
                    <img class="ms-2" src="../../assets/arrow-right-blue.svg" alt="arrow-right" style="margin-top: 3px;">
                </a>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'a-carousel-students'
    
}
</script>

<style scoped>
    #slider-44 figure img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 15px;
    cursor: pointer;
}

#slider-44 .play-img {
    display: inline;
    width: auto;
    height: auto;
    left: 50%;
    top: 50%;
    transform: translate(-50%,-50%)!important;
}

#slider-44 figure {
    height: 400px;
}

#slider-44 .carousel-indicators {
    top: 430px;
}

#slider-44 .carousel-indicators [data-bs-target] {
    width: 11px !important;
    height: 11px !important;
    border-radius: 50%;
    background-color: #3597ff;
}

#slider-44 .carousel-control-prev-icon {
    background-image: url(../../assets/arrow-slide-left-active.svg);
}

#slider-44 .carousel-control-next-icon {
    background-image: url(../../assets/arrow-slide-right-active.svg);
}
#slider-44 .carousel-control-next {
    left: 38px;
    width: 0;
}

#slider-44 .carousel-control-prev {
    left: 0;
    width: 0;
}

#slider-44 div:nth-child(4) {
    top: 65px;
}

@media (max-width: 1400px) {
    #slider-44 div:nth-child(4) {
        top: 60px;
    }
}

@media (max-width: 767.98px){
    #slider-44 .carousel-indicators {
        top: 96%;
    }
}
</style>