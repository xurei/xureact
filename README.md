## xureact
[![npm](https://img.shields.io/npm/v/xureact.svg)](https://www.npmjs.com/package/xureact)
[![wercker status](https://app.wercker.com/status/095730d2b57561d2c53a2948c979a20b/s/master "wercker status")](https://app.wercker.com/project/byKey/095730d2b57561d2c53a2948c979a20b)
[![Codecov](https://img.shields.io/codecov/c/github/xurei/xureact.svg)](https://codecov.io/gh/xurei/xureact)
[![GitHub issues](https://img.shields.io/github/issues/xurei/xureact.svg)](https://github.com/xurei/xureact/issues)
[![Codacy grade](https://img.shields.io/codacy/grade/4a1aad470af24fa8950794b066560a11.svg)](https://www.codacy.com/app/xurei/xureact)
<a href="https://github.com/sponsors/xurei" target="_blank">
  <img src="https://img.shields.io/static/v1?label=Sponsor&message=%E2%9D%A4&logo=GitHub" alt="Sponsor" />
</a>

A React toolbox.

### What's in there ?

`xureact` is a toolbox of simple, useful components.

### Philosophy
- Prefer Pure components : all React components in `xureact` are meant to be pure, *i.e.* they do not use `state`.
- Composition is gold : the `xureact` components never inherits another component. Instead, they encapsulate them, or wrap them around (like `styled-components` do)

### Concepts
xureact contains three major types of element :

1. **Components** : any **pure** component. Some might contain children, some not.
1. **Wrappers** : similar to `ReactRedux.connect()` or `Styled()`, these are methods that decorates a pure component to give it extra features.
1. **Utilitary** functions : any "classical" function that is useful within the context of `xureact`  

## Support Open-Source ♥
Support my work on https://github.com/sponsors/xurei
