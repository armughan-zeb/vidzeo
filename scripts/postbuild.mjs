import { copyFileSync } from 'node:fs'

copyFileSync('dist/index.html', 'dist/404.html')
console.log('Copied index.html -> 404.html for SPA routing on GitHub Pages')