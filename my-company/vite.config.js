import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/alx-fe-reactjs/', // 👈 this must match your GitHub repo name
})
