<template>
    <li>
        <a
            :href="(hasChildren ? '#' : href)"
            :class="{ hover: hover }"
            @mouseover="hover = true"
            @mouseout="hover = false">
                <span class="sidebar-item-icon"><slot name="icon"></slot></span>
                <span class="sidebar-item-text"><slot name="text"></slot></span>
                <span class="sidebar-item-arrow" v-if="hasChildren" v-show="!sidebarCollapsed"></span>
        </a>

        <ul class="sidebar-item-children" v-if="hasChildren" v-show="!sidebarCollapsed">
            <slot name="children"></slot>
        </ul>
    </li>
</template>

<script>
    export default {
        props: ['href'],

        data: function () {
            return {
                hover: false,
                hasChildren: false,
                sidebarCollapsed: false
            }
        },

        mounted() {
            if (this.$slots['children'] != undefined) {
                this.hasChildren = true;
            }
        },

        created() {
            this.$events.listen('toggle-sidebar', () => {
                this.sidebarCollapsed = !this.sidebarCollapsed;
            });
        }
    }
</script>
