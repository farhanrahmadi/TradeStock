<template>
	<div class="col-md-4">
		<div class="panel panel-default">
			<div class="panel-heading">
				<h3 class="panel-title">{{stock.things}} <small class="pull-right">price (Rp.{{stock.price}})</small></h3>
			</div>
			<div class="panel-body">
				<div class="row" style="padding: 5px;">
				<input type="number" v-model="quantity" class="pull-left form-control" placeholder="Input quantity the things">
				</div>
				<button class="btn btn-success pull-right" :disabled="quantity <= 0" @click.prevent="buyStock">Buy</button>
			</div>
		</div>
	</div>
</template>
<script>
	export default{
		props:['stock'],
		data(){
			return {
				quantity: 0
			}
		},
		methods: {
			buyStock(){
				const order = {
					stockId: this.stock.id,
					stockPrice: this.stock.price,
					quantity: this.quantity
				};
				this.quantity = 0;
			}
		}
	}
</script>