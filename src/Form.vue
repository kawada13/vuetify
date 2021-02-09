<template>
<v-app>
  <div>
    <input type="text" v-model="newItems">
    <button @click.prevent="addItem">追加</button>
    <input type="text" v-model="query">検索

    <ul>
      <li v-for="(todo, i) in filterd" :key="i">
        <input type="checkbox" v-model="todo.isDone">
        <span :class="{done: todo.isDone}">{{todo.item}}</span>
        <button @click="deleteItem(i)">削除</button>
      </li>
    </ul>

    <hr>
    <input @input="validate" v-model="numValue" type="number">
    <v-text-field
    type="number"
    v-model="numValue"
    @input="validate"
    >
    </v-text-field>

    <v-row justify="center">
    <v-date-picker 
    v-model="picker"
    :disabled="dis"
    min="2021-02-01"
    max="2021-02-28"
    local="ja"
    >
    </v-date-picker>
  </v-row>
  </div>
</v-app>
</template>

<script>
export default {
  data() {
    return {
      newItems:'',
      todos: [], 
      query: '',
      numValue: '',
      picker: '2021-02-05',
      dis: false
      
    }
  },
  methods: {
    validate(v) { 
      console.log(v);
      this.numValue = this.numValue.replace(/\D/g, '')
    }, 
    addItem() {
      if(!this.newItems) return
      const todo = {
        item: this.newItems,
        isDone: false
      }
      this.todos.push(todo)
      this.newItems = ''
    },
    deleteItem(index) {
      this.todos.splice(index, 1)
    }
  },
  computed: {
    filterd() {
      let that = this
      return this.todos.filter(todo => todo.item.indexOf(that.query) !== -1)
    }
  }
}
</script>