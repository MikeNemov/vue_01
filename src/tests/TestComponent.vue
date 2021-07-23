<template>
  <div>This message is: {{message}}</div>
</template>

<script>
export default {
  name: "TestComp",
  props: {
    message:String
  }
}
</script>