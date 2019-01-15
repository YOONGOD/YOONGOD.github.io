<template>
  <div class="hello">
  	<video-player class="video-player vjs-custom-skin" ref="videoPlayer" :playsinline="true" :options="playerOptions">
    </video-player>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      playerOptions: {
        // videojs options
        preload: 'auto',
        muted: false,
        language: 'zh-CN',
        // playbackRates: [0.7, 1.0, 1.5, 2.0],
        techOrder: ['flash', 'html5'],
        aspectRatio: '16:9',
        sourceOrder: true,
        flash: {
          hls: { withCredentials: false },
          swf: 'https://cdn.bootcss.com/videojs-swf/5.4.2/video-js.swf'
        },
        html5: { hls: { withCredentials: false } },
        sources: [
          {
            type: 'rtmp/flv',
            type: 'application/x-mpegURL',
            type: 'video/mp4',
            src: "http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8"
          }
          //rtmp://58.200.131.2:1935/livetv/hunantv
          //http://www.w3school.com.cn/example/html5/mov_bbb.mp4
          //http://kbs-dokdo.gscdn.com/dokdo_300/_definst_/dokdo_300.stream/playlist.m3u8
        ],
        autoplay: true,
        notSupportedMessage: '此视频暂无法播放，请稍后再试',
        // controlBar: {
        //   timeDivider: true,
        //   durationDisplay: true,
        //   remainingTimeDisplay: false,
        //   fullscreenToggle: true
        // }
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.hello{
  width: 100%;
  height: 100%;
}
.video-player.video-player.vjs-custom-skin{
  width: 100%;
  height: 100%;
}
.video-js.vjs-fluid, .video-js.vjs-16-9,.video-js.vjs-4-3{  
  width: 100% !important;
  height: 100% !important;
  padding: 0 !important;
}
</style>
