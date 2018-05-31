<template>
	<div>
		<h3></h3>
		<div class="sudoku_wrapper">
			<div class="row" v-for="row in matrix">
				<span class="column cell" v-for="cell in row" >{{cell}}</span>			
			</div>
		</div>
		<btn-group v-on:generateSudoku="generator"></btn-group>	
	</div>
</template>

<script>
 import ButtonGroup from './Operation.vue';
 import Toolkit from '../lib/toolkit.js';

export default {
	name: 'sudoku',
	data () {
		return {
			msg: '欢迎来玩数独游戏',
			matrix : []
		}
	},

	created(){
		this.matrix = Array.apply(null,{length:9})
			.map((v,i)=>Array.apply(null,{length:9})
			.map((v,i)=>i+1));
		
	},
	methods:{
		generator(){
			class Generator {
			    generator() {
			        while (!this.interGenerator()) {
			            console.log('try again');
			        }
			    }


			    interGenerator() {
			        // 入口方法
			        this.matrix = Toolkit.matrix.makeMatrix();
			        this.orders = Toolkit.matrix.makeMatrix()
			            .map(row => row.map((v, i) => i))
			            .map(row => Toolkit.matrix.shuffle(row));

			        for (let n = 1; n <= 9; n++) {
			            if (!this.fillNumber(n)) {
			                return false
			            }
			        }
			        return true;
			    }

			    fillNumber(n) {
			        return this.fillRow(n, 0)
			    }

			    fillRow(n, rowIndex) {
			        if (rowIndex > 8) {
			            return true;
			        }

			        const row = this.matrix[rowIndex];
			        const orders = this.orders[rowIndex];
			        //随机选择列
			        for (let i = 0; i < 9; i++) {
			            const colIndex = orders[i];

			            if (row[colIndex]) {
			                continue;
			            }
			            // 检查这个地方是否可以填n
			            if (!Toolkit.matrix.checkFillable(this.matrix, n, rowIndex, colIndex)) {
			                continue;
			            }

			            row[colIndex] = n;


			            //当前行填写n成功 
			            if (!this.fillRow(n, rowIndex + 1)) {
			                row[colIndex] = 0;
			                continue;
			            }
			            return true;
			        }
			        return false
			    }

			}
			const generator = new Generator();
			generator.generator();
			this.matrix = generator.matrix;
		}
	},

	components:{
		 'btn-group':ButtonGroup
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
