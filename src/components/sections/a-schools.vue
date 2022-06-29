<template>
    <section id="schools" class="position-relative py-4">
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-12 mb-md-3">
                        <h1 class="text-start text-md-center mb-5">
                            <strong>Nachádzame sa</strong> na dvoch školách
                        </h1>
                    </div>
                    <div class="col-lg-5 me-lg-5 mb-4 mb-md-0">
                        <div class="card border-0">
                            <img src="../../assets/school1.png" alt="place">
                            <div class="card-body px-0 pt-4">
                                <h6 class="card-adress text-muted mb-0">
                                    Hálova 16, Bratislava
                                </h6>
                                <h5 class="card-title d-flex flex-column flex-md-row justify-content-between align-items-md-end mt-3">
                                    Stredná Priemyselná Škola Elektrotechnická
                                    <a class="fs-6 text-decoration-none text-primary mt-4 mt-md-0" href="#" target="_blank">
                                        www.spsehalova.sk
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                    <div class="col-lg-5 me-lg-5 mb-4 mb-md-0">
                        <div class="card border-0 bg-transparent">
                            <img src="../../assets/school2.png" alt="place">
                            <div class="card-body px-0 pt-4">
                                <h6 class="card-adress text-muted mb-0">
                                    Nábrežná 1325, Kysucké Nové Mesto
                                </h6>
                                <h5 class="card-title d-flex flex-column flex-md-row justify-content-between align-items-md-end mt-3"> 
                                    <strong>Stredná Priemyselná Škola Informačných Technológií</strong>
                                    <a class="fs-6 z-index-1 text-decoration-none text-primary mt-4 mt-md-0" href="#" target="_blank">
                                        www.spsehalova.sk
                                    </a>
                                </h5>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="d-none d-lg-block round-disk">
                <img src="../../assets/p_letter.png" alt="round-disk" >
            </div>
        </section>
</template>

<script>
export default {
    name:'a-schools'
}
</script>

<style scoped>
#schools .card-title a {
    z-index: 1;
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
</style>