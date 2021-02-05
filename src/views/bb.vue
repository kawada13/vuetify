<template>
  <div>
    <input type="text" v-model="childParam">
  </div>
</template>


<script>
export default {
  data() {
    return {
      childValue: ''
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