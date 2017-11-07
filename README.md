## xureact
[![npm](https://img.shields.io/npm/v/xureact.svg)](https://www.npmjs.com/package/xureact)
[![Wercker](https://img.shields.io/wercker/ci/wercker/docs.svg)](https://app.wercker.com/xurei/xureact/runs)
[![Codecov](https://img.shields.io/codecov/c/github/xurei/xureact.svg)](https://codecov.io/gh/xurei/xureact)
[![GitHub issues](https://img.shields.io/github/issues/xurei/xureact.svg)](https://github.com/xurei/xureact/issues)
[![Codacy grade](https://img.shields.io/codacy/grade/4a1aad470af24fa8950794b066560a11.svg)](https://www.codacy.com/app/xurei/xureact)

React toolbox based on styled components.

### What's in there ?

`xureact` is a toolbox of useful components.

### Philosophy
- Prefer Pure components : all React components in `xureact` are meant to be pure, *i.e.* they do not use `state`.
  There are some exceptions, for example with forms.
- Composition is gold : the `xureact` components never inherits another component. Instead, they encapsulate them, or wrap them around (like `styled-components` do)

### Concepts
xureact contains three major types of element :

1. **Components** : any **pure** component. Some might contain children, some not.
1. **Wrappers** : similar to `ReactRedux.connect()` or `Styled()`, these are methods that decorates a pure component to give it extra features.
1. **Utilitary** functions : any "classical" function that is useful within the context of `xureact`  

## Support on Beerpay
Hey dude! Help me out for a couple of :beers:!

[![Beerpay](https://beerpay.io/xurei/xureact/badge.svg?style=beer-square)](https://beerpay.io/xurei/xureact)  [![Beerpay](https://beerpay.io/xurei/xureact/make-wish.svg?style=flat-square)](https://beerpay.io/xurei/xureact?focus=wish)