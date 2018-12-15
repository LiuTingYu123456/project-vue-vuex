<template>
    <div
        class="keyboard"
        @click="enterEvent"
        :data-value="value"
    >{{value}}</div>
</template>
<script>
export default {
  name: 'keyboard',
  props: ['value'],
  methods: {
    enterEvent: (event) => {
      // 每次提交修改store中的值
      this.$store.commit('calculate', event.target.dataset.value)
    }
  }
}
</script>
<style lang="stylus" scoped>
    .keyboard
        width 50px
        height 50px
        text-align  center
        font-size 18px
        line-height 50px
        border-right 1px solid #ddd
        border-bottom 1px solid #ddd
        float left
        cursor pointer
        &:hover
            background #ddd
</style>
