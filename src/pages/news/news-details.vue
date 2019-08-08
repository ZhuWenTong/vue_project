<template>
	<div id="wrap-details">
		<div class="details">
			<p>{{con}}</p>
			<ul>
				<li v-for='item in items' :key='item.aid' @click='handleTo(item.aid)'>
					{{item.area}}
					<!-- <router-link :to="{name: 'area', params: {aid: item.aid}}">{{item.area}}</router-link> -->
				</li>
			</ul>
			<el-button type="primary" @click="back">页面返回传参</el-button>
			<router-view :key='activeDate'></router-view>
		</div>
	</div>
</template>
<script>
	export default {
		data () {
			return {
				con: '',
				items: [{
					area: 'A',
					aid: 'a'
				}, {
					area: 'B',
					aid: 'b'
				}],
				activeDate: ''
			}
		},
		mounted () {
			let id = this.$route.params.id
			// console.log(id)
			this.con = `这是新闻${id}`
			
		},
		methods: {
			// goArea(aid) {
			// 	this.$router.push({name:'area', params: {aid: aid}})
			// }
			handleTo (aid) {
				this.activeDate = aid
				this.$router.push({name:'area', params: {aid: aid}})
			},
			back () {
				let params = this.$route.params
				// console.log(params)
				let obj = {
					id: '1'
				}
				params['callbackName'] && params[params['callbackName']](obj)
				this.$router.back()
			}
		}
	}
</script>
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
