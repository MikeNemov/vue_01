<template>
  <div class="payment">
    <div class="index">{{item.id}}</div>
    <div class="date">{{ item.date }}</div>
    <div class="category">{{ item.category }}</div>
    <div class="value">{{ item.value }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: {
      type: Object,
      required: true
    },
  },
}
</script>

<style scoped>
* {
  margin: 0;
  padding: 0;
}

.payment {
  display: flex;
  width: 300px;
  height: 30px;
  border-bottom: 1px solid lightgrey;
  align-items: center;
  justify-content: center;
}

.index {
  width: 30px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;

  display: flex;
  align-items: center;
  justify-content: center;
}

.date {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.category {
  width: 100px;
  font-family: Arial, sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.value {
  width: 50px;
  font-family: Arial,sans-serif;
  font-size: 16px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>