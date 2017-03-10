<template>
    <div class="docs-section clearfix">
        <div class="page-header">
            <h1 id="icons">Icons</h1>
        </div>

        <div class="card card-block">
            <div class="form-group">
                <input type="search" name="search" class="form-control" placeholder="Search icons for..." v-model="query">
            </div>

            <div class="row">
                <div class="col-4 icon-preview" v-for="icon in filteredIcons">
                    <i class="icon icon-fw" :class="`icon-${icon}`"></i> {{ icon }}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import _ from 'lodash';

    export default {
        name: 'component-icons',

        data() {
            return {
                'query': '',
                'icons': [
                    'pencil', 'dashboard', 'form', 'atom', 'stack', 'search', 'picture', 'user-male', 'notepad', 'papers-lines', 'commenting', 'crm', 'faq', 'gallery', 'send', 'mail', 'folders', 'broadcast', 'horizontal-dots-circle', 'attention', 'bell', 'bin-full', 'bin', 'book', 'box-arrow-in', 'box-arrow-out', 'box-docs', 'box-dots', 'box-films', 'box', 'comment', 'comments', 'bullet-list-1', 'bullet-list-2', 'calendar-number', 'calendar', 'card-double-1', 'card-double-2', 'card-1', 'card-2', 'cases', 'case', 'circle-minus', 'circle-plus', 'clock-dot', 'clock-line', 'sliders-1', 'sliders-2', 'diamond', 'horizontal-dots', 'papers', 'envelopes', 'envelope', 'exclamation', 'eye', 'films', 'film-play', 'film', 'paperplane', 'folder-dots', 'folder-search', 'folder', 'gear-double', 'gear-1', 'gear-2', 'gift', 'graph-bar', 'graphy-pie-1', 'graph-pie-2', 'home', 'info', 'key-ring', 'lightning', 'list', 'lock-closed', 'lock-open', 'newspaper-pile', 'newspaper', 'none', 'note-pen', 'notebook', 'page', 'people', 'phone', 'phone-call', 'key', 'toolbox', 'screens-blank', 'search-minute', 'search-plus', 'paper-lines', 'paper', 'sheet-aligned', 'sheet-double', 'star-shield', 'stock-exchange', 'store', 'switches', 'tags', 'tag', 'wrench', 'user-female', 'check-circle', 'check', 'times', 'arrow-1', 'arrow-2', 'arrow-3', 'arrow-4', 'arrow-5', 'arrow-6', 'arrow-7', 'arrow-8', 'arrow-9', 'arrow-10', 'arrow-11', 'arrow-12', 'arrow-13', 'arrow-14', 'arrow-15', 'arrow-16', 'arrow-17', 'arrow-18', 'arrow-19', 'arrow-20', 'arrow-21', 'arrow-22', 'arrow-23', 'arrow-24', 'arrow-25', 'arrow-26', 'arrow-27', 'arrow-28', 'arrow-29', 'arrow-30', 'arrow-31', 'arrow-32', 'arrow-33', 'arrow-34', 'arrow-35', 'arrow-36', 'arrow-37', 'arrow-38', 'arrow-39', 'arrow-40', 'arrow-41', 'arrow-42', 'arrow-43', 'arrow-44', 'arrow-45', 'arrow-46', 'arrow-47', 'arrow-48', 'arrow-49', 'bag-1', 'bag-2', 'banknote-bitcoin-1', 'banknote-bitcoin-2', 'banknote-bitcoin-3', 'banknote-dollar-1', 'banknote-dollar-2', 'banknote-dollar-3', 'banknote-euro-1', 'banknote-euro-2', 'banknote-euro-3', 'bar-code1', 'bar-code2', 'bar-code3', 'basket-1', 'basket-3', 'basket-4', 'basket-5', 'basket-6', 'basket-7', 'basket-8', 'battery-1', 'battery-2', 'battery-3', 'battery-4', 'battery-5', 'battery-6', 'bitcoin-1', 'bitcoin-2', 'bone-1', 'bone-2', 'bookmark-1', 'bookmark-2', 'brokenheart-1', 'brokenheart-2', 'camera-1', 'camera-2', 'camera-3', 'camera-4', 'camera-5', 'cart-1', 'cart-2', 'cart-3', 'cart-4', 'cart-5', 'cart-6', 'cart-7', 'cash-register', 'cloud-1', 'cloud-2', 'cloud-3', 'connexion-1', 'connexion-2', 'creditcard-1', 'creditcard-2', 'directions-1', 'display-1', 'display-2', 'display-3', 'display-4', 'display-5', 'display-6', 'display-7', 'display-8', 'display-9', 'display-10', 'display-11', 'display-12', 'dollar-1', 'dollar-2', 'dotted-circle-1', 'dotted-circle-2', 'dotted-square-1', 'dotted-square-2', 'drawers-1', 'drawers-2', 'drawers-3', 'dribbble-circle', 'dribbble-square', 'dropbox-circle', 'dropbox-square', 'euro-1', 'euro-2', 'facebook-circle', 'facebook-square', 'flag-1', 'flag-2', 'floppydisk-1', 'floppydisk-2', 'googleplus-circle', 'googleplus-square', 'headphone-1', 'headphone-2', 'headphone-3', 'histogram-1', 'histogram-2', 'histogram-3', 'histogram-4', 'ice-bar', 'inbox-1', 'inbox-2', 'inbox-3', 'inbox-4', 'inbox-5', 'instagram-circle', 'instagram-square', 'keyboard-1', 'keyboard-2', 'keyboard-3', 'linkedin-circle', 'linkedin-square', 'location-1', 'location-2', 'location-3', 'location-4', 'location-5', 'location-6', 'loudspeaker-1', 'loudspeaker-2', 'loudspeaker-3', 'magician-hat', 'mail-2', 'medical-1', 'medical-2', 'medicine-1', 'medicine-2', 'micro-1', 'micro-2', 'movie-camera-1', 'movie-camera-2', 'movie-camera-3', 'movie-camera-4', 'music-1', 'music-2', 'music-3', 'music-4', 'pinterest-circle', 'pinterest-square', 'presentation-1', 'presentation-2', 'presentation-3', 'presentation-4', 'presentation-5', 'radio-1', 'radio-2', 'roadsign-1', 'roadsign-2', 'roadsign-3', 'screen-1', 'screen-2', 'screen-3', 'screen-4', 'screen-5', 'screen-6', 'shredder-1', 'shredder-2', 'target-1', 'target-2', 'target-3', 'ticket-1', 'ticket-2', 'ticket-3', 'ticket-4', 'ticket-5', 'tumblr-circle', 'tumblr-square', 'tv-1', 'tv-2', 'tv-3', 'twitter-circle', 'twitter-square', 'vial-1', 'vial-2', 'vial-3', 'vial-4', 'vimeo-circle', 'vimeo-square', 'volume-1', 'volume-2', 'volume-3', 'volume-4', 'volume-5', 'wallet-1', 'wallet-2', 'wallet-3', 'weather-1', 'weather-2', 'weather-3', 'weather-4', 'weather-5', 'weather-6', 'weather-7', 'weather-8', 'weather-9', 'weather-10', 'weather-11', 'weather-12', 'weather-13', 'weather-14', 'weather-15', 'weather-16', 'weather-17', 'weather-18', 'weather-19', 'weather-20', 'weather-21', 'weather-22', 'weather-23', 'weather-24', 'weather-25', 'weather-26', 'weather-27', 'weather-28', 'weather-29', 'weather-30', 'webpage-1', 'webpage-2', 'wifi-1', 'wifi-2', 'wifi-3', 'wifi-4', 'wordpress-circle', 'wordpress-square', 'world-1', 'world-2', 'world-3', 'world-4', 'world-5', 'yahoo-circle', 'yahoo-square', 'youtube-circle', 'youtube-square', 'ai', 'android', 'arobase', 'binoculars', 'bluetooth', 'board', 'bottle', 'calculator', 'circle', 'scissors', 'clip', 'code', 'coffee', 'eject', 'fastforward', 'finder', 'forward', 'game', 'gif', 'glass', 'google', 'graduation', 'hardrive', 'hierarchy', 'jpg', 'laptop', 'microsoft', 'mouse', 'network', 'off', 'os', 'pause', 'pdf', 'pinetree', 'play', 'player', 'png', 'printer', 'psd', 'record', 'rocket', 'safari', 'safe', 'servers', 'smartphone', 'tablet', 'tie', 'tiebow', 'turntable'
                ]
            }
        },

        computed: {
            filteredIcons: function() {
                var icons = this.search(this.icons, this.query);

                return this.sort(icons);
            }
        },

        methods: {
            search: function(collection, query) {
                return _.filter(collection, function(item) {
                    return _.includes(item, query);
                })
            },

            sort: function(collection) {
                return _.sortBy(collection, function(item) {
                    return _.lowerCase(item);
                });
            }
        }
    }
</script>
