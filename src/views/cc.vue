<template>
  <div>
    <bb 
    @child-event="parentValue = $event"
    />
    {{parentValue}}
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