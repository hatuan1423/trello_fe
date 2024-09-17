import Box from "@mui/material/Box";
import ListColumns from "./ListColumns/ListColumns";

const BoardContent = () => {
  return (
    <Box
      sx={{
        backgroundColor: "primary.main",
        width: "100%",
        height: (theme) => theme.trello.boardContentHeight,
        p: "10px 0",
      }}
    >
      <ListColumns />
    </Box>
  );
};

export default BoardContent;
