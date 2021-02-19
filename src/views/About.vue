<template>
  <div class="about">
    <h1>This is an about page</h1>
    <v-text-field
      label="Regular"
      :value="home"
      @input="v => home = Math.abs(v)"
      type="number"
    ></v-text-field>
    <p>{{home}}</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      home: ''
    }
  },
}
</script>
