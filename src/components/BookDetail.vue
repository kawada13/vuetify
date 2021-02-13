<template>
  <div>
    <h1>BookDetail</h1>
    <p>id: {{$route.params.id}}</p>
    <p>title: {{$route.params.title}}</p>
    <p>content: {{$route.params.content}}</p>
    <hr>
    <p>id: {{books[this.$route.params.id -1].id}}</p>
    <p>title: {{books[this.$route.params.id -1].title}}</p>
    <p>content: {{books[this.$route.params.id -1].content}}</p>
  </div>
</template>


<script>
export default {
  props: {
    id: Number,
    title: String,
    content: String
  },
  data() {
    return {
      bookIndex: this.$route.params.id -1,
      books: [
        {id: 1, title: 'タイトル1', content: '本の内容1'},
        {id: 2, title: 'タイトル2', content: '本の内容2'},
        {id: 3, title: 'タイトル3', content: '本の内容3'}
      ]
    }
  },
  created() {
    if(this.$route.params.id > this.books.length) {
      this.$router.push('/book')
    }
  },
  watch: {
    $route(to) {
      console.log(to.params.id);
      if(to.params.id > this.books.length){
      this.$router.push('/book')
      }
    }
  }
}
</script>