<template>
    <div class="col">
        <introduction></introduction>
        <navbars></navbars>
        <buttons></buttons>
        <typography></typography>
        <tables></tables>
        <forms></forms>
        <navs></navs>
        <indicators></indicators>
        <progress-bars></progress-bars>
        <containers></containers>
        <dialogs></dialogs>
        <icons></icons>
    </div>
</template>

<script>
    import Buttons from '../components/Buttons.vue';
    import Containers from '../components/Containers.vue';
    import Dialogs from '../components/Dialogs.vue';
    import Forms from '../components/Forms.vue';
    import Icons from '../components/Icons.vue';
    import Indicators from '../components/Indicators.vue';
    import Introduction from '../components/Introduction.vue';
    import Navbars from '../components/Navbars.vue';
    import Navs from '../components/Navs.vue';
    import ProgressBars from '../components/ProgressBars.vue';
    import Tables from '../components/Tables.vue';
    import Typography from '../components/Typography.vue';

    export default {
        name: 'basic-elements',

        components: {
            'buttons': Buttons,
            'containers': Containers,
            'dialogs': Dialogs,
            'forms': Forms,
            'icons': Icons,
            'indicators': Indicators,
            'introduction': Introduction,
            'navbars': Navbars,
            'navs': Navs,
            'progress-bars': ProgressBars,
            'tables': Tables,
            'typography': Typography
        }
    }
</script>
