<template>
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
  </div>
</template>

<script>
export default {
  data() {
    return {
      newItems:'',
      todos: [], 
      query: ''
    }
  },
  methods: {
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