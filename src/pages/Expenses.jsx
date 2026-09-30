import { Paper, Typography, IconButton, Box } from "@mui/material";
import CancelIcon from "@mui/icons-material/Cancel";
import { useEffect } from "react";
import { useState } from "react";

const Expenses = () => {
  const [myData, setMyData] = useState([]);
  let ammount = 0;
  const handelDelete = (item) => {
                fetch(`http://localhost:3000/myData/${item.id}`, {
                  method: "DELETE",
                }).then(() => {
                  setMyData(myData.filter((expense) => expense.id !== item.id));
                });
              };
  useEffect(() => {
    fetch("http://localhost:3000/myData")
      .then((response) => response.json())
      .then((data) => setMyData(data));
  }, []);
  return (
    <Box>
      {myData.map((item) => {
        ammount += item.price;
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
                handelDelete(item)
              }}
            >
              <CancelIcon />
            </IconButton>
          </Paper>
        );
      })}
      <Typography
        variant="body1"
        color="initial"
        sx={{ mt: "30px", width: "100%", textAlign: "center" }}
      >
        All You Spend {ammount}$
      </Typography>
    </Box>
  );
};

export default Expenses;
