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
      orient: {
        type: String,
        default: 'horizontal'
      },
      wrap: String,
      align: String,
      justify: String,
      direction: String
    },
    computed: {
      style () {
        const styles = {
          'flex-wrap': this.wrap,
          'align-items': this.align,
          'justify-content': this.justify,
          'flex-direction': this.direction
        }
        return toStyle(styles)
      }
    }
  }
</script>
