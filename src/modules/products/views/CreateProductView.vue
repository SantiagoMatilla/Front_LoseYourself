<script setup>
import FooterComponent from '../../global/components/FooterComponent.vue';
import NavBar from '../../global/components/Nav-bar.vue';


</script>

<template>
    <NavBar/>
    <h1>Crear Productos</h1>
    <form>
        <div class="mb-3">
            <label for="input-product-name" class="form-label">Nombre del Producto</label>
            <input type="text" class="form-control" id="input-product-name">
        </div>
        <div class="mb-3">
            <label for="input-precio" class="form-label">Precio</label>
            <input type="text" class="form-control" id="input-precio">
        </div>
        <div class="input-group mb-1">
            <label for="input-select-image" class="form-label">Seleccione una imagen</label>
        </div>
        <div class="input-group mb-3">
            <input type="file" class="form-control" id="input-select-image">
        </div>


        <button type="submit" class="btn btn-primary">Submit</button>
    </form>

    
    <FooterComponent/>

</template>

<style>

</style>