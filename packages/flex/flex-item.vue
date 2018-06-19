<template>
  <div class="weui-flex__item" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  import { toStyle } from '../../utils/utils.js'

  export default {
    name: 'flex-item',
    props: {
      span: [Number, String],
      order: [Number, String]
    },
    beforeMount () {
      try {
        this.screenWidth = wx.getSystemInfoSync().screenWidth
      } catch (e) {
        this.screenWidth = document.documentElement.offsetWidth
      }
    },
    methods: {
      buildWidth (width) {
        if (typeof width === 'number') {
          if (width < 1) {
            return width
          } else {
            return width / 12
          }
        } else if (typeof width === 'string') {
          return width.replace('px', '') / this.screenWidth
        }
      }
    },
    computed: {
      style () {
        let styles = {}
        let marginName = this.$parent.orient === 'horizontal' ? 'marginLeft' : 'marginTop'
        if (this.$parent.gutter * 1 !== 0) {
          styles[marginName] = `${this.$parent.gutter}px`
        }
        if (this.span) {
          styles.flex = `0 0 ${this.buildWidth(this.span) * 100}%`
        }
        if (typeof this.order !== 'undefined') {
          styles.order = this.order
        }
        return toStyle(styles)
      }
    },
    data () {
      return {
        screenWidth: 0
      }
    }
  }
</script>
