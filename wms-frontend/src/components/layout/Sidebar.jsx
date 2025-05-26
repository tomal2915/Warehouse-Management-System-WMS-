import { useState } from "react";
import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { useNavigate, useLocation } from "react-router-dom";
import {
  Drawer,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Divider,
  Toolbar,
  Box,
  Collapse,
} from "@mui/material";
import {
  Dashboard as DashboardIcon,
  Inventory as InventoryIcon,
  AddBox as AddBoxIcon,
  Notifications as NotificationsIcon,
  Assessment as ReportsIcon,
  People as PeopleIcon,
  Settings as SettingsIcon,
  ExpandLess,
  ExpandMore,
  BarChart as AnalyticsIcon,
  Timeline as ForecastIcon,
  History as ActivityLogIcon,
  QrCode as BarcodeIcon,
} from "@mui/icons-material";

const drawerWidth = 240;

const Sidebar = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();
  const { user } = useSelector((state) => state.auth);
  const [inventoryOpen, setInventoryOpen] = useState(false);
  const [reportsOpen, setReportsOpen] = useState(false);

  const mainMenuItems = [
    {
      text: t("sidebar.dashboard"),
      icon: <DashboardIcon />,
      path: "/",
    },
  ];

  const inventoryMenuItems = [
    {
      text: t("sidebar.viewInventory"),
      icon: <InventoryIcon />,
      path: "/inventory",
    },
    {
      text: t("sidebar.addItem"),
      icon: <AddBoxIcon />,
      path: "/inventory/add",
    },
    {
      text: t("sidebar.barcodePrint"),
      icon: <BarcodeIcon />,
      path: "/barcode",
    },
  ];

  const secondaryMenuItems = [
    {
      text: t("sidebar.stockAlerts"),
      icon: <NotificationsIcon />,
      path: "/alerts",
    },
    {
      text: t("sidebar.analytics"),
      icon: <AnalyticsIcon />,
      path: "/analytics",
    },
    {
      text: t("sidebar.forecast"),
      icon: <ForecastIcon />,
      path: "/forecast",
    },
    {
      text: t("sidebar.activityLog"),
      icon: <ActivityLogIcon />,
      path: "/activity-log",
    },
  ];

  const adminMenuItems = [
    {
      text: t("sidebar.reports"),
      icon: <ReportsIcon />,
      path: "/reports",
    },
    {
      text: t("sidebar.userManagement"),
      icon: <PeopleIcon />,
      path: "/users",
    },
    {
      text: t("sidebar.settings"),
      icon: <SettingsIcon />,
      path: "/settings",
    },
  ];

  const handleInventoryClick = () => {
    setInventoryOpen(!inventoryOpen);
  };

  const handleReportsClick = () => {
    setReportsOpen(!reportsOpen);
  };

  const isActive = (path) => {
    return location.pathname === path;
  };

  return (
    <Drawer
      variant="permanent"
      sx={{
        width: drawerWidth,
        flexShrink: 0,
        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: "border-box" },
      }}
    >
      <Toolbar /> {/* This pushes content below the app bar */}
      <Box sx={{ overflow: "auto" }}>
        <List>
          {mainMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={isActive(item.path)}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Inventory Submenu */}
          <ListItemButton onClick={handleInventoryClick}>
            <ListItemIcon>
              <InventoryIcon />
            </ListItemIcon>
            <ListItemText primary={t("sidebar.inventory")} />
            {inventoryOpen ? <ExpandLess /> : <ExpandMore />}
          </ListItemButton>
          <Collapse in={inventoryOpen} timeout="auto" unmountOnExit>
            <List component="div" disablePadding>
              {inventoryMenuItems.map((item) => (
                <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
                  <ListItemButton
                    selected={isActive(item.path)}
                    onClick={() => navigate(item.path)}
                  >
                    <ListItemIcon>{item.icon}</ListItemIcon>
                    <ListItemText primary={item.text} />
                  </ListItemButton>
                </ListItem>
              ))}
            </List>
          </Collapse>

          {/* Secondary Menu Items */}
          {secondaryMenuItems.map((item) => (
            <ListItem key={item.text} disablePadding>
              <ListItemButton
                selected={isActive(item.path)}
                onClick={() => navigate(item.path)}
              >
                <ListItemIcon>{item.icon}</ListItemIcon>
                <ListItemText primary={item.text} />
              </ListItemButton>
            </ListItem>
          ))}

          {/* Admin Menu (only shown for admin users) */}
          {user?.role === "admin" && (
            <>
              <Divider sx={{ my: 1 }} />
              <ListItemButton onClick={handleReportsClick}>
                <ListItemIcon>
                  <ReportsIcon />
                </ListItemIcon>
                <ListItemText primary={t("sidebar.admin")} />
                {reportsOpen ? <ExpandLess /> : <ExpandMore />}
              </ListItemButton>
              <Collapse in={reportsOpen} timeout="auto" unmountOnExit>
                <List component="div" disablePadding>
                  {adminMenuItems.map((item) => (
                    <ListItem key={item.text} disablePadding sx={{ pl: 4 }}>
                      <ListItemButton
                        selected={isActive(item.path)}
                        onClick={() => navigate(item.path)}
                      >
                        <ListItemIcon>{item.icon}</ListItemIcon>
                        <ListItemText primary={item.text} />
                      </ListItemButton>
                    </ListItem>
                  ))}
                </List>
              </Collapse>
            </>
          )}
        </List>
      </Box>
    </Drawer>
  );
};

export default Sidebar;
