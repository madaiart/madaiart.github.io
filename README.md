# madaiart.github.io

This is a developer journey 💻🖱️

## Contents 📖

A general land webpage with menus. Each menu will have a general topic.

## Ideas 💡

1. A menu, that can render html and present in a box.

- The idea of this menu is to learn html so it will contains all references for each attribute.
- The attributes are taken from https://developer.mozilla.org/en-US/docs/Web/HTML.

### Tools 🧰

1. React (typescript)
2. Threejs
3. Vite
4. Casl.js (isomorphic autorization)
5. Turso
6. Cypress
7. Jest
8. ~loopback.io (REST)~
9. Nestjs
10. Slonik
11. Graphql (maybe)

12. A web-scrapping to compare vehicles from the web.

### Base Tools 🧰

1. [Vite + React + SWC](https://tailwindcss.com/docs/guides/vite)
2. [Puppetter](https://pptr.dev/)
3. [Tailwind](https://tailwindcss.com/docs/guides/create-react-app)
4. [Turso](https://turso.tech/)
5. [Netlify](https://www.netlify.com/)
6. [Nestjs](https://nestjs.com/)
7. [Slonik](https://github.com/gajus/slonik)
8. [TankStack Table v8](https://tanstack.com/table/v8/docs/guide/introduction)
9. [Headeless UI](https://github.com/tailwindlabs/headlessui)
10. [React Router](https://reactrouter.com/)
11. [Redux] (https://redux.js.org/)

#### Other basic tooling

1. Husky
2. Prettier
3. Eslint

---

## Old readme data

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
   parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
   },
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
