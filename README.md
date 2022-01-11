# Api: [getir-locals-api.herokuapp.com](https://getir-locals-api.herokuapp.com)
# Frontend URL: [getir-case-study-one.vercel.app](https://getir-case-study-one.vercel.app/)

## Getir Studycase

This is a study case for getir. Main goals of this app:
 - List given products
 - Serve them from json server(https://getir-locals-api.herokuapp.com)
 - Filter products. This options are multiselect:
   - by tag names
   - by manufacturer name
 - Sort produtcs. This options are singleselect:
   -  price low to high,
   -  price high to low,
   -  new to old
   -  old to new
   -  itemType
 - Paginate products
 - Add products to basket and remove products from basket
 - Increase and decrease amount of item inside of basket

In this project this technologies and packages used:
 - React
 - Typescript
 - Redux
 - Redux-saga
 - styled-components
 - usehooks-ts
 - framer-motion
 - react-contente-loader
 - react-paginate
 - icomoon


## Folder Structure

- src
  - /api
  - /components
  - /declerations
  - /hooks
  - /store
  - /styles _(some global variables)_
  - /types
  - /utils
  - App.tsx
  - index.tsx
  - theme.ts


 ### Note: 
 `Absolute import` was used inside the `src` folder in this project. So `you can import inside the src folder` like this:

```js
 import { Container } from 'components';
```


