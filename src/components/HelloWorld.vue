<template>
	<div class="cntainer">
		<h3>欢迎来玩数独游戏</h3>
		<div class="sudoku_wrapper">
				<div class="row" v-for="row in martix">
					<span class="column cell" v-for="cell in row">{{cell}}</span>
				</div>
		</div>	
	</div>
</template>

<script>
export default {
	name: 'sudoku',
	data () {
		return {
			msg: '欢迎来玩数独游戏',
			martix : []
		}
	},

	created(){
		this.martix = Array.apply(null,{length:9})
			.map((v,i)=>Array.apply(null,{length:9})
			.map((v,i)=>i+1));
		
	}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.sudoku_wrapper{
	display: inline-flex;
	flex-direction: column;
	border-left: 1px solid rgb(158, 158, 158);
	border-top: 1px solid rgb(158, 158, 158);
	/*border-top:0;*/
}

.row {
    display: flex;
}


.row:nth-child(3) span.column.cell  {
    border-bottom:2px solid rgb(158, 158, 158);
}
.row:nth-child(6) span.column.cell  {
    border-bottom:2px solid rgb(158, 158, 158);
}
span.column.cell {
    display: flex;
    width: 2rem;
    height: 2rem;
    justify-content: center;
    align-items: center;
    border-right:1px solid rgb(158, 158, 158);
    border-bottom: 1px solid rgb(158, 158, 158);
}

span.column.cell:nth-child(3) {
    border-right:2px solid rgb(158, 158, 158);
}

span.column.cell:nth-child(6) {
    border-right:2px solid rgb(158, 158, 158);
}


</style>
