import { defineConfig/* , loadEnv */ } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
})

/* export default defineConfig(({ mode }) => {
  const env = loadEnv("mock", import.meta.env.cwd(), "");
  const envValues = {
    "import.meta.env": Object.entries(env).reduce((prev, [key, val]) => {
      console.log(key, val);
      return {
        ...prev,
        [key]: val,
      };
    }, {}),
  };

  return {
    plugins: [react()],
    define: envValues,
  };
}); */