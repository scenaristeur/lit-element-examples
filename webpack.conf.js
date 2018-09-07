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
mode : 'development'
};
