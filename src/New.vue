<template>
  <div>
    <input v-model="message">
    <!-- 最初は'default message'が表示される -->
    <p>Message is: {{ message }}</p>
  </div>
</template>
 
<script>
  export default {
    data () {
      return {
        message: 'default message'
      }
    },
    watch: {
      message (val) {
        // Formの値を更新するとデータが更新され、consoleにその値が出力される
        console.log(val)
      }
    }
  }
</script>