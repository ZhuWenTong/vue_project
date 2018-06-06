<style lang='scss' scoped>
	@import '../../assets/common';
	#wrap-details {
		width: 100%;
		.details {
			width: 1600px;
			margin: 0 auto;
		}
	}
	p {
		color: $blue;
		line-height: $span-height;
		font-size: $size + 10px;
	}
	.active {
		color: #f56c6c;
	}
</style>
<template>
	<div id="wrap-details">
		<div class="details">
			<p>{{con}}</p>
			<ul>
				<li v-for='item in items'>
					<router-link :to="{name: 'area', params: {aid: item.aid}}">{{item.area}}</router-link>
				</li>
			</ul>
			<router-view></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				con: '',
				items: [{
					area: 'A',
					aid: 'a'
				}, {
					area: 'B',
					aid: 'b'
				}]
			}
		},
		mounted() {
			let id = this.$route.params.id;
			console.log(id)
			this.con = `这是新闻${id}`;
		},
		methods: {
			// goArea(aid) {
			// 	this.$router.push({name:'area', params: {aid: aid}})
			// }
		}
	}
</script>
