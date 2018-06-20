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
        if (this.$parent.gutter * 1 !== 0) {
          if (this.$parent.direction.indexOf('column') > 0) {
            styles.padding = `-${this.gutter / 2}px 0`
          } else {
            styles.padding = `0 -${this.gutter / 2}px`
          }
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
