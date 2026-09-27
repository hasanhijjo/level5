
import { Paper, Typography, IconButton } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";

const Expenses = () => {
  return (
  <div>
      <Paper
        sx={{
          width: "350px",
          display: "flex",
          justifyContent: "space-between",
          mt: "25px",
          pt: "25px",
          pd: "10px",
          position: "relative",
        }}
      >
        <Typography
          sx={{ ml: "16px", fontSize: "20px" }}
          variant="h5"
          color="initial"
        >
          Book
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: "35px",
            fontSize: "20px",
            fontWeight: "600",
            opacity: "0.7",
          }}
        >
          100$
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CancelIcon />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          width: "350px",
          display: "flex",
          justifyContent: "space-between",
          mt: "25px",
          pt: "25px",
          pd: "10px",
          position: "relative",
        }}
      >
        <Typography
          sx={{ ml: "16px", fontSize: "20px" }}
          variant="h5"
          color="initial"
        >
          Book
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: "35px",
            fontSize: "20px",
            fontWeight: "600",
            opacity: "0.7",
          }}
        >
          100$
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CancelIcon />
        </IconButton>
      </Paper>
      <Paper
        sx={{
          width: "350px",
          display: "flex",
          justifyContent: "space-between",
          mt: "25px",
          pt: "25px",
          pd: "10px",
          position: "relative",
        }}
      >
        <Typography
          sx={{ ml: "16px", fontSize: "20px" }}
          variant="h5"
          color="initial"
        >
          Book
        </Typography>
        <Typography
          variant="h6"
          sx={{
            mr: "35px",
            fontSize: "20px",
            fontWeight: "600",
            opacity: "0.7",
          }}
        >
          100$
        </Typography>
        <IconButton sx={{ position: "absolute", top: "0", right: "0" }}>
          <CancelIcon />
        </IconButton>
      </Paper>
    </div>
  );
}

export default Expenses;
