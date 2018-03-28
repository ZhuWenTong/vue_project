<template>
	<div id="wrap-anim">
		<div class="anim">
			<el-card>
				<div slot='header'>
					<span>过渡</span>
				</div>
				<div>
					<el-button @click='Fade'>{{show ? 'hide' : 'show'}}</el-button>
					<transition name='fade'>
						<div class="box" v-show='show'></div>
					</transition>
				</div>
			</el-card>
			<el-card>
				<div slot='header'>
					<span>动画</span>
				</div>
				<div>
					<el-button @click='keyframes'>{{ flag ? 'hide' : 'show'}}</el-button>
					<transition name='bounce'>
						<div class="box" v-show='flag'></div>
					</transition>
				</div>
			</el-card>
			<el-card>
				<div slot='header'>
					<span>animate.css-1</span>
				</div>
				<div>
					<el-button @click='animate'>{{isShow ? 'hide' : 'show'}}</el-button>
					<transition enter-active-class='animated flipInX' leave-active-class='animated flipOutY'>
						<div class="box" v-show='isShow'></div>
					</transition>
				</div>
			</el-card>
			<el-card>
				<div slot='header'>
					<span>animate.css-2</span>
				</div>
				<div>
					<el-button @click='animate2'>{{countryShow ? 'hide' : 'show'}}</el-button>
					<transition enter-active-class='animated zoomIn' leave-active-class='animated zoomOut'>
						<ul v-show='countryShow' >
							<li v-for='country in countries' :key='country.id'>
								<span>{{country.name}}</span>
							</li>
						</ul>
					</transition>
				</div>
			</el-card>
		</div>
	</div>
</template>
<script>
	import { mapState } from 'vuex';
	export default {
		data() {
			return {
				show: true,
				flag: true,
				isShow: true,
				countryShow: true
			}
		},
		methods: {
			Fade() {
				this.show = !this.show;
			},
			keyframes() {
				this.flag = !this.flag;
			},
			animate() {
				this.isShow = !this.isShow;
			},
			animate2() {
				this.countryShow = !this.countryShow;
			}
		},
		computed: {
			...mapState(['countries'])
		}
	}
</script>
<style lang='scss' scoped>
	@import '../../assets/common';
	#wrap-anim {
		width: 100%;
		.anim {
			width: 1600px;
			margin: 0 auto;
			@include flexes(row, flex-start, center);
			flex-wrap: wrap;
			.el-card {
				transition: all 0.2s;
				&:hover {
					box-shadow: 0 2px 12px 0 rgba(0, 0, 0, .3);
				}
				height: 250px;
				margin-right: 15px;
				.box {
					width: 100px;
					height: 100px;
					background: $yellow;
					margin-top: 10px;
					
				}
				&:nth-of-type(2) {
					.box {
						background: $green;
					}		
				}
				&:nth-of-type(3) {
					.box {
						background: $blue;
					}		
				}
				&:nth-of-type(4) {
					ul {
						margin-top: 10px;
					}		
				}
			}
		}
	}

	.fade-enter, .fade-leave-to {
		opacity: 0;
	}
	.fade-enter-active, .fade-leave-active {
		transition: all 1s;
	}
	.fade-enter-to, .fade-leave {
		opacity: 1;
	}

	.bounce-enter-active {
  		animation: bounce-in .5s;
	}
	.bounce-leave-active {
  		animation: bounce-in .5s reverse;
	}
	@keyframes bounce-in {
  		0% {
    		transform: scale(0);
  		}
  		50% {
    		transform: scale(1.5);
  		}
  		100% {
    		transform: scale(1);
  		}
	}

</style>