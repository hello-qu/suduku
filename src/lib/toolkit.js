/*
* @Author: qujun
* @Date:   2018-05-31 15:16:07
* @Last Modified by:   qujun
* @Last Modified time: 2018-05-31 15:41:20
*/
const matrixToolkit = {
    //生成行
    makeRow(v = 0) {
        const array = new Array(9);
        array.fill(v);
        return array;
    },
    //生成列
    makeMatrix(v = 0) {
        return Array.from({ length: 9 }, (v, i) => this.makeRow(v));
    },


    //洗牌算法
    shuffle(array) {
        const length = array.length
        const endIndex = length - 1
        for (let i = 0; i < endIndex; i++) {
            const j = i + Math.floor((length - i) * Math.random());
            [array[i], array[j]] = [array[j], array[i]]

        }
        return array;
    },

    checkFillable(matrix, n, rowIndex, colIndex) {
        const row = matrix[rowIndex];
        const column = this.makeRow().map((v, i) => matrix[i][colIndex]);
        const { boxIndex } = boxToolkit.covertToBoxIndex(rowIndex, colIndex);
        const box = boxToolkit.getBoxCells(matrix, boxIndex);
        /* 自己的方法
         const box = this.makeRow().map((v,i)=>{
            const boxCell =  boxToolkit.converFromBoxIndex(boxIndex,i);
            const  boxCelrowlIndex = boxCell.rowIndex;
            const  boxCelcollIndex = boxCell.colIndex;
            return matrix[boxCelrowlIndex][boxCelcollIndex];
         })
         */
        for (let i = 0; i < 9; i++) {
            if (row[i] === n || column[i] === n || box[i] === n) {
                return false
            }
        }
        return true;
    }
}

/*
 *坐标系工具
 */

const boxToolkit = {
    getBoxCells(matrix, boxIndex) {
        const starRowIndex = Math.floor(boxIndex / 3) * 3;
        const starColIndex = boxIndex % 3 * 3;
        const result = [];
        for (let cellIndex = 0; cellIndex < 9; cellIndex++) {
            const rowIndex = starRowIndex + Math.floor(cellIndex / 3);
            const colIndex = starColIndex + cellIndex % 3;
            result.push(matrix[rowIndex][colIndex]);
        }
        return result
    },

    covertToBoxIndex(rowIndex, colIndex) {
        return {
            boxIndex: Math.floor(rowIndex / 3) * 3 + Math.floor(colIndex / 3),
            cellIndex: rowIndex % 3 * 3 + colIndex % 3
        }
    },

    converFromBoxIndex(boxIndex, cellIndex) {
        return {
            rowIndex: Math.floor(boxIndex / 3) * 3 + Math.floor(cellIndex / 3),
            colIndex: boxIndex % 3 * 3 + cellIndex % 3
        }
    }
}

 class Toolkit {
    //矩阵和数据
    static get matrix() {
        return matrixToolkit;
    }
    //宫坐标系
    static get box() {
        return boxToolkit;
    }
}


export default Toolkit;