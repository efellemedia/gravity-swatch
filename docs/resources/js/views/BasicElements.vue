<template>
    <div class="col">
        <introduction></introduction>
        <navbars></navbars>
        <buttons></buttons>
        <typography></typography>
        <tables></tables>
        <forms></forms>
        <icons></icons>
    </div>
</template>

<script>
    import Introduction from '../components/Introduction.vue';
    import Navbars from '../components/Navbars.vue';
    import Buttons from '../components/Buttons.vue';
    import Forms from '../components/Forms.vue';
    import Typography from '../components/Typography.vue';
    import Tables from '../components/Tables.vue';
    import Icons from '../components/Icons.vue';

    export default {
        name: 'basic-elements',

        components: {
            'introduction': Introduction,
            'navbars': Navbars,
            'buttons': Buttons,
            'forms': Forms,
            'tables': Tables,
            'typography': Typography,
            'icons': Icons
        }
    }
</script>
