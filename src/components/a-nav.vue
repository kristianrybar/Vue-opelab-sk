<template>
    <nav class="navbar navbar-expand-lg bg-white">
        <div class="container">
            <a href="#" class="navbar-brand">
                <img src="../assets/openlab-logo.svg" alt="openlab-brand" width="120" height="28">
            </a>
            <button class="navbar-toggler border-0" type="button" data-bs-toggle="collapse" data-bs-target="#navMenuContent" aria-controls="navMenuContent" aria-expanded="true" aria-label="Toggle navigation">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
            </button>
            <div id="navMenuContent" class="navbar-collapse navbar-nav-scroll bg-white collapse">
                <ul class="navbar-nav ms-lg-5 ms-lg-5 mb-lg-0 me-lg-auto mb-lg-0">
                    <li class="nav-item me-lg-3">
                        <a href="#" class="nav-link">Úvod</a>
                    </li>
                    <li class="nav-item dropdown me-lg-3 d-lg-flex align-items-center">
                        <a href="#" class="nav-link pe-0" id="navbarDropdownMenuLink" role="button" data-bs-toggle="dropdown" aria-expanded="true">OpenLab</a>
                        <a class="nav-link dropdown-toggle d-inline d-none d-lg-block" href="#" id="openlabyDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="true"></a>
                        <ul class="dropdown-menu border-0 p-0 stay-open-mobile" aria-labelledby="openlabyDropdown" data-bs-popper="none">
                            <li class="mb-2 mb-lg-0 mt-2 mt-lg-0">
                                <a class="dropdown-item" href="#">HybridLab</a>
                            </li>
                            <li class="mb-2 mb-lg-0">
                                <a class="dropdown-item" href="#">GamesLab</a>
                            </li>
                            <li class="mb-2 mb-lg-1">
                                <a class="dropdown-item" href="#">AppsLab</a>
                            </li>
                        </ul>
                    </li>
                    <li class="nav-item me-lg-3">
                        <a href="#" class="nav-link">Pre učiteľov</a>
                    </li>
                    <li class="nav-item me-lg-3">
                        <a href="#" class="nav-link">Partneri</a>
                    </li>
                    <li class="nav-item me-lg-3">
                        <a href="#" class="nav-link">Moderná škola</a>
                    </li>
                </ul>
                <a href="#" class="d-none d-lg-block">
                    <button class="btn btn-primary">Pridajte sa k nám</button>
                </a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
   name: 'a-nav',
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

.nav-link {
    font-size: 14px; 
    font-weight: 500; 
    color: #1a232f ; 
}

.navbar-nav * {
    transition: all .2s ease !important;
}

.navbar .navbar-nav *:hover:not(.dropdown-item) {
    color: #3597ff !important;
}

.navbar .navbar-nav .dropdown:hover .dropdown-toggle:after, .navbar .navbar-nav .dropdown:focus .dropdown-toggle:after {
    border-color: #3597ff !important;
    transition: all .2s ease;
}

.nav-link:focus, .nav-link:hover {
    color: #3597ff !important;
}

.dropdown-item {
    font-weight: 500;
    font-size: 14px;
    transition: all .2s ease;
}

.navbar-nav {
    text-align: center;
}

.dropdown-toggle:after {
    border: solid #1a232f; 
    border-width: 0 2px 2px 0; 
    transform: rotate(45deg); 
    padding: 2px; 
    margin-left: 8px;
}

.dropdown-item:hover, .dropdown-item:focus {
    color: #3597ff !important;
    background-color: #fff;
}

.navbar-toggler:focus {
    text-decoration: none;
    outline: 0;
    box-shadow: none;
}

@media (min-width: 992px) {
    .navbar {
    height: 80px;
    }
}

@media (max-width: 992px) {
    .dropdown-menu {
    position: relative !important;
    top: -13px !important;
    left: 48% !important;
    margin-top: 2% !important;
    margin-bottom: -2% !important;
    }
}
</style>