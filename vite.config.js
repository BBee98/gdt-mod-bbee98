import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: '../gdt-mod-bbee98', // Define el directorio de salida
    assetsDir: '', // Elimina la carpeta de assets
    rollupOptions: {
      input: './src/main.js', // Archivo de entrada principal
      output: {
        entryFileNames: 'main.js', // Renombra el archivo de salida
        assetFileNames: '[name][extname]', // Maneja otros assets (como CSS, si hay)
        chunkFileNames: '[name].js', // Archivos chunk
      },
    },
    manifest: false, // No genera el manifest.json
    minify: true, // Minificación para el main.js
    emptyOutDir: false, // Esto evita que se borre el contenido existente
    sourcemap: false, // Si quieres evitar la generación de mapas de fuente
  },

})
