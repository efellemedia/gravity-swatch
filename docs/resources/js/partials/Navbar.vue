<template>
    <nav class="navbar navbar-toggleable-md fixed-top navbar-inverse bg-inverse">
        <div class="container">
            <div class="navbar-header">
                <router-link to="/" class="navbar-brand">Gravity Swatch</router-link>
            </div>
            
            <nav class="collapse navbar-collapse" id="header">
                <ul class="nav navbar-nav">
                    <li><router-link to="/getting-started" class="nav-link">Getting Started</router-link></li>
                </ul>
            </nav>
        </div>
    </nav>
</template>

<script>
    export default {
        name: 'navbar'
    }
</script>
