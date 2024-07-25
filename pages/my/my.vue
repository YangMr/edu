<template>
	<view>
		我的
		
		<view @click="handleToLogin">请登录</view>
	</view>
</template>

<script setup>
// 跳转到登录页
const handleToLogin = () => {
	uni.navigateTo({
		url : "/pages/login/login"
	})
}
</script>

<style>

</style>
