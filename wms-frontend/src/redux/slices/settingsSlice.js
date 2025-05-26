import { createSlice } from "@reduxjs/toolkit";

// Load settings from localStorage if available
const loadInitialState = () => {
  const storedSettings = localStorage.getItem("appSettings");
  if (storedSettings) {
    return JSON.parse(storedSettings);
  }
  return {
    language: "en",
    theme: "light",
    compactMode: false,
    notificationsEnabled: true,
    notificationSound: true,
    dashboardLayout: "default",
    fontSize: "medium",
    sidebarCollapsed: false,
    recentItems: [],
  };
};

const initialState = loadInitialState();

const settingsSlice = createSlice({
  name: "settings",
  initialState,
  reducers: {
    setLanguage: (state, action) => {
      state.language = action.payload;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    toggleTheme: (state) => {
      state.theme = state.theme === "light" ? "dark" : "light";
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    toggleCompactMode: (state) => {
      state.compactMode = !state.compactMode;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    toggleNotifications: (state) => {
      state.notificationsEnabled = !state.notificationsEnabled;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    toggleNotificationSound: (state) => {
      state.notificationSound = !state.notificationSound;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    setDashboardLayout: (state, action) => {
      state.dashboardLayout = action.payload;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    setFontSize: (state, action) => {
      state.fontSize = action.payload;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    toggleSidebar: (state) => {
      state.sidebarCollapsed = !state.sidebarCollapsed;
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    addRecentItem: (state, action) => {
      // Keep only the last 5 recent items
      state.recentItems = [
        action.payload,
        ...state.recentItems.filter((item) => item.id !== action.payload.id),
      ].slice(0, 5);
      localStorage.setItem("appSettings", JSON.stringify(state));
    },
    resetSettings: () => {
      localStorage.removeItem("appSettings");
      return initialState;
    },
  },
});

export const {
  setLanguage,
  toggleTheme,
  toggleCompactMode,
  toggleNotifications,
  toggleNotificationSound,
  setDashboardLayout,
  setFontSize,
  toggleSidebar,
  addRecentItem,
  resetSettings,
} = settingsSlice.actions;

// Selectors
export const selectLanguage = (state) => state.settings.language;
export const selectTheme = (state) => state.settings.theme;
export const selectCompactMode = (state) => state.settings.compactMode;
export const selectNotificationsEnabled = (state) =>
  state.settings.notificationsEnabled;
export const selectNotificationSound = (state) =>
  state.settings.notificationSound;
export const selectDashboardLayout = (state) => state.settings.dashboardLayout;
export const selectFontSize = (state) => state.settings.fontSize;
export const selectSidebarCollapsed = (state) =>
  state.settings.sidebarCollapsed;
export const selectRecentItems = (state) => state.settings.recentItems;

export default settingsSlice.reducer;
