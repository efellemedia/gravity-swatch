<template>
    <div class="content" :style="styles">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        data: function () {
            return {
                styles: {
                    marginLeft: '300px'
                }
            };
        },

        created() {
            this.$events.listen('toggle-sidebar', () => {
                if (this.styles.marginLeft == '300px') {
                    this.styles.marginLeft = '90px';
                } else {
                    this.styles.marginLeft = '300px';
                }
            });
        },
    }
</script>
