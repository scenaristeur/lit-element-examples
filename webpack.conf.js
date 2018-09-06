//webpack.conf.js
module.exports = {
  entry: {
    app: ['./new-marquee.js', './my-element.js', './spoggy-accueil', './spoggy-sparql'],
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
