<template>
    <i class="fa fa-bars fa-fw toggle-sidebar" @click="toggle()" style="cursor: pointer;"></i>
</template>

<script>
    export default {
        methods: {
            toggle() {
                this.$events.fire('toggle-sidebar');
            }
        }
    }
</script>
