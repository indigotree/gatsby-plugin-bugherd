# gatsby-plugin-bugherd

Add [Bugherd](https://bugherd.com/) to your [Gatsby](https://www.gatsbyjs.org/) website.

## Install

```
npm install gatsby-plugin-bugherd --save
```

## How To Use

```
// gatsby-config.js
plugins: [
  {
    resolve: `gatsby-plugin-bugherd`,
    options: {
      key: `BUGHERD_PROJECT_KEY`,

      // whether to include the snippet in production. Defaults to false
      showInProduction: true
    },
  },
];
```

## License

MIT © [Indigo Tree](https://indigotree.co.uk)
