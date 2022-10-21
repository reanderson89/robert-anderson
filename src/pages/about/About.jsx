import React from "react";
import Grid from "@material-ui/core/Grid";
import { Typography, CardMedia } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const aboutMe = `My name is Robert Anderson. I am currently a Full Stack Web Instructor teaching mainly Java and Javascript and a handful of the other technologies that come with them to cohorts of 50+ students from broad and diverse backgrounds. `;

const aboutMeCont = `Teaching has always been a passion for me because there is real joy in creating success for others and because it pushes me to constantly learn and develop new skills. The more I learn about development the more I realize how much I don't know, and that thought excites me to the possibilities of what I can learn next.`;

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
    backgroundColor: theme.palette.background.paper,
  },
  typo: {
    color: "lightgrey",
  },
  media: {
    height: 250,
    maxWidth: 250,
  },
}));
const About = ({ color }) => {
  const classes = useStyles();

  return (
    <Grid container>
      <Grid container justifyContent="center" style={{ marginTop: 24 }}>
        <Grid item sm={3} xs={6}>
          <CardMedia
            className={classes.media}
            image={process.env.PUBLIC_URL + "/assets/images/githubPhoto.jpeg"}
            title="Robert Anderson"
          />
        </Grid>
      </Grid>
      <Box m={2} p={2}>
        <Grid container direction="column" alignItems="center">
          <Grid item sm={6} xs={6}>
            <Typography paragraph className={classes.typo}>
              {aboutMe}
            </Typography>
            <Typography paragraph className={classes.typo}>
              {aboutMeCont}
            </Typography>
          </Grid>
          <Grid item sm={6} xs={6}></Grid>
        </Grid>
      </Box>
    </Grid>
  );
};

export default About;
