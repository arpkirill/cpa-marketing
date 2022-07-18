const { defineConfig } = require( '@vue/cli-service' )
const path = require( 'path' )

module.exports = defineConfig( {
  publicPath: '/',
  transpileDependencies: true,
  css: {
    loaderOptions: {
      sass: {
        sassOptions: {
          logger: require( 'sass' ).Logger.silent,
        },
      },
    },
  },
  // quietDeps option workaround
  pluginOptions: {
    vuetify: {
      // https://github.com/vuetifyjs/vuetify-loader/tree/next/packages/vuetify-loader
    },
  },
  configureWebpack: {
    resolve: {
      alias: {
        '@': path.resolve( __dirname, 'src' ),
      },
    },
  },
  pwa: {
    name: 'PWA',
    themeColor: '#ffd100',
    msTileColor: '#000000',
    appleMobileWebAppCapable: 'yes',
    appleMobileWebAppStatusBarStyle: 'black',
  },
} )
