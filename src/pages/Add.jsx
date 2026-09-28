import { TextField, InputAdornment, Box, styled, Button } from "@mui/material";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import { indigo } from "@mui/material/colors";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  // @ts-ignore
  backgroundColor: theme.palette.malak.main,
  "&:hover": {
    backgroundColor: theme.palette.malak.main,
    scale: "0.9",
  },
}));
const Add = () => {
  let navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [price, setPrice] = useState(0);

  return (
    <Box component="form"
    autoComplete="off">
      <TextField
        onChange={(eo) => {
          setTitle(eo.target.value);
        }}
        label="Title"
        id="filledStartId"
        sx={{ m: 1, width: "35ch" }}
        slotProps={{
          input: {
            startAdornment: (
              <InputAdornment position="start">👉</InputAdornment>
            ),
          },
        }}
        variant="filled"
      />
      <br></br>
      <TextField
        onChange={(eo) => {
          setPrice(Number(eo.target.value));
        }}
        label="Price"
        id="filledStartId"
        sx={{ m: 1, width: "35ch" }}
        slotProps={{
          input: {
            startAdornment: <InputAdornment position="start">$</InputAdornment>,
          },
        }}
        variant="filled"
      />
      <br />
      <ColorButton
        sx={{ ml: "230px", mt: "10px" }}
        variant="contained"
        onClick={() => {
          if (!title.trim() || !price) {
            alert("you can't add an empty value");
            return;
          }
          fetch("http://localhost:3000/myData", {
            method: "post",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ title, price }),
          }).then(() => {
            navigate("/")
          });
        }}
      >
        submet
        <ArrowForwardIcon />
      </ColorButton>
    </Box>
  );
};

export default Add;
