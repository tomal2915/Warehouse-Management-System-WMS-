import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { Button, Container, Box, Typography } from "@mui/material";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();

  return (
    <Container maxWidth="md">
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          minHeight: "80vh",
          textAlign: "center",
        }}
      >
        <ErrorOutlineIcon sx={{ fontSize: 80, color: "error.main", mb: 2 }} />
        <Typography variant="h3" gutterBottom>
          {t("notFound.title")}
        </Typography>
        <Typography variant="body1" color="text.secondary" paragraph>
          {t("notFound.description")}
        </Typography>
        <Typography variant="body2" color="text.secondary" paragraph>
          {t("notFound.suggestion")}
        </Typography>
        <Button
          variant="contained"
          color="primary"
          onClick={() => navigate("/")}
          sx={{ mt: 3 }}
        >
          {t("notFound.goHome")}
        </Button>
      </Box>
    </Container>
  );
};

export default NotFoundPage;
