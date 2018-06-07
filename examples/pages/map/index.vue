<template>
  <view class="container">
    <head-view title="map" desc="地图"></head-view>
    <view class="page-body">
      <view class="page-section page-section-gap">
        <map
          style="width: 100%; height: 300px;"
          :latitude="latitude"
          :longitude="longitude"
          :markers="markers"
          :covers="covers"
        >
        </map>
      </view>
    </view>
    <foot-view></foot-view>
  </view>
</template>

<script>
  import Header from '../../components/header'
  import Footer from '../../components/footer'

  export default {
    data () {
      return {
        latitude: 23.099994,
        longitude: 113.324520,
        markers: [{
          latitude: 23.099994,
          longitude: 113.324520,
          name: 'T.I.T 创意园'
        }],
        covers: [{
          latitude: 23.099994,
          longitude: 113.344520,
          iconPath: '/static/image/location.png'
        }, {
          latitude: 23.099994,
          longitude: 113.304520,
          iconPath: '/static/image/location.png'
        }]
      }
    },

    methods: {},

    components: {
      'head-view': Header,
      'foot-view': Footer
    }
  }
</script>

<style scoped>
</style>
