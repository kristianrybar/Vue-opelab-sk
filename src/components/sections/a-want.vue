<template>
    <section id="want" class="bg-primary-lighter pt-5 mb-4 mb-md-5">
            <div class="container pt-lg-5">
                <div class="row">
                    <div class="col-lg-6 col-xl-5 mb-5">
                        <h1 class="pb-4 mb-0">
                            <strong> Chceš ísť študovať odbor</strong>
                            <br>
                            kompletne zameraný na&nbsp;IT?
                        </h1>
                        <h5 class="mt-5 mb-3 position-relative"> 
                            <span class="field-study-code">2573M</span>
                            <strong>Programovanie digitálnych technológií</strong>
                        </h5>
                        <p class="text-muted mb-5">
                            Čaká ťa tvorba aplikácií a hier, inovatívne myslenie, práca na reálnych projektoch. To
                            všetko v spolupráci s tech odborníkmi z praxe, ktorí budú študentov a študentky na ich ceste
                            sprevádzať a podporovať.
                            <br>
                            Staň sa súčasťou tohto inovatívneho študijného programu aj ty!
                        </p>
                        <a class="btn btn-primary" href="#" target="_blank">
                            <strong>Chcem vedieť viac</strong>
                        </a>
                    </div>
                    <div class="col-lg-6 col-xl-7 d-none d-lg-flex align-items-end z-index-1">
                        <img src="../../assets/students.png" alt="students">
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name:'a-want'
}
</script>

<style>
    .bg-primary-lighter {
    background-color: #ebf6ff;
}


.field-study-code {
    position: absolute;
    font-size: 62px;
    color: rgba(185, 196, 207, 0.3);
    z-index: 0;
    top: -53px;
}

#want .btn {
    padding: 16px 26px;
    letter-spacing: 0.5px;
    font-size: 16px;
}
</style>