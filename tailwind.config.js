/** @type {import('tailwindcss').Config} */
module.exports = {
  // NOTE: Update this to include the paths to all files that contain Nativewind classes.
  content: ["./app/**/*.{js,jsx,ts,tsx}", "./components/**/*.{js,jsx,ts,tsx}"],
  presets: [require("nativewind/preset")],
  theme: {
    extend: {
      colors: {
        primary: {
          default: "#FF6B00", // Vibrant orange for CTAs (Add to Cart, Buy Now)
          dark: "#E65A00", // Hover / pressed state
          light: "#FF8640", // Subtle highlights
        },
        secondary: {
          default: "#00B894", // Teal for accents (tags, highlights)
          dark: "#009C7A",
          light: "#4ED9C0",
        },
        background: {
          default: "#FFFFFF", // Clean product background
          soft: "#F8F9FA", // Light gray for sections/cards
        },
        text: {
          default: "#1A1A1A", // Almost black for body text
          muted: "#6C757D", // Subtle secondary text
          light: "#ADB5BD", // Placeholder / disabled
        },
        success: "#27AE60",
        error: "#E63946",
      },
      fontFamily: {
        "poppins-regular": ["Poppins-Regular"],
        "poppins-bold": ["Poppins-Bold"],
        "poppins-light": ["Poppins-Light"],
        "poppins-thin": ["Poppins-Thin"],
        "poppins-medium": ["Poppins-Medium"],
      },
    },
  },
  plugins: [],
};
