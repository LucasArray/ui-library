# Documentation

## Run Project and see Modal
```npm i```
```npm run storybook```
```npm run test``` to run tests

I was able to get 1 test completed. Ran out of time. Tried to build it off memory with minimal documentation use. got tied up with conditional styling and emotion library and was left with 30 minutes to do tests. Couldnt finish the close button.

## Future Improvements & QOL Improvements & Future Considerations
- Add close button to Modal
- Add design tokens to model styles
- More tests especially to test if react portal is a better approach. Need to do a/b speed test to compare emotion to styledcomponents library or other methods. 
- Need Q/A testing to make sure Modal is focus trapped
- Needs full project setup.
- Components should be built in branches and merged into main.
- App.tsx and other none ui files can be deleted
- private npm setup for ui-library

## Project Struction
### components Folder
All components live here

#### /components/common
Common components such as Button, Form, Modal, ect...

#### /components/layout
Layout components such as Header, Footer, Nav

#### /components/features
Special features componenets.

### scripts Folder
Build scripts & other scripts
such design token build script



<!-- 

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default tseslint.config({
  extends: [
    // Remove ...tseslint.configs.recommended and replace with this
    ...tseslint.configs.recommendedTypeChecked,
    // Alternatively, use this for stricter rules
    ...tseslint.configs.strictTypeChecked,
    // Optionally, add this for stylistic rules
    ...tseslint.configs.stylisticTypeChecked,
  ],
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default tseslint.config({
  plugins: {
    // Add the react-x and react-dom plugins
    'react-x': reactX,
    'react-dom': reactDom,
  },
  rules: {
    // other rules...
    // Enable its recommended typescript rules
    ...reactX.configs['recommended-typescript'].rules,
    ...reactDom.configs.recommended.rules,
  },
})
``` -->
