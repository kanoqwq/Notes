<template>
    <div>
        <router-view></router-view>
        <h2>footer</h2>
        <p><router-link to="/reg/1">reg</router-link></p>
        <p><router-link to="/">login</router-link></p>
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'

</script>

<style></style>
