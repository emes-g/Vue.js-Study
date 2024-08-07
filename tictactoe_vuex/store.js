import {createStore} from "vuex";

export const SET_WINNER = 'SET_WINNER';
export const CLICK_CELL = 'CLICK_CELL';
export const CHANGE_TURN = 'CHANGE_TURN';
export const RESET_GAME = 'RESET_GAME';
export const NO_WINNER = 'NO_WINNER';

export default createStore({
    state: {
        tableData: [
            ['', '', ''],
            ['', '', ''],
            ['', '', '']
        ],
        turn: 'O',
        winner: ''
    },
    getters: {},
    mutations: {
        [SET_WINNER](state, winner) {
            state.winner = winner;
        },
        [CLICK_CELL](state, { row, cell }) {
            state.tableData[row][cell] = state.turn;
        },
        [CHANGE_TURN](state) {
            state.turn = (state.turn === 'O') ? 'X' : 'O';
        },
        [RESET_GAME](state) {
            state.turn = 'O';
            state.tableData = [
                ['', '', ''],
                ['', '', ''],
                ['', '', '']
            ];
        },
        [NO_WINNER](state) {
            state.winner = '';
        }
    },
    actions: {}
})