"use client";

import * as React from "react";
import { useState, useEffect, useRef, useCallback } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { useSelector } from "react-redux";
import { styled, useTheme } from "@mui/system";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import MuiAppBar from "@mui/material/AppBar";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import Typography from "@mui/material/Typography";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import ListItem from "@mui/material/ListItem";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import MenuItem from "@mui/material/MenuItem";
import Container from "@mui/material/Container";
import Collapse from "@mui/material/Collapse";
import ListItemButton from "@mui/material/ListItemButton";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import MenuIcon from "@mui/icons-material/Menu";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import { assetPaths } from "@/paths/path";
import appRoutes from "@/routes/routes";
import styles from "@/styles/AppLayout.module.css";
import "./globals.css";
import { Toaster } from "react-hot-toast";
import SidebarMenu from "@/components/sidebar/SidebarMenu";

//? Interfaces Start
interface MainProps {
  open?: boolean;
  theme?: any;
}
//? Interfaces End

const drawerWidth = 250;

const Main = styled("main", {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme, open }) => ({
  flexGrow: 1,
  padding: theme.spacing(3),
  transition: theme.transitions.create("margin", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  marginLeft: `-${drawerWidth}px`,
  ...(open && {
    transition: theme.transitions.create("margin", {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  }),
}));

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<MainProps>(({ theme, open }) => ({
  transition: theme.transitions.create(["margin", "width"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  ...(open && {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: `${drawerWidth}px`,
    transition: theme.transitions.create(["margin", "width"], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
  }),
}));

const DrawerHeader = styled("div")<MainProps>(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
  justifyContent: "space-between",
}));

interface AppLayoutProps {
  children: React.ReactNode;
}
// const AppLayout: React.FC<AppLayoutProps> = () => {
//   return (
//     <div>AppLayouts</div>
//   )
// }

const AppLayout = (props) => {
  const theme: any = useTheme();
  const drawerRef = React.useRef(null);
  const [open, setOpen] = useState(true);
  const [routes, setRoutes] = useState(appRoutes);
  const router = useRouter();
  const [openDropdown, setOpenDropdown] = useState(null);

  const handleDrawerOpen = () => setOpen(true);
  const handleDrawerClose = () => setOpen(false);

  const handleDropdownToggle = (dropdownId) => {
    setOpenDropdown((prevDropdown) =>
      prevDropdown === dropdownId ? null : dropdownId
    );
  };

  const { authenticatedUser } = useSelector(({ authStates }) => authStates);

  const activeRoute = (routeName, currentRoute) => {
    return routeName === currentRoute;
  };

  const logOut = (screenData, routeIndex) => {
    if (screenData?.label === "logout") {
      localStorage.removeItem("AuthToken");
      localStorage.removeItem("RefreshToken");
      localStorage.clear();

      router.push("/"); // Redirect to home
      window.location.reload(); // Reload the page after navigating
    } else {
      let routesClone = [...routes];
      let targetData = { ...screenData };
      targetData.showNestedTabs = !targetData.showNestedTabs;
      routesClone.splice(routeIndex, 1, targetData);
      setRoutes(routesClone);
    }
  };

  return (
    <Box sx={{ display: "flex", position: "relative" }}>
      {/* <CssBaseline /> */}
      <Toaster position="top-center" reverseOrder={false} />

      <AppBar position="fixed" open={open}>
        <Toolbar className={styles.customAppBarStyle}>
          <div className={styles.userDetailSection}>
            <IconButton
              aria-label="open drawer"
              onClick={handleDrawerOpen}
              edge="start"
              sx={{ mr: 2, ...(open && { display: "none" }) }}
            >
              <MenuIcon />
            </IconButton>

            <Typography variant="h6" noWrap component="div">
              MILKIA
            </Typography>
          </div>

          <div
            className={`${styles.userDetailSection} ${styles.userInfoSection}`}
          >
            <Typography
              variant="h6"
              noWrap
              component="div"
              className={styles.userName}
            >
              {authenticatedUser ? authenticatedUser?.admin?.name : "not found"}
            </Typography>

            <Image
              src={assetPaths._userIcon}
              alt="User"
              height={50}
              width={50}
              style={{ borderRadius: theme.sizeInPixels._5px }}
            />
          </div>
        </Toolbar>
      </AppBar>

      <Drawer
        ref={drawerRef}
        className={styles.sidebar}
        sx={{
          width: drawerWidth,
          // backgroundImage: `url(${assetPaths.SideBar})`,
          // backgroundSize: 'contain',
          // backgroundRepeat: 'no-repeat',
          // backgroundPosition: 'center',
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
          },
        }}
        variant="persistent"
        anchor="left"
        open={open}
        PaperProps={{
          sx: {
            // backgroundColor: theme.colors._F4F4F4,
            backgroundColor: "#63c2c7",
            // backgroundImage: `url(${assetPaths.SideBar})`,
            // backgroundSize: 'contain',
            // backgroundRepeat: 'no-repeat',
            // backgroundPosition: 'center',
          },
        }}
      >
        <DrawerHeader>
          <span> {null} </span>

          <Image
            src={assetPaths.milkiaAppLogo}
            alt="App Logo"
            // height={60}
            width={120}
            priority
          />

          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "ltr" ? (
              <ChevronLeftIcon className={styles.drawerIcons} />
            ) : (
              <ChevronRightIcon className={styles.drawerIcons} />
            )}
          </IconButton>
        </DrawerHeader>

        <Divider />

        <SidebarMenu />
        {/* <List className={styles.drawerList}>
          {routes?.map((item, index) => (
            <Link
              key={index}
              href={item.path}
              onClick={() => {
                logOut(item, index);
                // Removed handleDrawerClose to keep the dropdown open
              }}
              style={{
                color: theme.colors.black,
                textDecoration: theme.handleTextTransform.none,
              }}
            >
              <MenuItem selected={activeRoute(item.path, router.pathname)} key={index} onClick={() => handleDropdownToggle(item.label)}>
                <ListItem>
                  <ListItemIcon>
                    <item.icon className={styles.drawerIcons} />
                  </ListItemIcon>

                  <ListItemText
                    primary={item.label}
                    style={{
                      textTransform: theme.handleTextTransform.capitalize,
                    }}
                  />

                  {item.hasOwnProperty("showNestedTabs") ? (
                    !open ? null : item.showNestedTabs ? (
                      <ExpandLessIcon
                        style={{
                          color: theme.colors.black,
                          fontSize: "22px",
                        }}
                      />
                    ) : (
                      <ExpandMoreIcon
                        style={{
                          color: theme.colors.black,
                          fontSize: "22px",
                        }}
                      />
                    )
                  ) : null}
                </ListItem>
              </MenuItem>

              <Collapse
                key={index}
                in={openDropdown === item.label}
                timeout="auto"
                unmountOnExit
              >
                <List
                  component="div"
                  disablePadding
                  style={{
                    borderBottom: "1px solid black",
                  }}
                >
                  {item?.nestedTabs && item?.nestedTabs.length > 0
                    ? item.nestedTabs?.map((nestedItem) => (
                      <Link
                        key={nestedItem?.id}
                        href={nestedItem?.path}
                        // Removed handleDrawerClose to keep the dropdown open
                        style={{
                          textDecoration: "none",
                          color: theme.colors.black,
                        }}
                      >
                        <ListItemButton
                          sx={{ pl: 4, color: theme.colors.black }}
                        >
                          <ListItemIcon className={styles.drawerIcons}>
                            {
                              <nestedItem.icon
                                className={styles.drawerIcons}
                              />
                            }
                          </ListItemIcon>

                          <ListItemText
                            primary={nestedItem.label}
                            style={{
                              textTransform:
                                theme.handleTextTransform.capitalize,
                              color: theme.colors.black,
                            }}
                          />
                        </ListItemButton>
                      </Link>
                    ))
                    : null}
                </List>
              </Collapse>
            </Link>
          ))}
        </List> */}
      </Drawer>

      <Main style={{ width: "50%" }} open={open}>
        <DrawerHeader />

        <Container maxWidth="xl">{props?.children}</Container>
      </Main>
    </Box>
  );
};

export default AppLayout;
