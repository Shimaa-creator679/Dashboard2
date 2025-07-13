import flowbite from 'flowbite/plugin';

/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
     "./node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}", // Flowbite React
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
 colors: {
  myblue: '#3b82f6',
  myyellow: '#f59e0b',
  side:"#ffffff"
}
    },

  plugins: [
    flowbite
  ],
}
  
}
