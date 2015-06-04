module.exports = {
  entry: './react-router.js',

  output: {
    filename: 'react-router.bundle.js'
  },

  externals: {
    'react': "Package['reactjs:react'].React",
    'react/addons': "Package['reactjs:react'].React"
  },

  module: {
    loaders: [
      { test: /\.js$/, loaders: ['babel-loader'], exclude: /node-modules/ }
    ]
  }
};
