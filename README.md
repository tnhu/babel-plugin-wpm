# babel-plugin-wpm

Some specific transformer(s) for [Web Package Manager](https://github.com/tnhu/wpm)

## Input

```js
Class({
  IndexRoute() {
  },

  signin() {
  }
});
```

## Output

```js
Class({
  constructor: function IndexRoute() {
  },

  signin: function signin() {
  }
});
```

## Rules

* If there is only one CamelCase method. The method becomes constructor.
* If there are more than one CamelCase methods, the first CamelCase method becomes constructor.

## Installation

```sh
$ npm install babel-plugin-wpm
```

## Usage

### Via `.babelrc` (Recommended)

**.babelrc**

```json
{
  "plugins": ["babel-plugin-wpm"]
}
```

### Via CLI

```sh
$ babel --plugins babel-plugin-wpm script.js
```

### Via Node API

```javascript
require("babel-core").transform("code", {
  plugins: ["babel-plugin-wpm"]
});
```
