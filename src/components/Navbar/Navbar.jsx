import * as React from "react";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import { useAuth } from "../../context/AuthContext";
import { Link } from "@mui/material";

const Navbar = () => {
  //
  const {
    handleLogout,
    user: { email },
  } = useAuth();
  // console.log(user);
  console.log(email, "email");

  return (
    <Container maxWidth="xl">
      <Toolbar disableGutters>
        <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}></Box>

        <Box sx={{ flexGrow: 0 }}>
          {email ? (
            <Button
              sx={{ my: 2, color: "pramery", display: "block" }}
              onClick={handleLogout}
            >
              Выйти
            </Button>
          ) : null}

          {email ? null : (
            <Link to="/auth">
              <Button
                sx={{
                  my: 2,
                  color: "pramery",
                  display: "block",
                }}
                onClick={handleLogout}
              >
                Авторизоваться
              </Button>
            </Link>
          )}
        </Box>
      </Toolbar>
    </Container>
  );
};
export default Navbar;
