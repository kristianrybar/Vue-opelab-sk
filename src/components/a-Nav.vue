<template>
    <nav class="navbar main-navbar navbar-expand-lg bg-white">
        <div class="container">
            <a href="#">
                <img src="../assets/openlab-logo.svg" alt="openlab-brand">
            </a>
            <button class="navbar-toggler border-0">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span> <!-- dropdown button -->
            </button>
            <div id="navMenuContent">
                <ul>
                    <li>
                        <a href="#">Úvod</a>
                    </li>
                    <li>
                        <a href="#">OpenLab</a>
                        <ul>
                            <li>
                                <a href="#">HybridLab</a>
                            </li>
                            <li>
                                <a href="#">GamesLab</a>
                            </li>
                            <li>
                                <a href="#">AppsLab</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#" > Pre učiteľov</a>
                    </li>
                    <li>
                        <a href="#">Partneri</a>
                    </li>
                    <li>
                        <a href="#">Moderná škola</a>
                    </li>
                </ul>
                <a href="#">
                    <button>Pridajte sa k nám</button>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
   name: 'a-Nav',
}
</script>

<style scoped>
.bar {
    display: block;
    width: 25px;
    height: 3px;
    margin: 5px auto;
    transition: all 0.2s ease-in-out;
    background-color: rgba(0, 0, 0, 0.7);
}

.navbar {
    font-size: 14px;
}
</style>