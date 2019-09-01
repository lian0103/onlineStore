<template>
    <h1 class="h1title">.Vue檔引入測試 {{hello}}</h1>
</template>

<script>
module.exports = {
    data: function() {
        return {
            hello:'hi~~'
        }
    },
}
</script>

<style>
    .h1title{
        color: red;
    }
</style>