<template>
    <section id="newsLetter" class="py-4 py-md-5">
        <div class="container px-3 px-lg-5 mb-5 py-5 py-md-3 p-lg-5">
            <div class="row">
                <div class="col-md ps-xl-5 mb-3 mb-md-0">
                    <h5>
                        <span class="fw-normal">Prihláste sa do nášho newslettra a budete mať</span>
                        <br>
                        <strong>čerstvé informácie o živote v OpenLabe.</strong>
                    </h5>
                </div>
                <div class="col-md mt-3 mt-md-0">
                    <form class="form-floating">
                        <input type="email" class="form-control" id="floatingInputValue" placeholder="name@example.com" value="Sem napíš svoj e-mail.">
                        <img class="position-absolute" src="../../assets/send.svg" alt="send" width="30">
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<script>
export default {
    name:'a-newsletter'
}
</script>

<style scoped>
#newsLetter .container {
    border-radius: 12px;
    background-color: #d7eaff !important;
}

.form-floating > .form-control:not(:placeholder-shown) {
    padding-top: 0.625rem;
    padding-bottom: 0.625rem;
    font-size: 17px;
    letter-spacing: 0.5px;
}

#newsLetter .form-floating img {
    cursor: pointer;
    right: 3%;
    top: 50%;
    transform: translate(-50%, -50%)!important;
}
</style>