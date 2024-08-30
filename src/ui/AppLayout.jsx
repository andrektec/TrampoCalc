import { Outlet, Link as RouterLink } from "react-router-dom";
import Menu from "./Menu";
import { AppBar, Box, Link, Stack } from "@mui/material";

function AppLayout() {
  return (
    <>
      <AppBar>
        <Stack direction="row">
          <div
            style={{
              width: "33vw",
              textAlign: "center",
              alignContent: "center",
            }}
          >
            <Link
              variant="h5"
              color="inherit"
              underline="none"
              component={RouterLink}
              to="/"
            >
              TrampoCalc
            </Link>
          </div>
          <Menu />
        </Stack>
      </AppBar>
      <Box sx={{ margin: "5em" }}>
        <Outlet />
      </Box>
    </>
  );
}

export default AppLayout;
