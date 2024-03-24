import { mode, StyleFunctionProps } from "@chakra-ui/theme-tools";
export const globalStyles = {
  colors: {
    brand: {
      100: "#8244ED",
      200: "#2C0A67",
    },
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        fontFamily: "Inter",
        letterSpacing: "-0.5px",
      },

      html: {
        fontFamily: "DM Sans",
      },
    }),
  },
};
