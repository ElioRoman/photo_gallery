import React, { useState, useEffect } from "react";
import { fetchPhotos } from "../api/unsplash.ts";
import { Container, Grid, TextField, Button, Typography } from "@mui/material";
import PhotoCard from "./PhotoCard.tsx";
import { IPhoto } from "../types/index.ts";

const PhotoGallery: React.FC = () => {
  const [photos, setPhotos] = useState<IPhoto[]>([]);
  const [query, setQuery] = useState("nature");
  const [page, setPage] = useState(1);

  useEffect(() => {
    loadPhotos();
  }, [query, page]);

  const loadPhotos = async () => {
    const response = await fetchPhotos(query, page);
    setPhotos(response.data.results);
  };

  const handleSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQuery(event.target.value);
  };

  return (
    <Container>
      <Typography variant="h4" gutterBottom>
        Photo Gallery
      </Typography>
      <TextField
        label="Search Photos"
        variant="outlined"
        fullWidth
        value={query}
        onChange={handleSearch}
      />
      <Grid container spacing={3} style={{ marginTop: "20px" }}>
        {photos?.map((photo) => (
          <Grid item xs={12} sm={6} md={4} key={photo.id}>
            <PhotoCard photo={photo} />
          </Grid>
        ))}
      </Grid>
      {query && (
        <div style={{ marginTop: "20px", textAlign: "center" }}>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage((prev) => Math.max(prev - 1, 1))}
            disabled={page === 1}
          >
            Previous
          </Button>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setPage((prev) => prev + 1)}
            style={{ marginLeft: "10px" }}
          >
            Next
          </Button>
        </div>
      )}
    </Container>
  );
};

export default PhotoGallery;
