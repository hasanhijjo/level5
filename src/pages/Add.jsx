import { TextField, InputAdornment, Box, styled, Button } from "@mui/material";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { indigo } from "@mui/material/colors";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import { Scale } from "@mui/icons-material";
const ColorButton = styled(Button)(({ theme }) => ({
  color: theme.palette.getContrastText(indigo[500]),
  // @ts-ignore
  backgroundColor: theme.palette.myColor.main,
  '&:hover': {
    backgroundColor: theme.palette.myColor.light,
    scale:"0.9"
  },
}));
const Add = () => {
  return (
    <Box component="form">
        <TextField
          label="Titele"
          id="filledStartId"
          sx={{ m: 1, width: '35ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">👉</InputAdornment>,
            },
          }}
          variant="filled"
        />
        <br></br>
          <TextField
          label="Price"
          id="filledStartId"
          sx={{ m: 1, width: '35ch' }}
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start">$</InputAdornment>,
            },
          }}
          variant="filled"
        />
        <br/>
        <ColorButton sx={{ml:"230px",mt:"10px"}}variant="contained">submet<ArrowForwardIcon/></ColorButton>
    </Box>
  );
};

export default Add;
