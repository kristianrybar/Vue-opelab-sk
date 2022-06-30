<template>
    <div class="wrap-slider">
        <div id="slider-22" class="carousel slide pt-md-4" data-bs-ride="false">
            <div class="carousel-indicators">
                <button type="button" data-bs-target="#slider-22" data-bs-slide-to="0" class="active"
                    aria-current="true" aria-label="Slide 0"></button>
                <button type="button" data-bs-target="#slider-22" data-bs-slide-to="1"
                    aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#slider-22" data-bs-slide-to="2"
                    aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#slider-22" data-bs-slide-to="3"
                    aria-label="Slide 3"></button>
            </div>
            <div class="carousel-inner mt-5 mt-md-0">
                <div class="carousel-item active">
                    <div class="labmastri card text-white">
                        <p class="fs-6 text-border">
                            Labmastri <strong>v OpenLabe</strong>
                        </p>
                        <h3 class="card-title my-0 my-xl-4">
                            V OpenLabe sa okrem technologických vedomostí a zručností snažíme rozvíjať aj iné
                            dôležité parametre kvalitných ľudí.
                        </h3>
                        <br>
                        <p class="mb-4 mb-xl-5">
                            Ako sú zodpovednosť, spoľahlivosť, samostatnosť, ale aj tímovosť a vzájomnú
                            komunikáciu. Prijímame výzvy najmä voči svojím vlastným ja.
                        </p>
                        <p class="mb-0">
                            Roman Popper, AppsLab
                        </p>
                        <p class="mb-0">
                            Siemens Healthineers
                        </p>
                    </div>
                    <figure class="mb-0 d-md-block d-none overflow-hidden">
                        <img src="../../assets/join-labmastri.png" class="d-block" alt="labmastri">
                    </figure>
                </div>
                <div class="carousel-item">
                    <div class="firmy card text-white">
                        <p class="fs-6 text-border">
                            Firmy <strong>v OpenLabe</strong>
                        </p>
                        <h3 class="card-title my-0 my-xl-4">
                            Technológie sa neustále menia.
                            <br>
                            Preto to “čo” sa študenti učia je druhoradé.
                        </h3>
                        <br>
                        <p class="mb-4 mb-xl-5">
                            V prvom rade riešime “prečo” a “ako” sa študenti vzdelávajú. Inými slovami, OpenLab
                            je o prístupe. Ten keď si študenti osvoja, dokážu ho aplikovať na čokoľvek po zvyšok
                            života.
                        </p>
                        <img class="signature" src="../../assets/signature1.png" alt="signature">
                        <p class="mb-0">
                            Grigor Ayrumyan
                        </p>
                        <p class="mb-0">
                            CEO at WEZEO
                        </p>
                    </div>
                    <figure class="mb-0 d-md-block d-none overflow-hidden">
                        <img src="../../assets/firm.png" class="d-block" alt="firm">
                    </figure>
                </div>
                <div class="carousel-item">
                    <div class="skoly card text-white">
                        <p class="fs-6 text-border">
                            Školy <strong>v OpenLabe</strong>
                        </p>
                        <h3 class="card-title my-0 my-xl-4">
                            Vďaka OpenLabu máme v škole špičkových odborníkov zo žilinského Siemens
                            Healthineers.
                        </h3>
                        <br>
                        <p class="mb-xl-5">
                            Venujú sa vybraným 20-tim študentom, ktorí pracujú v tímoch na čiastokových úlohách
                            a v spolupráci s týmito odborníkmi sa učia vyvíjať mobilné aplikácie. Vďaka ich
                            vedeniu, založenom na moderných metódach overených v praxi, žiaci spoločne dosahujú
                            výborné výsledky.
                        </p>
                        <p class="mb-0">
                            Milan Válek
                        </p>
                        <p class="mb-0">
                            Riaditeľ SPŠ IT, Kysucké Nové Mesto
                        </p>
                    </div>
                    <figure class="mb-0 d-md-block d-none overflow-hidden">
                        <img src="../../assets/join-schools.png" class="d-block" alt="schools">
                    </figure>
                </div>
                <div class="carousel-item">
                    <div class="studenti card text-white">
                        <p class="fs-6 text-border">
                            Študenti <strong>v OpenLabe</strong>
                        </p>
                        <h3 class="card-title my-0 my-xl-4">
                            GamesLab mi otvoril brány do sveta vývoja softvéru, technológií, ale aj osobného
                            rozvoja.
                        </h3>
                        <br>
                        <p class="mb-3 mb-xl-5">
                            Za podpory skvelých LabMastrov som neustále motivovaný pracovať na sebe, či už po
                            technologickej alebo soft-skills stránke.
                        </p>
                        <p class="mt-4 mt-xl-0 mb-0">
                            Viktor Nagy
                        </p>
                        <p class="mb-0">
                            GamesLab (SPŠE Hálova 16, Bratislava)
                        </p>
                    </div>
                    <figure class="mb-0 d-md-block d-none overflow-hidden">
                        <img src="../../assets/join-students.png" class="d-block" alt="students">
                    </figure>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name:'a-carousel-join'
    
}
</script>

