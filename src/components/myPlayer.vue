<template>
  <div class="container">
    <div class="player">
      <video-player  class="video-player vjs-custom-skin"
        ref="videoPlayer"
        :playsinline="true"
        :options="playerOptions"
        @play="onPlayerPlay($event)"
        @pause="onPlayerPause($event)"
      >
      </video-player>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      playerOptions: {
        autoplay: false,
        muted: false,
        loop: false,
        preload: 'auto',
        language: 'zh-CN',
        // fluid: true,
        sources: [{
          type: 'rtmp/flv',
          type: 'application/x-mpegURL',
          type: 'video/mp4',
          src: 'http://bridgelivepull.52huanghuang.com/match/188.m3u8?auth_key=1546936407-0-0-3a76067ad5d6d84d9f436d2927bd6f2e'
        }],
        poster: '',
        width: document.documentElement.clientWidth,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true
        // }
      }
    }
  },
  methods: {
    onPlayerPlay (player) {
    //   alert('play')
    },
    onPlayerPause (player) {
    //   alert('pause')
    }
  },
  computed: {
    player () {
      return this.$refs.videoPlayer.player
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style type="text/css" scoped>
    .vjs-big-play-centered{
        height:100%;
        width:100%;
    }
</style>
