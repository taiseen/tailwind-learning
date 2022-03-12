11-Mar-2022

## TailwindCSS CLI installation process step by step...

1. npm init -y
2. npm i -D tailwindcss
3. npx tailwindcss init
4. create + linking ==> html + css + js files
5. create ==> .vscode/settings.json file & 
```    
{
    "css.validate": false,
    "tailwindCSS.emmetCompletions": true
}  
```     
6. inside package.json file, write build cmd 
```
"scripts": {
    "build": "tailwindcss -i ./src/tailwind.css -o ./assets/css/style.css -w"
}
```

7. must add `'./**/*.html'` inside tailwind.config.js > content:[ ]
    + otherwise tailwind don't work properly

8. npm run build 