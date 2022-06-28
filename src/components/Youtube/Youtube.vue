<template >
  <div class="youtube" >
    <iframe
      :src="embedURL"
      frameborder="0"
      class="video"
      allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
      allowfullscreen />
  </div>
</template>

<script>
export default {
  name: 'Youtube',
  props: {
    url: {
      type: String,
      required: true,
    },
  },
  computed: {
    embedURL() {
      const youtubeEmbedTemplate = 'https://www.youtube.com/embed/'
      const url = this.url.split( /(vi\/|v%3D|v=|\/v\/|youtu\.be\/|\/embed\/)/ )

      const YId = undefined !== url[ 2 ] ? url[ 2 ].split( /[^0-9a-z_/\\-]/i )[ 0 ] : url[ 0 ]

      const topOfQueue = youtubeEmbedTemplate.concat( YId )

      return topOfQueue
    },
  },
}
</script>

<style lang="scss" scoped>
.youtube {
  position: relative;
  width: 100%;
  height: 0;
  padding-bottom: 56.25%;
}
.video {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}
</style>
