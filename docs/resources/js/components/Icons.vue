<template>
    <div class="docs-section clearfix">
        <div class="page-header">
            <h1 id="icons">Icons</h1>
        </div>

        <div class="card card-block">
            <div class="form-group">
                <input type="search" name="search" class="form-control" placeholder="Search icons for..." v-model="query">
            </div>
            
            <br>

            <div class="row">
                <div class="col-12">
                    <h4>Solid</h4>
                </div>
            </div>
            
            <div class="row">
                <div class="col-3 icon-preview" v-for="icon in filteredIcons">
                    <i class="fas" :class="`fa-${icon}`"></i> {{ icon }}
                </div>
            </div>
            
            <br>
            
            <div class="row">
                <div class="col-12">
                    <h4>Regular</h4>
                </div>
            </div>
            
            <div class="row">
                <div class="col-3 icon-preview" v-for="icon in filteredIcons">
                    <i class="far" :class="`fa-${icon}`"></i> {{ icon }}
                </div>
            </div>
            
            <br>
            
            <div class="row">
                <div class="col-12">
                    <h4>Light</h4>
                </div>
            </div>
            
            <div class="row">
                <div class="col-3 icon-preview" v-for="icon in filteredIcons">
                    <i class="fal" :class="`fa-${icon}`"></i> {{ icon }}
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
                    'alarm-clock', 'align-center', 'align-justify', 'align-left', 'align-right',
                    'angle-double-down', 'angle-double-left', 'angle-double-right', 'angle-double-up', 'angle-down',
                    'angle-left', 'angle-right', 'angle-up', 'arrow-alt-circle-down', 'arrow-alt-circle-left',
                    'arrow-alt-circle-right', 'arrow-alt-circle-up'
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
