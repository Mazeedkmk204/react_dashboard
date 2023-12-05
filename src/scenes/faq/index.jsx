import { Box, useTheme } from "@mui/material";
import Header from "../../components/Header";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import Typography from "@mui/material/Typography";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { tokens } from "../../theme";

const FAQ = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <Box m="20px">
      <Header title="FAQ" subtitle="Frequently Asked Questions Page" />

      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            What technologies were used to build this admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            This admin panel was built using React for the frontend, the Context
            API for state management, Material UI for the user interface,
            FullCalendar for calendar integration, Nivo Charts for data
            visualization, MUI Icons for iconography, and the DataGrid of MUI
            for efficient data tables
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Is the source code available for this admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the source code for this admin panel is available on GitHub.
            You can find it at [Mazeedkmk204].
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Are there any third-party libraries or components used in this
            project?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, the admin panel utilizes several third-party libraries,
            including FullCalendar for calendar functionality, Nivo Charts for
            data visualization, MUI Icons for icons, and React Pro Sliders for
            slider components.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            How is user authentication implemented in this admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            User authentication is implemented using JSON Web Tokens (JWT). When
            a user logs in, a JWT is generated and stored securely. This token
            is then used to authenticate and authorize API requests.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion defaultExpanded>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography color={colors.greenAccent[500]} variant="h5">
            Can I contribute to the development of the admin panel?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Absolutely! Contributions are welcome. Feel free to fork the
            repository, make your changes, and submit a pull request. Please
            review the contribution guidelines in the repository before getting
            started.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Box>
  );
};

export default FAQ;
