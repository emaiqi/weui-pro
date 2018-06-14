<template>
  <div class="weui-grids">
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid',
    props: {
      cols: {
        type: Number
      }
    },
    methods: {
      countColumn () {
        this.childrenSize = this.$children.length
        this.$children.forEach((c, index) => (c.index = index))
      }
    },
    computed: {
      column () {
        return this.cols || this.childrenSize
      }
    },
    data () {
      return {
        childrenSize: 3
      }
    }
  }
</script>
