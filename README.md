14-Mar-2022

# Toggling SideBar Menu | React + Tailwind

+ yarn
+ yarn start
+ yarn build


## Package Installed 
+ yarn create react-app .
+ yarn add tailwindcss postcss autoprefixer
+ npx tailwindcss init -p

+ go to ==> `tailwind.config.js` file & add these lines...
```  
content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html"
],
```

+ add these lines into ==> `index.css` file

```
@tailwind base;
@tailwind components;
@tailwind utilities;
```



<br />

<img src="./demo.gif" style="width: 100%; height: 100%;"/>