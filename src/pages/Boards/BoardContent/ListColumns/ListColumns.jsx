import Box from "@mui/material/Box";
import Column from "./Column/Column";
import { Button } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

function ListColumns() {
  return (
    <Box
      sx={{
        bgColor: "inherit",
        width: "100%",
        height: "100%",
        display: "flex",
        overflowX: "auto",
        overflowY: "hidden",
        "&::-webkit-scrollbar-track": {
          m: 2,
        },
      }}
    >
      <Column />
      <Column />

      <Box
        sx={{
          minWidth: "200px",
          maxWidth: "200px",
          mx: 2,
          borderRadius: "6px",
          height: "fit-content",
          backgroundColor: "#ffffff3d",
        }}
      >
        <Button
          startIcon={<AddIcon />}
          sx={{
            color: "white",
            width: "100%",
            justifyContent: "flex-start",
            pl: 2.5,
            py: 1,
          }}
        >
          Add new column
        </Button>
      </Box>
    </Box>
  );
}

export default ListColumns;
