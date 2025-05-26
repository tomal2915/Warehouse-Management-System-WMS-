import { useTranslation } from "react-i18next";
import { useSelector } from "react-redux";
import { Box, Typography, Container } from "@mui/material";
import NavBar from "../components/layout/NavBar";
import Sidebar from "../components/layout/Sidebar";

const DashboardPage = () => {
  const { t } = useTranslation();
  const { user } = useSelector((state) => state.auth);

  return (
    <Box sx={{ display: "flex" }}>
      <NavBar />
      <Sidebar />
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Container maxWidth="lg" sx={{ mt: 4, mb: 4 }}>
          <Typography variant="h4" gutterBottom>
            {t("dashboard.title")}
          </Typography>
          <Typography variant="h6" gutterBottom>
            {t("dashboard.welcome", { name: user?.name || "User" })}
          </Typography>
          {/* Dashboard content will go here */}
        </Container>
      </Box>
    </Box>
  );
};

export default DashboardPage;
