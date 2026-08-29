import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'


// https://vite.dev/config/
export default defineConfig(({ command }) => {
  return {
    plugins: [react()],
    // Si estás en desarrollo local usa '/', si estás compilando para GitHub Pages usa el nombre de tu repo
    base: command === 'serve' ? '/' : '/portfolio-web/',
  }
})
