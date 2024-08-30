import { Box, Button, Divider, Stack, styled } from "@mui/material";
import { useNavigate } from "react-router-dom";

const MenuStack = styled(Stack)(() => ({
  display: "flex",
  flexGrow: 1,
  justifyContent: "space-around",
}));

const MenuButton = ({ children, onClick }) => (
  <Button onClick={onClick} sx={{ my: 2, color: "white", display: "block" }}>
    {children}
  </Button>
);

function Menu() {
  const navigate = useNavigate();

  return (
    <Box
      sx={{
        flexGrow: 1,
        display: { xs: "flex", md: "flex" },
        margin: "0 10vw",
      }}
    >
      <MenuStack
        direction="row"
        divider={<Divider variant="middle" orientation="vertical" flexItem />}
      >
        <MenuButton onClick={() => navigate("calculadora")}>
          Calculadora
        </MenuButton>
        <MenuButton onClick={() => navigate("modelos")}>Modelos</MenuButton>
        <MenuButton>Link 1</MenuButton>
      </MenuStack>
    </Box>
  );
}

export default Menu;
