import React, { useState } from "react";
import rtlPlugin from "stylis-plugin-rtl";
import createCache from "@emotion/cache";
import UnitPage from "./pages/UnitPage";
import ShowByPage from "./pages/ShowByPage";
import LoginPage from "./pages/LoginPage";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Box, CssBaseline, Grid, Typography } from "@mui/material";
import { prefixer } from "stylis";
import { CacheProvider } from "@emotion/react";

import "@fontsource/suez-one";
import "./App.css";

const theme = createTheme({
  palette: {
    background: {
      default: " #fbfbfb",
    },
  },
  // typography: {
  //   fontFamily: ["suez-one"].join(","),
  // },
  direction: "rtl", // Both here and <body dir="rtl">
});
// Create rtl cache
const cacheRtl = createCache({
  key: "muirtl",
  stylisPlugins: [prefixer, rtlPlugin],
});

function App() {
  const [isUnitPage, setIsUnitPage] = useState(false);
  const [isShowByPage, setIsShowByPage] = useState(false);
  const [isLoginPage, setIsLoginPage] = useState(true);
  const [username, setUsername] = useState(" ");
  const [isAdmin, setIsAdmin] = useState(false);
  const [unitAccess, setUnitAccess] = useState<Array<string>>([]);
  const [selectedUnit, setSelectedUnit] = useState(" ");

  return (
    <CacheProvider value={cacheRtl}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box dir="rtl">
          <Grid container spacing={0} direction="column" alignItems="center">
            <Typography
              variant="h3"
              component="div"
              sx={{ m: 1, fontWeight: 700 }}
            >
              ויטלי מקמ''שים בע''מ
            </Typography>
            <Grid item xs={3}>
              {isLoginPage && (
                <LoginPage
                  setIsLoginPage={setIsLoginPage}
                  setIsUnitPage={setIsUnitPage}
                  setUsername={setUsername}
                  setIsAdmin={setIsAdmin}
                  setUnitAccess={setUnitAccess}
                />
              )}
            </Grid>
            <Grid item xs={3}>
              {isUnitPage && (
                <UnitPage
                  setIsLoginPage={setIsLoginPage}
                  setIsUnitPage={setIsUnitPage}
                  setIsShowByPage={setIsShowByPage}
                  username={username}
                  isAdmin={isAdmin}
                  unitAccess={unitAccess}
                  setSelectedUnit={setSelectedUnit}
                />
              )}
            </Grid>
            <Grid item xs={3}>
              {isShowByPage && (
                <ShowByPage
                  setIsUnitPage={setIsUnitPage}
                  setIsShowByPage={setIsShowByPage}
                  username={username}
                  isAdmin={isAdmin}
                  selectedUnit={selectedUnit}
                />
              )}
            </Grid>
          </Grid>
        </Box>
      </ThemeProvider>
    </CacheProvider>
  );
}

export default App;
