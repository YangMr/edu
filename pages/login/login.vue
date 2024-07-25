<template>
	<view class="app">
		
		<!-- 关闭图标 -->
		<text class="back-btn iconfont icon-close"></text>
		
		<!-- logo -->
		<view class="left-top-sign">LOGIN</view>
		<view class="welcome">欢迎回来!</view>
		
		<!-- 手机号登录表单 -->
		<view class="input-content">
			<!-- 手机号码 -->
			<view class="input-item">
				<text class="tit">手机号码</text>
				<view class="row">
					<input maxlength="11" v-model.trim="mobile" type="number" placeholder="请输入手机号码" placeholder-style="color: #909399" />
				</view>
			</view>
			
			<!-- 验证码 -->
			<view class="input-item">
				<text class="tit">验证码</text>
				<view class="row">
					<input v-model="code" type="number" maxlength="6" placeholder="请输入手机验证码"  placeholder-style="color: #909399"/>
					<!-- 倒计时按钮 -->
					<!-- 倒计时封装组件 -->
				</view>
			</view>
			
			<!-- 登录按钮 -->
			<button type="primary" :loading="loading" @click="handleLogin">登录</button>
			
			
			<!-- #ifdef MP-WEIXIN || APP-PLUS -->
			<view class="other-wrapper">
				<!-- 标题 -->
				<view class="center line">
					<text class="tit">社交账号登录</text>
				</view>
				<view class="row">
					<!-- 微信登录 -->
					<image class="icon" src="@/static/share/weixin.png" mode="widthFix"></image>
					<!-- qq登录 只在app端显示-->
					<image class="icon" src="@/static/share/qq.png" mode="widthFix"></image>
				</view>
			</view>
			<!-- #endif -->
		</view>
	</view>
</template>

<script setup>
import {ref} from "vue"
// 手机号码
const mobile = ref("")
// 验证码
const code = ref("")
// loading加载
const loading = ref(false)

// 登录方法
const handleLogin = async () => {
	loading.value = true
	
	try{
		
	}catch(e){
		console.log(e)
	}finally{
		loading.value = false
	}
}
</script>

<style lang="scss">
.app{
	display: flex;
	flex-direction: column;
	padding-top: 200rpx;
}

.back-btn{
	position: absolute;
	padding:20rpx;
	font-size:39rpx;
	color : #606266;
	left : 20rpx;
	/* #ifdef H5 */
	top : 20rpx;
	/* #endif */
	/* #ifdef MP-WEIXIN || APP-PLUS */
	top : calc(var(--status-bar-height) + 20rpx);
	/* #endif */
	
}
.left-top-sign{
	font-size: 120rpx;
	color : #f8f8f8;
}
.welcome{
	position: relative;
	top:-90rpx;
	font-size: 46rpx;
	padding-left:60rpx;
	color : #555;
	text-shadow: 1px 0px 1px rgba(0,0,0,0.3);
}
.input-content{
	padding:0 60rpx;
}
.input-item{
	background-color: #f8f6fc;
	margin-bottom: 50rpx;
	padding-left: 30rpx;
	border-radius: 4rpx;
	height: 120rpx;
	display: flex;
	flex-direction: column;
	justify-content: center;
	
	&:last-child{
		margin-bottom: 0;
	}
	
	.row{
		width: 100%;
	}
	
	.tit{
		font-size: 26rpx;
		color : #606266;
		height: 50rpx;
		line-height: 50rpx;
	}
	
	input{
		font-size:30rpx;
		height:60rpx;
		flex : 1;
		color : #303133;
	}
}

button[type="primary"]{
	background-color: $mxg-color-primary !important;
}

.other-wrapper{
	display: flex;
	flex-direction: column;
	align-items: center;
	padding-top: 20rpx;
	margin-top: 80rpx;
	
	
	.line{
		margin-bottom: 40rpx;
		// position: relative;
		text-align: center;

		// width: 100%;
		.tit{
			font-size: 24rpx;
			color : #606266;
			margin: 0 32rpx;;
		}
		
		text{
			&:before, &::after{
				content:  "";
				display: block;
				width: 160rpx;
				height:0;
				border-top:1px solid #e0e0e0;
				// position: absolute;
			}
			// &:before{
			// 	left : 0;
			// }
			// &:after{
			// 	right : 0;
			// }
		}
	}
	.icon{
		width: 80rpx;
		height:80rpx;
		margin: 0 50rpx;
	}
}
</style>
