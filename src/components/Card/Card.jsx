import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';


const useStyles = makeStyles({
  root: {
    maxWidth: 500,
    justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginLeft: "auto",
        marginRight: "auto",
  },
  media: {
    height: 300,
  },
});

export default function MediaCard({title, repo, link, description, image, color}) {
  const classes = useStyles();

  return (
    <Card className={classes.root} style={{backgroundColor: "grey"}}>
      <CardActionArea color={color}>
        <CardMedia
        component="img"
          height="auto"
          image={process.env.PUBLIC_URL+image}
          title={title}
        />
        <CardContent color={color}>
          <Typography gutterBottom variant="h5" component="h2">
            {title}
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            {description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions style={{backgroundColor: "black"}}>
        <Button size="small" color="primary" href={repo} target="_blank">
          GitHub Repository
        </Button>
        <Button size="small" color="primary" href={link} target="_blank">
          URL
        </Button>
      </CardActions>
    </Card>
  );
}
