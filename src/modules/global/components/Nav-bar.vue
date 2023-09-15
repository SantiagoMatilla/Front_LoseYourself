<script setup>
    
</script>

<template>
    <header id="header">

        <div class="logoAndSearcher">
            <div id="logo">
                <h1>LOSE_YOURSELF</h1>
            </div>
            <div class="searcherAndCart">
                <h4>buscador</h4>
                <h4>carrito</h4>
            </div>
        </div>
            
        <div class="menuAndProfile">
            <div>
                <ul class="menuList">
                    <li class="menuItem"><a href="#">INICIO</a></li>
                    <li class="menuItem"><a href="#">PRODUCTOS</a></li>
                    <li class="menuItem"><a href="#">MÚSICA</a></li>
                    <li class="menuItem"><a href="#">DISEÑOS</a></li>
                </ul>
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
.menuList li{
    padding: 1em;
    color: white;
}
a{
    color: white;
    text-decoration: none;
}
/* .nav-menu {
background-color: white;
} 
.nav-content {
display: flex;
justify-content: space-between;
padding: 10px 30px;
align-items: center;
}
.nav-items {
display: flex;
justify-content: center;
align-items: center;
list-style: none;
margin: 0;
padding: 0;li {
    padding: 0 10px;
    }
}
i {
display: none;
}
/*  Mobile version - hidden hamburger menu
@media screen and (max-width: 768px) {
    .nav-menu {
        padding-top: 10px;
        position: absolute;
        width: 100%;
    }
    .open-menu {
        opacity: 1;
        height: 150px;
    }
    .closed-menu {
        opacity: 0;
        height: 0;
        padding: 0;
    }
    .nav-content {
        flex-direction: column;
        z-index: 100;
        position: relative;
        transition: all 0.2s ease-out;
    }
    .nav-items {
        flex-direction: column;
    }
    i {
    display: block;
    text-align: right;
    padding: 0 10px 10px 0;
    }
} */
</style>