import Button from "@mui/material/Button";
import { Card as MuiCard } from "@mui/material";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import GroupsIcon from "@mui/icons-material/Groups";
import CommentIcon from "@mui/icons-material/Comment";
import InsertLinkIcon from "@mui/icons-material/InsertLink";
import Typography from "@mui/material/Typography";

const Card = ({ card }) => {
  return (
    <MuiCard
      sx={{
        cursor: "pointer",
        boxShadow: "0 1px 1px rgba(0,0,0, 0.2)",
      }}
    >
      {card?.cover && (
        <CardMedia
          sx={{ height: 140 }}
          image={card.cover}
          title="green iguana"
        />
      )}
      <CardContent
        sx={{
          p: 1.5,
          "&:last-child": { p: 1.5 },
        }}
      >
        <Typography>{card?.title}</Typography>
      </CardContent>
      <CardActions
        sx={{
          p: "0 4px 8px 4px",
        }}
      >
        <Button size="small" startIcon={<GroupsIcon />}>
          {card.memberIds.length}
        </Button>
        <Button size="small" startIcon={<CommentIcon />}>
          {card.comments.length}
        </Button>
        <Button size="small" startIcon={<InsertLinkIcon />}>
          {card.attachments.length}
        </Button>
      </CardActions>
    </MuiCard>
  );
};

export default Card;
