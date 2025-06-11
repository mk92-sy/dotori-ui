import react from "@vitejs/plugin-react";
import { type PluginOption, defineConfig } from "vite";
import path from "node:path";
import { fileURLToPath } from "url";
import dts from "vite-plugin-dts";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

export default defineConfig({
  plugins: [
    react(),
    dts({
      include: ["src"],
      rollupTypes: true,
    }),
  ] as PluginOption[],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "DotoriUI",
      fileName: (format) => `dotori-ui.${format}.js`,
      formats: ["es"],
    },
    rollupOptions: {
      external: (id) =>
        /^react(\/.*)?$/.test(id) || /^react-dom(\/.*)?$/.test(id),
      output: {
        intro: (chunk) => {
          if (chunk.fileName === "dotori-ui.es.js") {
            return `import "./dotori-ui.css";`;
          }
          return "";
        },
        globals: {
          react: "React",
          "react-dom": "ReactDOM",
        },
      },
    },
  },
});
