import * as React from "react";
import Box from "@mui/material/Box";
import MuiDrawer from "@mui/material/Drawer";
import Toolbar from "@mui/material/Toolbar";
import List from "@mui/material/List";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import { styled, useTheme } from "@mui/material/styles";
import type { Theme, CSSObject } from "@mui/material/styles";
import {
  NoteAdd,
  Delete,
  PushPin,
  Description,
  Public,
  Lock,
  Bookmark,
  Logout,
  Person,
} from "@mui/icons-material";
import MuiAppBar from "@mui/material/AppBar";
import type { AppBarProps as MuiAppBarProps } from "@mui/material/AppBar";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { useAuth } from "../../Store/useAuth";
import { Avatar, Stack } from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  ...theme.mixins.toolbar,
}));

interface AppBarProps extends MuiAppBarProps {
  open?: boolean;
}

const AppBar = styled(MuiAppBar, {
  shouldForwardProp: (prop) => prop !== "open",
})<AppBarProps>(({ theme }) => ({
  zIndex: theme.zIndex.drawer + 1,
  transition: theme.transitions.create(["width", "margin"], {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  variants: [
    {
      props: ({ open }) => open,
      style: {
        marginLeft: drawerWidth,
        width: `calc(100% - ${drawerWidth}px)`,
        transition: theme.transitions.create(["width", "margin"], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
      },
    },
  ],
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  variants: [
    {
      props: ({ open }) => open,
      style: {
        ...openedMixin(theme),
        "& .MuiDrawer-paper": openedMixin(theme),
      },
    },
    {
      props: ({ open }) => !open,
      style: {
        ...closedMixin(theme),
        "& .MuiDrawer-paper": closedMixin(theme),
      },
    },
  ],
}));

const mainItems = [
  { text: "My notes", icon: <Description />, href: "/my-notes" },
  { text: "New Entry", icon: <NoteAdd />, href: "/new-note" },
  { text: "Pinned notes", icon: <PushPin />, href: "/pinned-notes" },
  { text: "BookMarked", icon: <Bookmark />, href: "/bookmarked-notes" },
  { text: "Public Notes", icon: <Public />, href: "/public-notes" },
  { text: "Private Notes", icon: <Lock />, href: "/private-notes" },
  { text: "Trash", icon: <Delete />, href: "/deleted-notes" },
];

interface MinidrawerProps {
  children: React.ReactNode;
}
export default function MiniDrawer({ children }: MinidrawerProps) {
  const { token, user, refreshUser, logout } = useAuth();
  const navigate = useNavigate();

  React.useEffect(() => {
    if (!token) {
      navigate("/");
    }
    refreshUser();
  }, [token, navigate]);
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpen(true);
  };

  const handleDrawerClose = () => {
    setOpen(false);
  };
  const handleLogOut = () => {
    logout();
    navigate("/");
  };
  const secondaryItems = [
    {
      text: "Log Out",
      icon: <Logout />,
      onClick: handleLogOut,
    },
    { text: "Account", icon: <Person />, href: "/account" },
  ];

  const initials =
    `${user?.user?.firstname?.[0]}${user?.user?.lastname?.[0]}`.toUpperCase();

  return (
    <Box sx={{ display: "flex" }}>
      <CssBaseline />
      <AppBar position="fixed" open={open}>
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
            edge="start"
            sx={[{ marginRight: 5 }, open && { display: "none" }]}
          >
            <MenuIcon />
          </IconButton>

          <Box sx={{ flexGrow: 1, display: "flex", justifyContent: "center" }}>
            <Stack spacing={4} direction={"row"}>
              <Link
                to="/"
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  fontSize: "1.2rem",
                  fontFamily: `"Roboto", sans-serif`,
                }}
              >
                Home
              </Link>
              <Link
                to="/my-notes"
                style={{
                  textDecoration: "none",
                  color: "#1a1a1a",
                  fontSize: "1.2rem",
                  fontFamily: `"Roboto", sans-serif`,
                }}
              >
                Notes
              </Link>
            </Stack>
          </Box>
          <Link to="/profile" style={{ textDecoration: "none" }}>
            <Avatar
              sx={{
                width: 40,
                height: 40,
                color: "#000",
              }}
              src={user?.user?.avatar || undefined}
            >
              {!user?.user?.avatar && initials}
            </Avatar>
          </Link>
        </Toolbar>
      </AppBar>
      <Drawer variant="permanent" open={open}>
        <DrawerHeader>
          <IconButton onClick={handleDrawerClose}>
            {theme.direction === "rtl" ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </DrawerHeader>
        <Divider />
        <List>
          {mainItems.map(({ text, icon, href }) => {
            const isActive = location.pathname === href;
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={Link as any}
                  to={href}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      backgroundColor: isActive ? "#b08968" : "transparent",
                    },
                    open
                      ? { justifyContent: "initial" }
                      : { justifyContent: "center" },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: "center" },
                      open ? { mr: 3 } : { mr: "auto" },
                    ]}
                  >
                    {icon}
                  </ListItemIcon>

                  <ListItemText
                    primary={text}
                    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>

        <Divider />

        <List>
          {secondaryItems.map(({ text, icon, href, onClick }) => {
            const isActive = location.pathname === href;
            return (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  component={href ? (Link as any) : "button"}
                  onClick={onClick}
                  to={href}
                  sx={[
                    {
                      minHeight: 48,
                      px: 2.5,
                      backgroundColor: isActive ? "#b08968" : "transparent",
                    },
                    open
                      ? { justifyContent: "initial" }
                      : { justifyContent: "center" },
                  ]}
                >
                  <ListItemIcon
                    sx={[
                      { minWidth: 0, justifyContent: "center" },
                      open ? { mr: 3 } : { mr: "auto" },
                    ]}
                  >
                    {icon}
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={[open ? { opacity: 1 } : { opacity: 0 }]}
                  />
                </ListItemButton>
              </ListItem>
            );
          })}
        </List>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        {children}
      </Box>
    </Box>
  );
}
