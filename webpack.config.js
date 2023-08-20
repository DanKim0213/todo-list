// export const module = {
//   rules: [
//     {
//       test: /\.(js | jsx | tsx)?$/,
//       exclude: ["node_modules"],
//       use: ["babel-loader"],
//     },
//     {
//       test: /\.css$/,
//       use: ["style-loader", "css-loader"],
//     },
//     {
//       test: /\.gif$/,
//       type: "asset/inline",
//     },
//     {
//       test: /\.(ttf|eot|svg)$/,
//       type: "asset/resource",
//     },
//   ],
// };
// export const resolve = {
//   alias: {
//     config$: "./configs/app-config.js",
//     react: "./vendor/react-master",
//   },
//   extensions: [".js", ".jsx", ".tsx"],
//   modules: [
//     "node_modules",
//     "bower_components",
//     "shared",
//     "/shared/vendor/modules",
//   ],
// };

// // const path = require("path");
// // const webpack = require("webpack");
// // import path from "path";
// // import webpack from "webpack";

// // export const mode = "development";
// // export const module = {
// //   rules: [
// //     {
// //       test: /\.(js|jsx|tsx)$/,
// //       exclude: /node_modules/,
// //       loader: "babel-loader",
// //     },
// //   ],
// // };

// // const path = require("path");
// // const webpack = require("webpack");

// // export const mode = "development";
// // export const module = {
// //   rules: [
// //     {
// //       test: /\.(js|jsx|tsx)$/,
// //       exclude: /node_modules/,
// //       loader: "babel-loader",
// //     },
// //   ],
// // };

import { resolve as _resolve } from "path";
import * as url from "url";
const __dirname = url.fileURLToPath(new URL(".", import.meta.url));

export const entry = "./src/index.ts";
export const module = {
  rules: [
    {
      test: /\.tsx?$/,
      use: "ts-loader",
      exclude: /node_modules/,
    },
  ],
};
export const resolve = {
  extensions: [".tsx", ".ts", ".js"],
};
export const output = {
  filename: "bundle.js",
  path: _resolve(__dirname, "dist"),
};
