import React, { useState } from "react";
import {
  Box,
  Button,
  Typography,
  Card,
  CardMedia,
  CardContent,
  CardActions,
} from "@mui/material";
import AddShoppingCartIcon from "@mui/icons-material/AddShoppingCart";
import Navbar from "./Navbar";

function Dashborad({ Sample, count, setCount }) {
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
              maxWidth: 300,
              boxShadow: "0px 4px 6px rgba(0, 0, 0, 0.1)",
              backgroundColor: "#f9f9f9",
            }}
          >
            <CardMedia
              sx={{ height: 150 }}
              image={item.imageUrl}
              alt={item.name}
            />
            <CardContent sx={{ p: 2, backgroundColor: "#f9f9f9" }}>
              <Typography variant="h5">{item.name}</Typography>
              <Typography variant="body2" color="#888888">
                {item.description}
              </Typography>
            </CardContent>
            <CardActions sx={{ p: 2 }}>
              <Button
                variant="outlined"
                fullWidth
                onClick={() => setCount((prev) => [...prev, item])}
              >
                <AddShoppingCartIcon sx={{ mr: 1 }} /> Add to cart
              </Button>
            </CardActions>
          </Card>
        ))}
      </Box>
    </div>
  );
}

export default Dashborad;