<style scoped>
#slider-22 .carousel-item {
    width: 67%;
    left: 29%;
    transition: transform .4s ease-in-out;
}

#slider-22 .card:hover {
    box-shadow: none;
    cursor: default;
}

#slider-22 .carousel-item figure {
    height: 500px;
}

#slider-22 .carousel-item figure img { 
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 25px;
}

#slider-22 .labmastri {
    background: #A54FA2;
}

#slider-22 .firmy {
    background: #3597FF;
}

#slider-22 .skoly {
    background: #33A969;
}

#slider-22 .studenti {
    background: #F9A94A;
}

#slider-22 .card {
    position: absolute !important;
    left: -35%;
    top: -24%;
    border-radius: 10px;
    padding: 30px 20px;
}

#slider-22 .signature {
    width: 170px;
    height: auto;
    margin-bottom: -25px;
}

#slider-22 .carousel-indicators button.active, #slider-22 .carousel-indicators button:hover {
    background-color: #3597ff !important;
}

#slider-22 .carousel-indicators [data-bs-target] {
    width: 11px !important;
    height: 11px !important;
    border-radius: 50%;
    }

#join .round-disk {
    z-index: -1;
    width: 222px;
}

@media (max-width: 1400px) {
    #slider-44 div:nth-child(4) {
        top: 60px;
    }
}

@media (max-width: 1200px) {
    #slider-22 .card h3 {
        font-size: 20px;
    }

    #slider-22 .carousel-item figure {
        height: 400px;
    }
}

@media (max-width: 992px) {
   
    #slider-22 .carousel-indicators [data-bs-target] {
        bottom: -12px;
        position: relative;
    }
}

@media (max-width: 767.98px) {

    #slider-22 .carousel-item {
        width: 100%;
        left: 0;
    }

    #slider-22 .card {
        position: relative !important;
        left: 0;
        top: 0;
        width: 100%;
        height: 395px;
        border-radius: 0px;
    }

    #slider-22 .carousel-indicators {
        bottom: -50px;
    }

    #slider-22 .carousel-indicators [data-bs-target] {
        background-color: #3597FF;
    }

    #slider-44 .carousel-indicators {
        top: 96%;
    }

    #slider-44 div:nth-child(4) {
        top: 38px;
    }
}

@media (max-width: 575px) {

    #slider-22 .card {
        height: 370px;
    }
}

@media (min-width: 768px) {
    #slider-22 .carousel-inner {
        padding-top: 100px;
    }

    #slider-22 .card {
        padding: 30px 22px;
        max-width: 345px;
    }
}

@media (min-width: 992px) {
    #slider-22 .card {
        padding: 40px 32px;
        max-width: 380px;
    }
}

@media (min-width: 1200px) {
    #slider-22 .card {
        padding: 34px 28px;
        max-width: 595px;
    }

    #slider-22 .carousel-inner {
        padding-top: 120px;
    }
}

@media (min-width: 1600px) {
    #slider-22 {
        max-width: 1600px;
        margin-right: auto;
        margin-left: auto;
    }
}
</style>