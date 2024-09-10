import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import TrelloIcon from "~/assets/trello.svg";
import { Typography } from "@mui/material";
import WorkSpace from "./Menus/WorkSpace";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trelloCustom.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}
    >
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <AppsIcon sx={{ color: "primary.main" }} />
        <img
          src={TrelloIcon}
          alt="trelloIcon"
          style={{ width: "30px", height: "30px" }}
        />
        <Typography
          sx={{ fontSize: "1.2rem", fontWeight: "bold", color: "primary.main" }}
        >
          Trello
        </Typography>
        <WorkSpace />
        <Recent />
        <Started />
        <Templates />
      </Box>
      <Box>
        <ModeSelect />
      </Box>
    </Box>
  );
};

export default AppBar;
