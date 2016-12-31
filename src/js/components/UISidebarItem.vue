<template>
    <li>
        <a :href="href" :class="{ hover: hover }" @mouseover="hover = true" @mouseout="hover = false">
            <span class="sidebar-item-icon"><slot name="icon"></slot></span>
            <span class="sidebar-item-text"><slot name="text"></slot></span>
        </a>
    </li>
</template>

<script>
    export default {
        props: ['href'],

        data: function () {
            return {
                hover: false
            }
        }
    }
</script>
