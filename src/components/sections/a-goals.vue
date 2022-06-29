<template>
    <section id="goals" class="py-4 py-md-5">
            <div class="container py-4">
                <div class="row align-items-center">
                    <div class="vision-box col-xl-6 col-lg-5 mb-3 mb-md-5 mb-lg-0">
                        <h1 class="text-start mb-5">
                            Naša vízia v <strong>OpenLabe</strong>
                        </h1>
                        <p class="text-dark">
                            Veríme, že otvorený prístup a kvalitné vzdelanie sú základom úspechu jednotlivca ako aj
                            prosperujúcej spoločnosti.
                        </p>
                        <p class="text-dark">
                            Uvedomujeme si, že ak chceme niečo zmeniť, musíme ísť príkladom. Našim cieľom je rozšíriť
                            princípy OpenLab-u na všetkých úrovniach škôl a nastaviť svetový štandard vzdelávania v
                            školstve v technológiách.
                        </p>
                    </div>
                    <ul class="col-xl-6 col-lg-7 d-flex flex-wrap justify-content-lg-end justify-content-center px-1 px-md-2">
                        <li class="box d-flex flex-column justify-content-center align-items-center m-2">
                            <p> <strong>11</strong></p>
                            <p> <strong>tried</strong></p>
                        </li>
                        <li class="box d-flex flex-column justify-content-center align-items-center m-2">
                            <p><strong>222</strong></p>
                            <p><strong>študentov</strong></p>
                        </li>
                        <li class="box d-flex flex-column justify-content-center align-items-center m-2">
                            <p><strong>14</strong></p>
                            <p><strong>labmastrov</strong></p>
                        </li>
                        <li class="box d-flex flex-column justify-content-center align-items-center m-2">
                            <p><strong>2</strong></p>
                            <p><strong>školy</strong></p>
                        </li>
                    </ul>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name: 'a-goals'
}
</script>

<style scoped>
#goals ul, li {
    margin: 0;
    list-style: none;
}

#goals .box p:nth-child(1) {
    font-size: 80px;
    margin-bottom: 0 !important;
}

#goals .box {
    width: 240px;
    height: auto;
    border-radius: 5px;
}

#goals .box p:nth-child(2) {
    font-size: 20px;
}

#goals .box:nth-child(1) {
    color: #dbca68;
    background-color: rgba(238, 226, 156, 0.45);
}

#goals .box:nth-child(2) {
    color: #b95e73;
    background-color: rgba(238, 156, 156, 0.45);
}

#goals .box:nth-child(3) {
    color: #5cc19a;
    background-color: rgba(156, 238, 204, 0.45);
}

#goals .box:nth-child(4) {
    color: #5b94d7;
    background-color: rgba(221, 236, 251, 0.45);
}

@media (max-width: 1199.98px) {
    #goals .box {
        width: 220px;
    }
}
</style>
