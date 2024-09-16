import Box from "@mui/material/Box";
import ModeSelect from "~/components/ModeSelect";
import AppsIcon from "@mui/icons-material/Apps";
import TrelloIcon from "~/assets/trello.svg";
import Typography from "@mui/material/Typography";
import WorkSpace from "./Menus/WorkSpace";
import Recent from "./Menus/Recent";
import Started from "./Menus/Started";
import Templates from "./Menus/Templates";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import NotificationsIcon from "@mui/icons-material/Notifications";
import Badge from "@mui/material/Badge";
import Tooltip from "@mui/material/Tooltip";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Profile from "./Menus/Profile";

const AppBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.appBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
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

        <Box sx={{ display: { xs: "none", md: "flex" }, gap: 1 }}>
          <WorkSpace />
          <Recent />
          <Started />
          <Templates />
          <Button variant="outlined">Create</Button>
        </Box>
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
        <TextField
          id="standard-search"
          label="Search..."
          size="small"
          type="search"
          variant="outlined"
          sx={{ minWidth: 120 }}
        />
        <Tooltip title="Notifications" sx={{ cursor: "pointer" }}>
          <Badge variant="dot" color="error">
            <NotificationsIcon sx={{ color: "primary.main" }} />
          </Badge>
        </Tooltip>
        <HelpOutlineIcon sx={{ color: "primary.main", cursor: "pointer" }} />
        <ModeSelect />
        <Profile />
      </Box>
    </Box>
  );
};

export default AppBar;
