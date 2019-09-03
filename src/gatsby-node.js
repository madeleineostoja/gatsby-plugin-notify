const WebpackNotifierPlugin = require('webpack-notifier');
const path = require('path');

exports.onCreateWebpackConfig = ({ actions }) => {
  console.log(path.join(__dirname, 'assets/gatsby-icon.png'));
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
