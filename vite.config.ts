// Author: Ibrahim Salami
// Task 1: React + TypeScript setup, adapted from the official Vite template.

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
})
