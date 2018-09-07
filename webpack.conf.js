//webpack.conf.js
module.exports = {
  entry: {
    app: ['./new-marquee.js', './my-element.js', './spoggy-accueil.js', './spoggy-sparql.js', './spoggy-graph.js'],
  //  vendors: ['react']
  },
  output: {
  //  path: '/dist', //staticPath,
    filename: '[name].js'
  },
  //  entry : './my-element.js',
  //entry : './new-marquee.js',
  /*output : {
  filename : 'main.js',
},*/
mode : 'development',
module: {
    rules: [
      /*{
        test: /node_modules[\\\/]vis[\\\/].*\.js$/, // vis.js files
        loader: 'babel-loader',
        query: {
          cacheDirectory: true,
          presets: [ "babel-preset-es2015" ].map(require.resolve),
          plugins: [
            "transform-es3-property-literals", // see https://github.com/almende/vis/pull/2452
            "transform-es3-member-expression-literals", // see https://github.com/almende/vis/pull/2566
            "transform-runtime" // see https://github.com/almende/vis/pull/2566
          ]
        }
      }, {
        test: /\.js$/, //Check for all js files
        loader: 'babel-loader',
        query: {
          presets: [ "babel-preset-es2015" ].map(require.resolve)
        }
      },*/ {
        test: /\.css$/,
        use: [
          'style-loader',
          'css-loader'
        ]
      }, {
        test: /.*\.png$/i,
        loaders: [ 'file-loader', {
          loader: 'image-webpack-loader',
          query: {
            progressive: true,
            pngquant: {
              quality: '65-90',
              speed: 4
            }
          }
        }
      ]
      }
    ]
  },
};
