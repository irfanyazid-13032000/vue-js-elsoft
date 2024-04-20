<script setup>
</script>

<template>
        <router-view></router-view>
</template>

<style>
  .container {
    width: 100%;
    margin-right: auto;
    margin-left: auto;
    padding-right: 15px;
    padding-left: 15px;
}

.row {
    display: flex;
    flex-wrap: wrap;
    margin-right: -15px;
    margin-left: -15px;
}

.col-md-12 {
    flex: 0 0 100%;
    max-width: 100%;
}

</style>
