<template>
	<div class="btn-group">
		<button @click ='genetator'>生成</button>
		<button>开始</button>
		<button>重置</button>
		<button>清空</button>
	</div>
</template>

<script>
	export default {
		name:'opreation',
		data(){return {}},
		methods:{
			genetator(){
				this.$emit('generateSudoku');
			}
		}
	}
</script>


<style scoped>
.btn-group{
	display: flex;
	margin: 1rem auto;
    width: 300px;
}

button {
	flex-grow: 2;
    flex-shrink: 22;
    margin: .4rem .6rem
}

</style>