<template>
    <h4>A=>{{ route.query.name }}</h4>
</template>

<script setup lang='ts'>
    import {ref,reactive} from 'vue'
    import {useRoute} from 'vue-router'
    const route = useRoute()

</script>

<style>

</style>