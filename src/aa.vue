<template>
  <div>

    <Title v-model="title" />
    <v-app>
      
    </v-app>
  </div>
</template>



<script>

import Title from '@/Title.vue'


  export default {
    data () {
      return {
        select: { state: 'Florida', abbr: 'FL' },
        items: [
          { state: 'Florida', abbr: 'FL' },
          { state: 'Georgia', abbr: 'GA' },
          { state: 'Nebraska', abbr: 'NE' },
          { state: 'California', abbr: 'CA' },
          { state: 'New York', abbr: 'NY' },
        ],
        picker: '2020-06-04',
        title: 'タイトル'
      }
    },
    components: {Title}
  }
</script>