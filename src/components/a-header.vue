<template>
    <header class="bg-white d-none d-lg-block">
        <div class="container d-flex justify-content-center align-items-center border-bottom">
            <span>Ak máš záujem študovať spolu s nami, sme tu pre teba…</span>
            <a  href="#">
                 OPENLAB COMMUNITY&nbsp; 
                <img src="../assets/discord.svg" alt="discord">
            </a>
        </div>
    </header>
</template>

<script>
export default {
    name:'a-header'
}
</script>

<style scoped>
header {
    font-size: 13px;
    color: #1a232f;
    letter-spacing: 0.5px !important;
}
header .border-bottom {
    height: 50px;
    border-bottom: 1px solid #d7eaff !important;
}

header span {
    margin-right: 50px;
}

header a:hover {
    color: rgb(25, 25, 27);
}

header a {
    font-size: 12px;
    padding: 8px 12px; 
    text-decoration: none;
    color: rgb(151, 159, 172);
    background-color: rgba(152, 156, 162, 0.15);
    border-color: rgba(99, 104, 112, 0.15);
    border-radius: 40px;
    transition: all .2s ease;
    font-weight: 500;
    display: flex;
}
</style>