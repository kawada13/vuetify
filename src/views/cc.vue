<template>
  <div>
    <h1>ccは親で子がbb</h1>
    <bb 
    @child-event="parentValue = $event"
    >
    <template v-slot:header>ヘッダー</template>
    <template v-slot:footer>フッター</template>
    コンチは
    へうfjh
    <template v-slot:member="player">
      {{player}}
    </template>
    </bb>
  </div>
</template>

<script>
import bb from '@/views/bb.vue'
export default {
  components: {bb},
  data() {
    return {
      parentValue: ''
    }
  },
}
</script>