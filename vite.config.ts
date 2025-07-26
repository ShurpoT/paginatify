import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import dts from "vite-plugin-dts";

// https://vite.dev/config/
export default defineConfig({
    publicDir: false,

    server: {
        port: 5173,
        open: true,
    },

    build: {
        sourcemap: true,
        minify: false,

        lib: {
            entry: "src/Components/paginatify/paginatify.tsx",
            name: "paginatify",
            fileName: "paginatify",
        },

        rollupOptions: {
            external: (id) => {
                return ["react", "react-dom", "react/jsx-runtime"].includes(id);
            },

            output: [
                {
                    format: "es",
                    dir: "paginatify",
                    entryFileNames: "paginatify.js",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                },
                {
                    format: "cjs",
                    dir: "paginatify",
                    entryFileNames: "paginatify.cjs.js",
                    globals: {
                        react: "React",
                        "react-dom": "ReactDOM",
                    },
                },
            ],
        },
    },

    plugins: [
        react(),
        dts({
            include: ["src/Components/paginatify/**/*"],
            exclude: ["src/Components/paginatify/**/*.test.tsx"],

            outDir: "paginatify",
            staticImport: true,
            cleanVueFileName: true,
        }),
    ],
});
