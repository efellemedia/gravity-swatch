<template>
    <li class="sidebar-item">
        <a
            :href="(hasChildren ? '#' : href)"
            @click.once="toggleChildren">
                <span class="sidebar-item-icon"><slot name="icon"></slot></span>
                <span class="sidebar-item-text"><slot name="text"></slot></span>
                <span class="sidebar-item-arrow" :class="{'open': showChildren}" v-if="hasChildren" v-show="!sidebarCollapsed"></span>
        </a>

        <ul class="sidebar-item-children" v-if="hasChildren" v-show="showChildren">
            <slot name="children"></slot>
        </ul>
    </li>
</template>

<script>
    export default {
        props: ['href'],

        data: function () {
            return {
                hasChildren: false,
                showChildren: false,
                sidebarCollapsed: false
            }
        },

        methods: {
            toggleChildren() {
                if (this.hasChildren) {
                    let showChildren = !this.showChildren;

                    this.$events.fire('toggle-sidebar-children');

                    this.showChildren = showChildren;
                }
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
                this.showChildren = false;
            });

            this.$events.listen('toggle-sidebar-children', () => {
                this.showChildren = false;
            });
        },

    }
</script>
