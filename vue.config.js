module.exports = {
	publicPath:"./",  // 可以设置成相对路径，这样所有的资源都会被链接为相对路径，打出来的包可以被部署在任意路径

    outputDir:"dist",  //打包时生成的生产环境构建文件的目录

    assetsDir: 'public', 
	devServer:{
		open: true,
		//host: '172.21.117.235',
		port: 8080,
		https: false,
		hotOnly: false,
		disableHostCheck:true,
		proxy:{
			'api':{
				target:'https://ele-interface.herokuapp.com/api/',
				ws:true,
				changOrigin: true,
				pathRewrite:{
					'^/api':''
				},
			}
		},
		before: app => {}
	},
	configureWebpack: {
    externals: {
      'AMap': 'AMap' // 高德地图配置
    }
  }
};