<template>
    <div class="container-fluid">
    	<app-header></app-header>
		<router-view></router-view>
    </div>
</template>

<script>
	import Header from './components/Header.vue'

    export default {
    	components: {
    		appHeader: Header
    	},
    	// perintah yang di jalankan ketika file di render
    	created(){
    		this.$store.dispatch('initStock');
    	}
    };
</script>

<style>

</style>
