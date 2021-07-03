<template>
  <div class="hello">
    <h1>Калькулятор</h1>
    <label>Первое число: <input type="number" v-model.number="num1" @input="errorChange" :class="errorMsg && !num1 ? 'error' : ''"></label>
    <label>Второе число: <input type="number" v-model.number="num2" @input="errorChange" :class="errorMsg && !num2 ? 'error' : ''"></label>
    <div class="operands">
      <button class="operand" v-for="(operand, i) in operands" :key="i" @click="calculate(operand)">{{ operand }}</button>
    </div>
    <label><input type="checkbox" v-model="openKeyboard">Открыть клавиатуру</label>
    <div class="keyboard" :class="!openKeyboard ? 'hidden' : ''">
      <div class="radio">
        <label><input type="radio" name="currInput" value="num1" v-model="currInput" checked>Первое число</label>
        <label><input type="radio" name="currInput" value="num2" v-model="currInput">Второе число</label>
      </div>
      <div class="numbers">
        <button class="operand" v-for="(number, i) in numbers" :key="i" @click="addNumber(number)">{{ number }}</button>
      </div>

    </div>
    <div class="result">
      <h1>Результат:</h1>
      <div class="error" v-if="errorMsg">{{ errorMsg }}</div>
      <div v-else>{{ resultMsg }}</div>
      <h2>История вычислений:</h2>
      <div class="log" v-for="(log, id) in logs" :key="id"> {{log}} </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Calculator',
  data() {
    return {
      num1: 0,
      num2: 0,
      numbers: [1, 2, 3, 4, 5, 6, 7, 8, 9, 'del', 0],
      operands: ['+', '-', '*', '/', '^', 'r/'],
      resultMsg: '',
      errorMsg: '',
      openKeyboard: '',
      currInput: 'num1',
      logs: {},
    }
  },
  methods: {
    calculate(operand) {
      this.resultMsg='';
      this.errorMsg = '';
      if (!(this.num1 !== '' && this.num2 !== '')) {
        this.errorMsg = `Введите оба числа`;
        return;
      }
      switch (operand) {
        case '+': {
          this.resultMsg = `${this.num1} + ${this.num2} = ${this.num1 + this.num2}`;
          break;
        }
        case '-': {
          this.resultMsg = `${this.num1} - ${this.num2} = ${this.num1 - this.num2}`;
          break;
        }
        case '*': {
          this.resultMsg = `${this.num1} * ${this.num2} = ${this.num1 * this.num2}`;
          break;
        }
        case '/': {
          if (this.num2 !== 0) {
            this.resultMsg = `${this.num1} / ${this.num2} = ${this.num1 / this.num2}`;
          } else if (this.num1 === 0) {
            this.errorMsg = '0/0 - дает неизвестность';
          } else {
            this.errorMsg = `Делить на 0 нельзя`;
          }
          break;
        }
        case '^': {
          if ((this.num1 > 0) || (this.num1 === 0 && this.num2 > 0) || (this.b === Math.round(this.num2))) {
            this.resultMsg = `(${this.num1})^${this.num2} = ${Math.pow(this.num1, this.num2)}`;
          } else if (this.num1 === 0 && this.num2 < 0) {
            this.errorMsg = 'Ноль возводится только в положительную степень';
          } else {
            this.errorMsg = 'Отрицательные числа можно возводить только в целочисленную степень';
          }
          break;
        }
        case 'r/': {
          if (this.num2 !== 0) {
            this.resultMsg = `Деление без остатка: (${this.num1} / ${this.num2}) = ${Math.round(this.num1 / this.num2)}`;
          } else if (this.num1 === 0) {
            this.errorMsg = '0/0 - дает неизвестность';
          } else {
            this.errorMsg = `Делить на 0 нельзя`;
          }
          break;
        }
        default: {
          this.errorMsg = 'Произошла ошибка - не найден оператор вычисления. Попробуйте еще раз.';
        }
      }
      const key = Date.now();
      this.logs[key] = `${this.resultMsg}`;
    },
    errorChange() {
      this.errorMsg ? this.resultMsg = '' : '';
      this.errorMsg = '';
    },
    addNumber(el) {
      if (el === 'del') {
        this[this.currInput] = this[this.currInput].toString().slice(0, this[this.currInput].toString().length - 1);
      } else {
        this[this.currInput] = `${this[this.currInput]}` + el;
      }
    },
  },

}
</script>

<style lang="scss">
.hello{
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

label {
  display: block;
  margin-bottom: 20px;
}

.operands {
  display: flex;
  justify-content: center;
  align-items: center;
}
.operand {
  font-size: 1rem;
  padding: 20px;
  margin: 10px;
}
.result {
}
div.error {
  font-size: 2rem;
  max-width: 50vw;
  min-width: 300px;
  margin: 0 auto;
}
input.error {
  border-color: orangered;
}
div.error {
  color: orangered;
}
button{
  cursor: pointer;
}
.keyboard {
  transform-origin: top center;
  transition: all 0.2s ease-in-out;
}
.numbers {
  max-width: 300px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
}
.hidden {
  display: none;
}
.radio {
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 20px;
}
label {
  user-select: none;
}
</style>