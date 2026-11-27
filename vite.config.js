import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// base relativo: o build abre em qualquer pasta ou subcaminho
export default defineConfig({ plugins: [react()], base: './' })
