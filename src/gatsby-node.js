const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    plugins: [
      new WebpackNotifierPlugin({
        title: 'Gatsby',
        contentImage: path.join(__dirname, 'assets/gatsby-icon.png'),
        skipFirstNotification: true
      })
    ]
  });
};
