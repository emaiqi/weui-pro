<template>
  <div class="weui-grid" :style="style" @click="onClick">
    <div class="weui-grid__icon" v-if="hasIconSlot || icon">
      <slot name="icon">
        <img :src="icon" />
      </slot>
    </div>
    <p class="weui-grid__label" v-if="hasLabelSlot || label">
      <slot name="label">
        <span v-html="label"></span>
      </slot>
    </p>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    name: 'grid-item',
    props: ['icon', 'label', 'link'],
    created () {
      this.$parent.countColumn()
    },
    mounted () {
      this.$slots.icon && (this.hasIconSlot = true)
      this.$slots.label && (this.hasLabelSlot = true)
    },
    destroyed () {
      this.$parent.countColumn()
    },
    methods: {
      onClick () {
        this.$emit('on-item-click')
      }
    },
    computed: {
      style () {
        const column = this.$parent.column
        if (!column || column === 3) {
          return
        }
        return `width: ${100 / column}%`
      }
    },
    data () {
      return {
        hasIconSlot: false,
        hasLabelSlot: false
      }
    }
  }
</script>
