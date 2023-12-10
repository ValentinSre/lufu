import * as React from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardActionArea from '@mui/material/CardActionArea';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';

interface ExplanationProps {
    description: string;
    image: string;
    imageLabel: string;
    title: string;
}

export default function Explanation(props: ExplanationProps) {
  const { description, image, imageLabel, title } = props;
  return (
    <Grid item xs={12} md={6}>
      <CardActionArea component="a" href="#">
        <Card sx={{ display: 'flow' }}>
          <CardContent sx={{ flex: 1 }}>
            <Typography component="h2" variant="h5">
              {title}
            </Typography>
            <Typography variant="subtitle1" paragraph style={{ textAlign: 'justify', textJustify: 'inter-word', paddingTop: '15px'}}>
              {description}
            </Typography>
            <CardMedia
              component="img"
              sx={{ height: 150, maxWidth: 400 }}
              image={image}
              alt={imageLabel}
            />
          </CardContent>
        </Card>
      </CardActionArea>
    </Grid>
  );
}