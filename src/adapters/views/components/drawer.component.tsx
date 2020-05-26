import React from "react";
import MUIDrawer from "@material-ui/core/Drawer";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { makeStyles } from "@material-ui/core";
import { routes } from "../../routes";
import { useLocation, Link } from "react-router-dom";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerLink: {
    color: "inherit",
    textDecoration: "none",
  },
}));

export const Drawer = () => {
  const location = useLocation();

  const classes = useStyles();
  return (
    <MUIDrawer
      variant="permanent"
      anchor="left"
      className={classes.drawer}
      classes={{
        paper: classes.drawerPaper,
      }}
    >
      <Divider />
      <List>
        {routes.map((route) => (
          <Link to={route.url} key={route.title} className={classes.drawerLink}>
            <ListItem selected={route.url === location.pathname} button>
              <ListItemIcon>
                <route.icon />
              </ListItemIcon>
              <ListItemText primary={route.title} />
            </ListItem>
          </Link>
        ))}
      </List>
    </MUIDrawer>
  );
};
