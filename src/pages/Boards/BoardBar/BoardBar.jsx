import Box from "@mui/material/Box";
import Chip from "@mui/material/Chip";
import DashboardIcon from "@mui/icons-material/Dashboard";
import VpnLockIcon from "@mui/icons-material/VpnLock";
import AddToDriveIcon from "@mui/icons-material/AddToDrive";
import Avatar from "@mui/material/Avatar";
import AvatarGroup from "@mui/material/AvatarGroup";
import Tooltip from "@mui/material/Tooltip";
import Button from "@mui/material/Button";
import PersonAddIcon from "@mui/icons-material/PersonAdd";

const BoardBar = () => {
  return (
    <Box
      px={2}
      sx={{
        width: "100%",
        height: (theme) => theme.trello.boardBarHeight,
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        gap: 2,
        overflowX: "auto",
        borderTop: "1px solid #00bfa5",
      }}
    >
      <Box
        sx={{
          display: "flex",
          gap: 1,
          alignItems: "center",
        }}
      >
        <Chip
          sx={{
            color: "primary.main",
            bgcolor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<DashboardIcon />}
          label="Duong Ha Tuan"
          clickable
        />
        <Chip
          sx={{
            color: "primary.main",
            bgcolor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<VpnLockIcon />}
          label="Public/Private WorkSpace"
          clickable
        />
        <Chip
          sx={{
            color: "primary.main",
            bgcolor: "white",
            border: "none",
            paddingX: "5px",
            borderRadius: "4px",
            "& .MuiSvgIcon-root": {
              color: "primary.main",
            },
            "&:hover": {
              bgcolor: "primary.50",
            },
          }}
          icon={<AddToDriveIcon />}
          label="Google Drive"
          clickable
        />
      </Box>
      <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}></Box>
      <Button variant="outlined" startIcon={<PersonAddIcon />}>
        Invite
      </Button>
      <AvatarGroup max={4}>
        <Tooltip title="dhtuan">
          <Avatar alt="dhtuan" src="./src/assets/avatar.jpg" />
        </Tooltip>
        <Tooltip title="dhtuan">
          <Avatar alt="dhtuan" src="./src/assets/avatar.jpg" />
        </Tooltip>
      </AvatarGroup>
    </Box>
  );
};

export default BoardBar;
