<style lang='scss' scoped>
	@import '../../../assets/common.scss';
	.content {
		@include flexes(row, space-between, center);
		.btn {
			color: $blue;
		}
		.delcountry {
			max-width: 50%;
		}
	}
</style>
<template>
	<div>
		<el-card>
			<div slot='header'>
				<span>通过...mapActions改变store状态(点击添加)</span>
			</div>
			<div class="content">
				<ul>
					<li>data中的country数据</li>
					<li v-for='country in countryData' :key='country.id' class="btn">
						<el-button type='primary' @click='addCountry(country.id)'>{{country.name}}</el-button>
					</li>
				</ul>
				<div class="delcountry">
					<p>store中countries数据</p>
					<delCountryStore></delCountryStore>
				</div>
			</div>
		</el-card>
	</div>
</template>
<script>
	import { mapState, mapActions } from 'vuex';
	import delCountryStore from '../children/delCountryStore.vue';
	export default {
		data() {
			return {
				countryData: [{
					id: 1,
					name: 'CHINA'
				}, {
					id: 2,
					name: 'JAPAN'
				}, {
					id: 3,
					name: 'KOREA'
				}]
			}
		},
		methods: {
			...mapActions(['COUNTRIES']),
			addCountry(id) {
				//console.log(id, this.countries);
				let add_country = null;
				this.countryData.map((i) => {
					if(i.id == id) {
						add_country = i;
					}
				});
				if(JSON.stringify(this.countries).indexOf(JSON.stringify(add_country)) == -1) {
					this.COUNTRIES({add_country, type: 'add'});
				} else {
					this.$notify({
				        title: '警告',
				        message: `There is only one ${add_country.name} in the world`,
				        type: 'warning'
			        });
				}
				
			}
		},
		computed: {
			...mapState(['countries'])
		},
		components: {
			delCountryStore
		}
	}
</script>
