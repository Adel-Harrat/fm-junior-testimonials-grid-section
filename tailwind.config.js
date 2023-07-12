/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "tw-violet": "hsl(263, 55%, 52%)",
        "tw-grayish-blue": "hsl(217, 19%, 35%)",
        "tw-blackish-blue": "hsl(219, 29%, 14%)",
        "tw-white": "hsl(0, 0%, 100%)",
        "tw-light-gray": "hsl(0, 0%, 81%)",
        "tw-light-grayish-blue": "hsl(210, 46%, 95%)",
        // 1. "Verified Graduate" has the same color as the person's name with 50% opacity
        // 2. Review paragraphs inside the quotations have the same color as well, but are at 70% opacity
      },
    },
  },
  plugins: [],
};
