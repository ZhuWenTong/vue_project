<template>
  	<div id="app">
		<div class="main">
			<div id="wrap-nav">
				<nav>
					<router-link to="/home">首页</router-link>
					<router-link to="/user">用户</router-link>
					<router-link to="/news">路由传参</router-link>
					<router-link to="/template">组件通信</router-link>
					<router-link to="/animate">动画</router-link>
					<router-link to="/vuex">VUEX</router-link>
					<router-link :to="{name: 'bug'}">BUG</router-link>
				</nav>
			</div>
			<router-view></router-view>
		</div>
  	</div>
</template>

<script>
export default {
  	// watch: {
	  //   $route() {
	  //       console.log(this.$route)
	  //   }
   //  }
};
</script>

<style lang="scss" >
	@import './assets/common';
	* {
		margin: 0;
		padding: 0;
	}
	ul, ul li {
	    list-style: none;
	}
	a {
	    text-decoration: none;
	}
	#wrap-nav {
		width: 100%;
		background: $main-color;
		position: fixed;
		top: 0;
		z-index: 100;
		nav {
			width: 1600px;
			margin: 0 auto;
			@include flexes(row, flex-start, center);
			a {
				display: inline-block;
				width: 100px;
				text-align: center;
				line-height: $li-height;
				color: $white;
				transition: all 0.5s;
				&:hover {
					background: $general-color; 
				}
			}
			.active {
				background: $general-color;
			}
		}
	}
	
</style>
