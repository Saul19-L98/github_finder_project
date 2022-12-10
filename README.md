# GIthub Finder Profiles.

Built this app with Webpack and Tailwind CSS

## Usage

## API Reference

### Get all items

```
variable (input) => user

GET USERS 👨‍👨‍👦‍👦

https://api.github.com/search/users?q=${user}

GET USER 👨‍🚀

https://api.github.com/users/${user}

```

The request will bring the first 30 matching results.
| Parameter | Type | Description |
| :-------- | :------- | :------------------------- |
| `q` | `string` | **Required**. User name |

```
GET REPOS 📦

https://api.github.com/users/${user}/repos?${params}

```

| Parameter  | Type     | Description                                                                                                 |
| :--------- | :------- | :---------------------------------------------------------------------------------------------------------- |
| `sort`     | `string` | **Required**. Required\*\*. The order of every repo according to an specification, in this case : "created" |
| `per_page` | `int`    | **Required**. Number of repos to fetch                                                                      |

### Install dependencies

```
npm Install
```

### Build for production

```
npm run build
```

### Run the development server (:3000)

```
npm run start
```

### Create your package.json

```
npm init -y
```

### Create your src folder

Create a folder called **src** and add an empty **index.js** file. The code that webpack compiles goes in here including any Javascript modules and the main Tailwind file.

### Dependencies used 📚

```
  "devDependencies": {
    "@babel/core": "^7.20.5",
    "@babel/preset-env": "^7.20.2",
    "@babel/preset-react": "^7.18.6",
    "autoprefixer": "^10.4.12",
    "babel-loader": "^9.1.0",
    "css-loader": "^6.7.1",
    "daisyui": "^2.42.1",
    "dotenv-webpack": "^8.0.1",
    "html-loader": "^4.2.0",
    "html-webpack-plugin": "^5.5.0",
    "postcss": "^8.4.17",
    "postcss-loader": "^7.0.1",
    "postcss-preset-env": "^7.8.2",
    "prop-types": "^15.8.1",
    "react": "^18.2.0",
    "react-dom": "^18.2.0",
    "react-icons": "^4.7.1",
    "react-router-dom": "^6.4.4",
    "style-loader": "^3.3.1",
    "tailwindcss": "^3.1.8",
    "webpack": "^5.74.0",
    "webpack-cli": "^4.10.0",
    "webpack-dev-server": "^4.11.1"
  }
```

### Install Tailwind

```
npm i -D tailwindcss
```

### Install Webpack & Loaders

```
npm i -D webpack webpack-cli webpack-dev-server style-loader css-loader postcss postcss-loader postcss-preset-env
```

### Webpack dev file: webpack.config.dev.js

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    watchFiles: ["src/**/*"],
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        use: { loader: "html-loader" },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

```

### Webpack production file: webpack.config.dev.js

```
const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const Dotenv = require("dotenv-webpack");

module.exports = {
  mode: "development",
  entry: "./src/index.js",
  output: {
    path: path.resolve(__dirname, "dist"),
    filename: "bundle.js",
  },
  devServer: {
    watchFiles: ["src/**/*"],
    port: 3000,
    open: true,
    hot: true,
    compress: true,
    historyApiFallback: true,
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/i,
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env"],
          },
        },
      },
      {
        test: /\.html$/i,
        use: { loader: "html-loader" },
      },
      {
        test: /\.css$/i,
        include: path.resolve(__dirname, "src"),
        use: ["style-loader", "css-loader", "postcss-loader"],
      },
      {
        test: /\.(png|svg|jpg|gif)$/i,
        type: "asset/resource",
        generator: {
          filename: "assets/img/[name][ext]",
        },
      },
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      inject: true,
      template: "./public/index.html",
      filename: "./index.html",
    }),
    new Dotenv({
      systemvars: true,
    }),
  ],
};

```

### Create a **style.css** in your **src** folder and add these 3 lines

```

@tailwind base;
@tailwind components;
@tailwind utilities;

```

### Tailwind Config File

run the following command to generate your **tailwind.config.js** file and add this to it

```

module.exports = {
content: ["./public/**/*.html", "./src/**/*.{js,jsx}"],
theme: {
extend: {},
},
plugins: [require("daisyui")],
};

```

### PostCCSS Config File

Create a file in the root called **postcss.config.js** and add this

```

const tailwindcss = require('tailwindcss');
module.exports = {
plugins: [
'postcss-preset-env',
tailwindcss
],
};

```

### Add this line to your src/index.js

```

import './style.css';

```

### Create a **dist/index.html** file and add this

```

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Github finder 🌏</title>
</head>
<body >
    <div id="root"></div>
</body>
</html>
```

### Add scripts to package.json

Add the following to your package.json file

```
"scripts": {
    "build": "webpack --config ./webpack.config.js",
    "watch": "webpack --watch",
    "dev": "webpack serve",
    "start": "webpack-dev-server --config ./webpack.config.dev.js"
  },
```

### Running your app

To build once and create your **dist/bundle.js** file, run

```
npm run build
```

To run your webpack server

```
npm run start
```

You now have Webpack setup along with Tailwind CSS
