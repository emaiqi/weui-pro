<template>
  <div class="weui-flex" :style="style">
    <slot></slot>
  </div>
</template>

<script>
  import {toStyle} from '../../utils/utils.js'

  export default {
    name: 'flex',
    props: {
      gutter: {
        type: Number,
        default: 8
      },
      direction: {
        type: String,
        default: 'row'
      },
      wrap: String,
      align: String,
      justify: String
    },
    computed: {
      style () {
        const styles = {
          'flex-wrap': this.wrap,
          'align-items': this.align,
          'justify-content': this.justify,
          'flex-direction': this.direction
        }
        if (this.gutter * 1 !== 0) {
          if (this.direction.indexOf('column') > 0) {
            styles.margin = `-${this.gutter / 2}px 0`
          } else {
            styles.margin = `0 -${this.gutter / 2}px`
          }
        }
        return toStyle(styles)
      }
    }
  }
</script>
