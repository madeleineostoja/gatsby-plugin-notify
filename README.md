# gatsby-plugin-notify

Gatsby plugin that adds system notifications to your development build

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

You can also specify options

```js
module.exports = {
  plugins: [
    {
      resolve: 'gatsby-plugin-notify',
      options: {

      }
  ]
}
```