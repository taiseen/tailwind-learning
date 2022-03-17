17 - March - 2022

# Mobile Drop Down Menu - in React + Tailwind 

## Project is created by React `Yarn`

## Package Installed... 

+ yarn create react-app testing
+ yarn add react-router-dom
+ yarn add `-D` tailwindcss postcss autoprefixer 
+ npx tailwindcss init -p

this `-D` switch create `devDependencies` section at `package.json` file
```
"devDependencies": {
    "autoprefixer": "^10.4.2",
    "postcss": "^8.4.8",
    "tailwindcss": "^3.0.23"
}
```

+ go to >>> `tailwind.config.js` file & add these lines...
```
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
],
```

+ must add tailwind directives into `index.css` file
```
@tailwind base;
@tailwind components;
@tailwind utilities;
```

+ if you clone this repo, <br> 1st must run ==> `yarn` 

Font Awesome CDN link (v-6.1.0) use here.