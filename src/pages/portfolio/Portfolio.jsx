import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import projects from "../../projects.json";
import Card from "../../components/Card/Card";
import Grid from "@material-ui/core/Grid";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: "100%",
  },
}));

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <Grid
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </Grid>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    "aria-controls": `scrollable-auto-tabpanel-${index}`,
  };
}


export default function ScrollableTabsButtonAuto() {
  const classes = useStyles();
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box>
      <Grid container alignContent="stretch" wrap="wrap">
        <Grid item xs={12}>
          <Typography
            variant="h3"
            className={classes.root}
            style={{
              textAlign: "center",
              color: "white",
              paddingTop: 10,
              paddingBottom: 10,
            }}
          >
            Portfolio
          </Typography>
        </Grid>
      
          <Grid item xs={12}>
            <AppBar
              position="static"
              color="secondary"
              style={{ marginBottom: 20 }}
            >
              <Tabs
                value={value}
                onChange={handleChange}
                indicatorColor="primary"
                textColor="primary"
                variant="scrollable"
                scrollButtons="auto"
                aria-label="scrollable auto tabs example"
              >
                {projects.map((project, i) => (
                  <Tab
                    label={project.title}
                    {...a11yProps(i)}
                    key={project.id}
                  />
                ))}
              </Tabs>
            </AppBar>
          </Grid>
          <Grid item xs={12}>
            {projects.map((project, i) => (
              <TabPanel className={classes.panel} value={value} index={i}>
                <Card
                  color="primary"
                  key={project.id}
                  title={project.title}
                  repo={project.repository}
                  link={project.liveLink}
                  description={project.description}
                  image={project.image}
                />
              </TabPanel>
            ))}
          </Grid>
      </Grid>
    </Box>
  );
}
