## React Setup

All of the below (and more) is done by this one liner:

`npm create vite@latest my-react-app -- --template react`
The `--` here is a unix convention saying past the rest directly to vite. Note that this setup is fairly bloated and has some "ads" and a lot of unnecessary files and stuff.

*But to really understand it...* READ BELOW!
To build a react app, you need the following:

1. **Node** - for running javascript outside the browser and installing packages.
2. **react** - a npm package for the core features of React
3. **react-dom** - a npm package letting react render DOM components
4. **vite** (-D) a development server and building tool. 
    - React is written in `jsx` (a syntax extension for or dialect of `js`), which does not run natively in the browser. Under the hood vite translates the `jsx` code to `js` code. This should be a development dependency because the browser never sees vite, it allows us to test and build react during the development process.
5. **@vitejs/plugin-react** (-D) The react featureset for vite, effectively allows vite to deal with react specifically
6. The following directory structure

        - src
          ^----- App.jsx
          ^----- main.jsx
        - index.html
        - vite.config.js
    - `index.html`: The entry point. We create a div with id root to mount react to the dom here. We also include a script with type "module" to include the apps entry "js" file `main.jsx`. React controls the DOM from within this point, there is no need for `document.createElement` or `appendChild`, or other vanilla js DOM manipulation.
    - `src/main.jsx` The entry Javascript (jsx) file that react runs first, inside this we need to import react, reactdom, and `App` from the app file explained below. We also need to create the root with some boilerplate code.
        ```jsx
        ReactDOM.createRoot(document.getElementById('root')).render(
            <React.StrictMode>
                <App />
            </React.StrictMode>
        )
        ```
        - This is how React creates a `root` and mounts your app onto it. We use `document.getElementById` to fetch the root element we created in `index.html` and then the argument for `render` is `jsx` (looks like html but compiles to js describing the UI react should render). We add a wrapper `<React.StrictMode>` to give us extra warning and checks in development. and then <App /> is the root react component.
    - `src/App.jsx`: This is the first real react component. It includes a function component `App()` which returns `jsx`, kind of like HTML to be rendered. The `<div>` gets rendered, the component is also exported to be made available to other files. React components can only return a single parent element. One may also use `<> </>` which is a react fragment, a grouping element which is invisible in the DOM.
    - `vite.config.js`: A configuration file for `vite` telling it which plugins to use, how to handle different files and varous custom settings. The react plugin (see above step) is imported  allowing vite to compile jsx and use react fast refresh, and to optimize react during dev and build. and the configuration is defined to use this react plugin.
7. Add npm scripts `"dev": "vite"`, `"build": "vite build"`, `"preview": "vite preview"`. The scripts start a local development server, build the project into static files, and lets you preview the build site locally. Use `npm run dev` To see the site.

