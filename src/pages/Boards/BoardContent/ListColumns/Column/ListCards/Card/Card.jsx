import Button from "@mui/material/Button";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupsIcon from "@mui/icons-material/Groups";
import CommentIcon from "@mui/icons-material/Comment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Typography from "@mui/material/Typography";

const Card = ({ temporaryHideMedia }) => {
  if (temporaryHideMedia) {
    return (
      <MuiCard
        sx={{
          cursor: "pointer",
          boxShadow: "0 1px 1px rgba(0,0,0, 0.2)",
        }}
      >
        <CardMedia
          sx={{ height: 140 }}
          image="./src/assets/avatar.jpg"
          title="green iguana"
        />
        <CardContent
          sx={{
            p: 1.5,
            "&:last-child": { p: 1.5 },
          }}
        >
          <Typography>Thu Yen</Typography>
        </CardContent>
        <CardActions
          sx={{
            p: "0 4px 8px 4px",
          }}
        >
          <Button size="small" startIcon={<GroupsIcon />}>
            20
          </Button>
          <Button size="small" startIcon={<CommentIcon />}>
            15
          </Button>
          <Button size="small" startIcon={<InsertLinkIcon />}>
            10
          </Button>
        </CardActions>
      </MuiCard>
    );
  }
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0, 0.2)",
      }}
    >
      <CardContent
        sx={{
          p: 1.5,
          "&:last-child": { p: 1.5 },
        }}
      >
        <Typography>Thu Yen</Typography>
      </CardContent>
      <CardActions
        sx={{
          p: "0 4px 8px 4px",
        }}
      >
        <Button size="small" startIcon={<GroupsIcon />}>
          20
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          15
        </Button>
        <Button size="small" startIcon={<InsertLinkIcon />}>
          10
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
