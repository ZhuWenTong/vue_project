<template>
	<div class="news">
		<ul>
			<li v-for='item in items' :key='item.id' @click='toNewsDetails(item.id)'>
				<!-- <router-link :to="{name: 'newsdetails', params: {id: item.id}}">{{item.p}}</router-link> -->
				<p>{{item.p}}</p>
			</li>
		</ul>
		<router-view></router-view>
	</div>
</template>
<script>
	export default {
		data() {
			return {
				items: [
					{
						p: '新闻1',
						id: '1'
					},
					{
						p: '新闻2',
						id: '2'
					},
					{
						p: '新闻3',
						id: '3'
					}
				]
			}
		},
		methods: {
			toNewsDetails (id) {
				this.$router.push({
					name: 'newsdetails',
					params: {
						id,
						callbackName: 'callback',
						callback: res => {
							console.log('获取到页面返回的数据', res)
						}
					}
				})
			}
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../assets/common';
	.news {
		width: 1600px;
		margin: 0 auto;
	}
	li {
		@include flexes(row, flex-start, center);
		height: $li-height;
		cursor: pointer;
	}
</style>
