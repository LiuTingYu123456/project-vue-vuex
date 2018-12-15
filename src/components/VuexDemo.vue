<template>
    <div>
        <h2>vuex's state :{{result}}</h2>
        <button type="button" @click="add">点击</button>
        <div class="calculator-box">
            <div class="show-data">
                <div class="result">计算结果：{{result2}}</div>
                <div class="enter">输入：{{enter?enter:'0'}}</div>
            </div>
            <div class="keys-area">
                <!-- 键盘区域 -->
                <keyboard v-for="item in list" :value="item"></keyboard> <!--v-bind 将告诉vue :value是javascript表达式而不是字符串-->
            </div>
        </div>
        <img src="../../static/images/process.png" style="display:block;margin:0 auto;" alt="">
    </div>
</template>
<script>
import keyboard from '@/components/keyboard'

export default {
  components: {
    keyboard
  },
  data () {
    return {
      list: [
        'clear', '+', '-', '*',
        '7', '8', '9', '/',
        '4', '5', '6', '0',
        '1', '2', '3', '='
      ]
    }
  },
  computed: {// 增加计算属性
    result () {
      return this.$store.state.count
    },
    result2 () { // 计算结果
      return this.$store.state.result
    },
    enter () {
      return this.$store.state.enter
    }
  },
  methods: {
    add: () => {
      this.$store.commit('increment')
    }
  }
}
</script>
<style lang="stylus" scoped>
    .calculator-box
        width 201px
        margin 0 auto
        .show-data
            height 150px
            background rgb(254,61,9)
            color #fff
            font-size 18px
            padding-top 90px
            .result
                font-size 24px
        .keys-area
            overflow hidden
            border-left 1px solid #ddd
</style>
