<template>
  <div>
    <input type="text" v-model="childParam">
    <div>
      <slot name="header">header</slot>
      <slot>名前なし</slot>
      <slot name="footer">footer</slot>
      <br>
      <slot :member="member" name="member">ここがさしかわる</slot><br>
      <slot :member="member" name="member">っっっs</slot><br>

    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      childValue: '',
      member: {
        name: '東堂',
        age: 22,
        hobby: 'サッカー'
      }
    }
  },
  computed: {
    childParam: {
      get() {
        return this.childValue
      },
      set(val) {
        this.childValue = val
        this.$emit('child-event', val)
      }
    }
  }
}
</script>