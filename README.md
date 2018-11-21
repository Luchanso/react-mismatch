# react-mismatch

Check missmatch between Server Side Rendering and Client Side Rendering for React.
![image](https://user-images.githubusercontent.com/2098777/48835699-dedf0a00-ed91-11e8-94e4-2a90ff2149f6.png)

Good for PR

## Install
```
npm install --save react-mismatch
```
or
```
yarn add react-mismatch
```

## How to use

Desclimer: Don't use in PRODUCTION mode

```jsx
import React from 'react';
import ReactDOM from 'react-dom';
import mismatch from 'react-mismatch';
import App from './App';

const appNode = document.querySelector('app');
const mismatchCallback = mismatch(appNode);

ReactDOM.hydrate(<App />, appNode, mismatchCallback);
```

## In future:
- [ ] More examples
- [ ] Colored diff
- [ ] More informative diff
- [ ] Unit tests
- [ ] Minification and polyfill
