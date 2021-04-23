const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const WebpackPwaManifestPlugin = require('webpack-pwa-manifest')
const WorkboxWebpackPlugin = require('workbox-webpack-plugin')
module.exports = {
  output: {
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/'
  },
  devServer: {
    port: 3000,
    historyApiFallback: true
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        use: 'babel-loader',
        exclude: /node_modules/
      }
    ]
  },
	plugins: [
	new HtmlWebpackPlugin({
    filename: 'index.html',
    template: './public/index.html'
	}),
		new WebpackPwaManifestPlugin({
			name: 'Petgram - Tu app de fotos de mascotas',
			shortname: 'Petgram',
			description: 'Con Petgram puedes encontrar fotos de animales domesticos muy facilmente',
			background_color: '#fff',
			theme_color: '#b1a',
			icons: [
				{
					src: path.resolve(__dirname, 'src','assets','dog.png'),
					sizes: [96, 128, 192, 256, 384, 512],
					purpose: 'any'
				}
			]
		}),
		new WorkboxWebpackPlugin.GenerateSW({
			runtimeCaching: [
				{
					urlPattern: new RegExp('https://res.cloudinary.com|images.unsplash.com'),
					handler: 'CacheFirst',
					options: {
						cacheName: 'images'
					}
				},
				{
					urlPattern: new RegExp('https://advanced-yosef-react-yosefblandin.vercel.app/'),
					handler: 'NetworkFirst',
					options: {
						cacheName: 'api'
					}
				}
			]
		})
	]
}
