<template>
    <div class="sidebar" :class="{ 'is-collapsed': collapsed }">
        <div class="sidebar-brand">
            <slot name="logo"></slot>
        </div>

        <ul class="nav nav-sidebar">
            <slot></slot>
        </ul>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                collapsed: false
            };
        },

        created() {
            this.$events.listen('toggle-sidebar', () => {
                this.collapsed = !this.collapsed;
            });
        }
    }
</script>
