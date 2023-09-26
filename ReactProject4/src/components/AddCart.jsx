import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import RemoveShoppingCartIcon from "@mui/icons-material/RemoveShoppingCart";
import Navbar from "./Navbar";

function AddCart({ Sample, count }) {
  return (
    <div>
      <Navbar count={count} />
      <Box
        sx={{
          mt: 3,
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: 5,
        }}
      >
        {Sample.map((item) => (
          <Card
            sx={{
              width: 300,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <CardMedia
              sx={{ height: 140 }}
              image={item.imageUrl}
              alt={item.name}
            />
            <CardContent sx={{ p: 2, backgroundColor: "#f9f9f9" }}>
              <Typography variant="h5">{item.name}</Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button variant="outlined" color="error" fullWidth>
                <RemoveShoppingCartIcon sx={{ mr: 1 }} /> Remove cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default AddCart;
