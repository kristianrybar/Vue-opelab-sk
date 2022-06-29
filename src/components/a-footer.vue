<template>
    <footer class="py-5 overflow-hidden">
        <div class="container positon-relative" >
            <div class="row text-muted align-items-end">
                <div class="col-sm-3 col-lg-4 mb-3 mb-sm-0">
                    <a href="#" target="_blank">
                        <img src="../assets/openlab-logo.svg" alt="openlab-logo">
                    </a>
                    <p class="mt-2 mb-0">
                        © 2022 Všetky práva vyhradené <strong>OPENLAB, o.z.,</strong>
                    </p>
                </div>
                <div class="col-sm-3 col-lg-3 mb-3 mb-sm-0">
                    <p class="mb-0">
                        IČO: 50764675
                    </p>
                    <p class="mb-0">
                        Viedenská cesta 257, 805 01 Bratislava
                    </p>
                </div>
                <div class="col-sm-3 col-lg-2 mb-3 mb-sm-0">
                    <a class="text-muted" href="#">
                        info@openlab.sk 
                    </a>
                </div>
                <div class="col-sm-3 col-lg-3 d-flex socials">
                    <a href="#">
                        <img class="mx-2" src="../assets/facebook.svg" alt="facebook">
                    </a>
                    <a href="#">
                        <img class="mx-2" src="../assets/linkedin.svg" alt="linkedin">
                    </a>
                    <a href="#">
                        <img class="mx-2" src="../assets/instagram.svg" alt="instagram">
                    </a>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name:'a-footer'
}
</script>

<style>
footer * {
    font-size: 13px;
}

footer .socials img {
    max-height: 20px;
}

@media (min-width: 768px) {
footer .socials {
    justify-content: flex-end;
    }
}
</style>