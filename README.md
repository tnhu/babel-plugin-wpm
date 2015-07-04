# babel-plugin-wpm

Some specific transformers for [Web Package Manager](https://github.com/tnhu/wpm)

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
