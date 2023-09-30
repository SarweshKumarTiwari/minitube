/** @type {import('tailwindcss').Config} */
export const content = ["./src/**/*.{js,jsx,ts,tsx,html,css}"];
export const theme = {
  extend: {
    colors:{
      "greenc":"#259784",
      "greenc-200":"#004d40",
      "red":"#FDF2F2",
      "red-100":"#FDE8E8",
      "red-200":"#FBD5D5",
      "red-300":"#F8B4B4",
      "red-400":"#F98080",
      "red-500":"#F05252",
      "red-600":"#E02424",
      "red-700":"#C81E1E",
      "red-800":"#9B1C1C"
    },
    screens:{
      "sm":"434px"
    }
  },
};
export const plugins = [];

