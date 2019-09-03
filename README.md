# gatsby-plugin-notify

[![npm](https://img.shields.io/npm/v/gatsby-plugin-notify) ![GitHub](https://img.shields.io/github/license/tomorrowstudio/gatsby-plugin-notify)](https://www.npmjs.com/package/gatsby-plugin-notify)

Add system notifications to your Gatsby development builds

## Install

```sh
npm i gatsby-plugin-notify
```

## How to use

Add the plugin to your `gatsby-config.js`

```js
module.exports = {
  plugins: [
    'gatsby-plugin-notify'
  ]
}
```

You will receive a native notification when your development build breaks, and when it builds successfully again after a breakage.

The plugin accepts any options that can be passed to [webpack-notifier](https://github.com/Turbo87/webpack-notifier#configuration)


```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-notify',
      options: {
        title: 'My Site'
      }
  ]
}
```

---

Made with ❤️ by [Tomorrow](https://www.tomorrowstudio.co)