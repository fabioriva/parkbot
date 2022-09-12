import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    // Name of the component
    MuiCard: {
      defaultProps: {
        // The props to change the default for.
        variant: "outlined", // No more ripple!
      },
    },
    MuiPaper: {
      defaultProps: {
        // The props to change the default for.
        variant: "outlined", // No more ripple!
      },
    },
    MuiTooltip: {
      styleOverrides: {
        tooltip: {
          backgroundColor: "black",
          color: "white",
          fontSize: 14,
        },
      },
    },
  },
  palette: {
    mode: "light",
    ce: "#d4edda",
    cu: "#f8d7da",
    pp: "#d1ecf1",
    op: "#fff3cd",
  },
});

export default theme;
