import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
    server: {
        port: 5173,
        open: true,
    },

    plugins: [react()],
});
