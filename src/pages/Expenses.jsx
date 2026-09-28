import { Paper, Typography, IconButton, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
import { useState } from "react";

const Expenses = () => {
  const [myData, setMyData] = useState([]);
  useEffect(() => {
    fetch("http://localhost:3000/myData")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, [myData]);
  return (
    <Box>
      {myData.map((item) => {
        return (
          <Paper
            key={item.id}
            sx={{
              width: "350px",
              display: "flex",
              justifyContent: "space-between",
              mt: "25px",
              pt: "25px",
              pb: "10px",
              position: "relative",
            }}
          >
            <Typography
              sx={{ ml: "16px", fontSize: "20px" }}
              variant="h5"
              color="initial"
            >
              {item.title}
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
              {item.price}$
            </Typography>
            <IconButton
              sx={{ position: "absolute", top: "0", right: "0" }}
              onClick={() => {
                fetch(`http://localhost:3000/myData/${item.id}`, {
                  method: "DELETE",
                });
              }}
            >
              <CancelIcon />
            </IconButton>
          </Paper>
        );
      })}
    </Box>
  );
};

export default Expenses;
