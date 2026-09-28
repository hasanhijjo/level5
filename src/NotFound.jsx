import { Box, Stack, Typography, Button } from "@mui/material";
import { useNavigate } from "react-router";

export default function NotFound() {
  const navigate = useNavigate();

  return (
    <Stack
      sx={{
        minHeight: "80vh",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        p: { xs: 2.5, sm: 5 },
      }}
    >
       {/*stack فيها flex تلقائي*/}
      <Box
        sx={{
          maxWidth: { xs: 340, sm: 600 },
          width: "100%",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "5rem", sm: "8rem" },
            fontWeight: "bold",
            color: "text.disabled",
          }}
        >
          404
        </Typography>

        <Typography
          variant="h4"
          sx={{
            mb: 2,
            fontSize: { xs: "1.5rem", sm: "2rem" },
          }}
        >
          Page not found
        </Typography>

        <Typography variant="body1" color="text.secondary" sx={{ mb: 4 }}>
          Sorry, the page you are looking for doesn't exist.
        </Typography>

        <Button
          variant="contained"
          size="large"
          onClick={() => navigate("/")}
          sx={{ px: 5 }}
        >
          Go Back Home
        </Button>
      </Box>
    </Stack>
  );
}
