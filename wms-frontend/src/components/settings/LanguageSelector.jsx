import { MenuItem, Select, FormControl, InputLabel } from "@mui/material";
import { useTranslation } from "react-i18next";
import { useDispatch, useSelector } from "react-redux";
import { selectLanguage, setLanguage } from "../../redux/slices/settingsSlice";

const LanguageSelector = () => {
  const dispatch = useDispatch();
  const currentLanguage = useSelector(selectLanguage);
  const { t, i18n } = useTranslation();

  const handleLanguageChange = (event) => {
    const newLanguage = event.target.value;
    i18n.changeLanguage(newLanguage);
    dispatch(setLanguage(newLanguage));
  };

  return (
    <FormControl sx={{ minWidth: 120, mr: 2 }} size="small">
      <InputLabel id="language-select-label">{t("language")}</InputLabel>
      <Select
        labelId="language-select-label"
        id="language-select"
        value={currentLanguage}
        label={t("language")}
        onChange={handleLanguageChange}
      >
        <MenuItem value="en">English</MenuItem>
        <MenuItem value="es">Español</MenuItem>
      </Select>
    </FormControl>
  );
};

export default LanguageSelector;
