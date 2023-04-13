<template>
    <div>
        {{ varvar }}
    </div>
</template>

<script setup lang='ts'>
import { ref, reactive } from 'vue'
const varvar = import.meta.env
</script>

<style>

</style>