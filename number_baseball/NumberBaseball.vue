<template>
  <div>
    <h1>{{result}}</h1>
    <form @submit.prevent="onSubmitForm">
      <input ref="answer" minlength="4" maxlength="4" v-model="value">
      <button type="submit">입력</button>
    </form>
    <div>시도: {{tries.length}}</div>
    <ul>
      <li v-for="t in tries">
        <div>{{t.try}}</div>
        <div>{{t.result}}</div>
      </li>
    </ul>
  </div>
</template>

<script>
function getNumbers() {
  const candidates = [], array = [];
  for (let i=1; i<10; i++) {
    candidates.push(i);
  }
  for (let i=0; i<4; i++) {
    const chosen = candidates.splice(Math.floor(Math.random() * (9 - i)), 1)[0];
    array.push(chosen);
  }
  return array;
}

export default {
    data() {
      return {
        answer: getNumbers(), // e.g.) [1,2,3,4]
        tries: [],  // 시도 수
        value: '',  // 입력
        result: '', // 결과
      }
    },
    methods: {
      init(result) {
        this.result = result;
        this.value = '';
        this.answer = getNumbers();
        this.tries = [];
        this.$refs.answer.focus();
      },
      onSubmitForm() {
        // e.preventDefault();
        // console.log(this);
        if (this.value === this.answer.join('')) {  // 정답이라면
          this.tries.push({
            try: this.value,
            result: "홈런",
          });
          alert("게임을 다시 실행합니다.");
          this.init("홈런");
        } else {
          if (this.tries.length > 9) {  // 10번째 시도
            alert(`10번 넘게 틀려서 실패, 답은 ${this.answer.join('')}였습니다!`);
            this.init("실패");
          }
          let strike = 0;
          let ball = 0;
          const answerArray = this.value.split('').map(v => parseInt(v)); // 문자열을 숫자 배열로
          for (let i=0; i<4; i++) {
            if (answerArray[i] === this.answer[i]) {  // 숫자, 자릿수 모두 정답
              strike++;
            } else if (this.answer.includes(answerArray[i])) {  // 숫자만 정답
              ball++;
            }
          }
          this.tries.push({
            try: this.value,
            result: `${strike} 스트라이크, ${ball} 볼입니다.`,
          })
          this.value = "";
          this.$refs.answer.focus();
        }
      }
    }
  };
</script>

<style>

</style>