<script setup>
    
</script>

<template>
    <header id="header">

        <div class="logoAndSearcher">
            <div id="logo">
                <img alt="Vue logo" class="logo" src="@/assets/image/Lose_Yourself-Logo-Fondo-Transparente.svg"/>
                <!-- <h1>LOSE_YOURSELF</h1> -->
            </div>
            <div class="searcherAndCart">
                <h4>buscador</h4>
                <h4>carrito</h4>
            </div>
        </div>
            
        <div class="menuAndProfile">
            <div class="menuList">
                <nav class="navbar navbar-expand-lg ">
                    <div class="container-fluid">
                        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" 
                            data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" 
                            aria-label="Toggle navigation">
                                <span class="navbar-toggler-icon"></span>
                        </button>

                        <div class="collapse navbar-collapse" id="navbarNav">
                            <ul class="navbar-nav">
                                <li class="nav-item">
                                    <a class="nav-link" aria-current="page" href="#">HOME</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">PRODUCTOS</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">MÚSICA</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link" href="#">DISEÑOS</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </nav>
            </div>

            <div class="profile">
                <h4>PERFIL</h4>
                <h4>imagenPerfil</h4>
            </div>
        </div>

    </header>
        
            
</template>

<style scoped>

#header{
    width: 100%;
    background-color: black;
    color: white;
    display: flex;
    flex-direction: column;
    padding-top: 1em;
}
.logoAndSearcher, .menuAndProfile{
    justify-content: space-between;
    /* border: 2px solid greenyellow; */
}
.logoAndSearcher, .searcherAndCart, .menuAndProfile, .profile{
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding-left: 0px;
}
.searcherAndCart, .profile{
    padding-right: 1em;
    padding-top: 2em;
}
.navbar-toggler{
    background-color: rgb(223, 223, 223);
    color: black;
}
.menuList{
    list-style: none;
    display: flex;
    flex-direction: row;
    margin: 0px;
    padding: 1em;
}
#logo{
    padding: 1em;
}
#navbarNav{
    background-color: white;
    border-radius: 5px;
    /* border: solid 1px green; */
}
.navbar-nav{
    display: flex;
    justify-content: space-between;
    padding: 1em;
}
.menuList li{
    padding: 1em;
    background-color: rgb(223, 223, 223);
    color: black;
    /* border: solid 1px red; */
    padding: 0%;
}
.nav-link{
    padding-left: 1em;
}

</style>