<template>
    <section id="support" class="py-4 py-md-5">
            <div class="container py-4">
                <div class="row justify-content-center">
                    <div class="col-12 text center"> 
                        <h1 class="mb-5 text-center">
                            Ďakujeme za podporu v roku 2021!
                        </h1>
                    </div> 
                    <div class="col-12 support mt-md-4">
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support1.svg" alt="support">
                        </figure >
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support2.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support3.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support4.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support5.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support6.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support7.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support8.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support9.svg" alt="support">
                        </figure>
                        <figure class="mx-2 d-flex align-items-center justify-content-center my-3 my-md-0">
                            <img src="../../assets/support10.svg" alt="support">
                        </figure>
                    </div>
                </div>
            </div>
        </section>
</template>

<script>
export default {
    name:'a-support'
}
</script>

<style>
#support .support {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
}

@media (max-width: 767.98px) {
    #support .support {
        grid-template-columns: repeat(2, 1fr);
    }
}
</style>