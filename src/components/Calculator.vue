<template>
  <div class="hello">
    <h1>Калькулятор</h1>
    <input type="number" v-model.number="a" placeholder="Число 1">
    <input type="number" v-model.number="b" placeholder="Число 2">
    <div class="operands">
      <button class="operand" @click="sum">+</button>
      <button class="operand" @click="sub">-</button>
      <button class="operand" @click="multiply">*</button>
      <button class="operand" @click="divide">/</button>
      <button class="operand" @click="sup">a<sup>x</sup></button>
      <button class="operand" @click="roundDivide">round /</button>
    </div>
    <div>{{ result }}</div>

    <div class="error"
         :class="{'red': error}"
         v-if="error">
      Ошибка!! {{ error }}
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      a: '',
      b: '',
      result: '',
      error: '',
    }
  },
  methods: {
    sum() {
      this.error = '';
      this.result = `Результат сложения: ${+this.a + +this.b}`;
    },
    sub() {
      this.error = '';
      this.result = `Результат вычитания: ${+this.a - +this.b}`;
    },
    multiply() {
      this.error = '';
      this.result = `Результат умножения: ${+this.a * +this.b}`;
    },
    divide() {
      this.error = '';
      if (this.b !== 0){
        this.result = `Результат деления: ${+this.a / +this.b}`
      }
      else
        return this.error = "Делить на 0 нельзя"

    },
    sup() {
      this.error = '';
      if (this.a > 0 || this.b > 0) {
        this.result = `Результат возведения (${+this.a}) в степень ${+this.b} = ${Math.pow(+this.a, +this.b)}`
      }
      else
        if (this.a === 0 && this.b < 0){
          this.error = 'Ноль можно возводить только в положительную степень'
        }
        else
          this.result = `Результат возведения (${+this.a}) в степень ${+this.b} = ${Math.pow(+this.a, +this.b)}`


    },
    roundDivide() {
      this.error = '';
      if (this.b === 0){
        return this.error = "Делить на 0 нельзя"
      }
      else
        this.result = `Результат целочисленного деления: ${Math.round(+this.a / +this.b)}`

    },
  },
}
</script>

<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.red{
  color: red;
}
</style>
