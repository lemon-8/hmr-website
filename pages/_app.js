import { ChakraProvider, extendTheme } from "@chakra-ui/react";
import "@fontsource/poppins/100.css";
import "@fontsource/poppins/200.css";
import "@fontsource/poppins/300.css";
import "@fontsource/poppins/400.css";
import "@fontsource/poppins/500.css";
import "@fontsource/poppins/600.css";
import "@fontsource/poppins/700.css";
import "@fontsource/poppins/800.css";
import "@fontsource/poppins/900.css";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import "@fontsource/inter/800.css";
import "@fontsource/inter/900.css";

function MyApp({ Component, pageProps }) {
  const theme = extendTheme({
    colors: {
      hmrblack: {
        50: "#fff",
        100: "#fff",
        200: "#fff",
        300: "#fff",
        400: "#fff",
        500: "#282B2F",
        600: "#131416",
        700: "#fff",
        800: "#fff",
        900: "#fff",
      },
      hmrcyan: {
        500: "#01CFE7",
      },
      hmrblue: {
        500: "#282B2F",
      },
      hmrgray: {
        500: "#8A8682",
      },
    },
    fonts: {
      heading: "Poppins",
      body: "Inter",
    },
  });
  return (
    <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
  );
}

export default MyApp;
