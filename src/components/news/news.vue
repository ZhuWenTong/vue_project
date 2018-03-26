<template>
	<div id="wrap-news">
		<div class="news">
			<ul>
				<li v-for='item in items'>
					<router-link :to="{name: 'newsdetails', params: {id: item.id}}">{{item.p}}</router-link>
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
			
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../assets/common';
	#wrap-news {
		width: 100%;
		.news {
			width: 1600px;
			margin: 0 auto;
		}
	}
	li {
		@include flexes(row, flex-start, center);
		height: $li-height;
	}
</style>