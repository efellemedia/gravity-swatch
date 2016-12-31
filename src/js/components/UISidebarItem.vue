<template>
    <li>
        <a :href="href">
            <span><slot name="icon"></slot></span>
            <slot name="text"></slot>
        </a>
    </li>
</template>

<script>
    export default {
        props: ['href']
    }
</script>
