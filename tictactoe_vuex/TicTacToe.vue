<template>
  <div>
    <div>{{ turn }}님의 턴입니다.</div>
    <table>
      <tr v-for="(rowData, rowIndex) in tableData" :key="rowIndex">
        <td @click="onClickTd(rowIndex, cellIndex, cellData)" v-for="(cellData, cellIndex) in rowData" :key="cellIndex">
          {{ cellData }}
        </td>
      </tr>
    </table>
    <div v-if="winner">{{ winner }}님의 승리!</div>
  </div>
</template>

<script>
import {mapState} from "vuex";
import store, {RESET_GAME, CHANGE_TURN, NO_WINNER, SET_WINNER, CLICK_CELL} from "./store";

export default {
  computed: {
    ...mapState(["winner", "turn", "tableData"]),
  },
  methods: {
    onClickTd(rowIndex, cellIndex, cellData) {
      if (cellData) {
        return;
      }
      this.$store.commit(CLICK_CELL, {
        row: rowIndex,
        cell: cellIndex
      });
      if (this.isGameFinished(rowIndex, cellIndex)) {
        this.$store.commit(SET_WINNER, this.turn);
        this.$store.commit(RESET_GAME);
        return;
      }
      if (this.isGameDrew()) {
        this.$store.commit(NO_WINNER);
        this.$store.commit(RESET_GAME);
        return;
      }
      this.$store.commit(CHANGE_TURN);
    },

    isGameFinished(rowIndex, cellIndex) {
      let win = false;

      if (this.tableData[rowIndex][0] === this.turn && this.tableData[rowIndex][1] === this.turn && this.tableData[rowIndex][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][cellIndex] === this.turn && this.tableData[1][cellIndex] === this.turn && this.tableData[2][cellIndex] === this.turn) {
        win = true;
      }
      if (this.tableData[0][0] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][2] === this.turn) {
        win = true;
      }
      if (this.tableData[0][2] === this.turn && this.tableData[1][1] === this.turn && this.tableData[2][0] === this.turn) {
        win = true;
      }

      return win;
    },

    isGameDrew() {
      let all = true;

      this.tableData.forEach(row => {
        row.forEach(cell => {
          if (!cell) {
            all = false;
          }
        })
      })

      return all;
    }
  }
}
</script>

<style>
table {
  border-collapse: collapse;
}

td {
  border: 1px solid black;
  width: 40px;
  height: 40px;
  text-align: center;
}
</style>