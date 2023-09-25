<script setup>
import FooterComponent from '../../global/components/FooterComponent.vue';
import NavBar from '../../global/components/Nav-bar.vue';


</script>

<template>
    <NavBar/>
    <body>
        <h1>LOGIN</h1>
        <div class="login-form">
            <form>
                <div class="mb-3">
                    <label for="exampleInputEmail1" class="form-label">Email address</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp">
                </div>
                <div class="mb-3">
                    <label for="exampleInputPassword1" class="form-label">Password</label>
                    <input type="password" class="form-control" id="exampleInputPassword1">
                </div>
                
                <button type="submit" class="btn btn-danger">SIGN IN</button>
            </form>
            <div>
                <a href="">¿Olvidaste tu contraseña?</a>
                <a href="">Crea una cuenta</a>
            </div>
        </div>
    </body>
    
    <FooterComponent/>

</template>

<style scoped>
h1{
    text-align: center;
}
.login-form{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
.login-form div{
    display: flex;
    justify-content: center;
    flex-direction: column;
}
a{
    color: red;
}

</style>