<template>
    <div id="page-preloader" v-if="!pageLoaded"></div>
</template>

<script>
    export default {
        data: function () {
            return {
                pageLoaded: false
            }
        },

        mounted() {
            this.pageLoaded = true;
        }
    }
</script>
