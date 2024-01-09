import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
  Grid,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";
import * as localTickets from "../../backendLocalStorage/localTickets"

const TicketsForm = () => {
  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = async (values, {resetForm}) => {
    const updatedValues = { ...values, date: new Date() }; // the date when submit button press
    await localTickets.insertTicket(updatedValues);

    // Reset the form
    resetForm();
  };

  return (
    <Box m="20px" sx={{ borderRadius: "30px" }}>
      <Header title="CREATE TICKET" subtitle="Create a Ticket" />

      <Formik
        onSubmit={handleFormSubmit}
        initialValues={initialValues}
        validationSchema={checkoutSchema}
      >
        {({
          values,
          errors,
          touched,
          handleBlur,
          handleChange,
          handleSubmit,
        }) => (
          <form onSubmit={handleSubmit}>
            <Box
              display="grid"
              gap="30px"
              borderRadius={"30px"}
              gridTemplateColumns="repeat(6, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 6" },
              }}
            >
              <TextField
                fullWidth
                variant="filled"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.title}
                name="title"
                error={!!touched.title && !!errors.title}
                helperText={touched.title && errors.title}
                sx={{ gridColumn: "span 6" }}
              />
              <TextField
                fullWidth
                variant="filled"
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.description}
                name="description"
                error={!!touched.description && !!errors.description}
                helperText={touched.description && errors.description}
                sx={{ gridColumn: "span 6" }}
                multiline
                rows={4}
              />
              <TextField
                fullWidth
                variant="filled"
                type="number"
                label="Time Estimate(In hours)"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.time}
                name="time"
                error={!!touched.time && !!errors.time}
                helperText={touched.time && errors.time}
                inputProps={{ min: 0 }}
                sx={{ gridColumn: "span 6" }}
              />
            </Box>
            <Grid container spacing={2} alignItems="center">
              <Grid item xs={6}>
                <InputLabel htmlFor="priority" sx={{ marginTop: 2 }}>Priority</InputLabel>
                <Select
                  fullWidth
                  variant="filled"
                  label="Priority"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.priority || ""}
                  name="priority"
                  error={!!touched.priority && !!errors.priority}
                >
                  <MenuItem value="" disabled>
                    Select Priority
                  </MenuItem>
                  <MenuItem value="Low">Low</MenuItem>
                  <MenuItem value="Medium">Medium</MenuItem>
                  <MenuItem value="High">High</MenuItem>
                </Select>
              </Grid>
              <Grid item xs={6}>
                <InputLabel htmlFor="type" sx={{ marginTop: 2 }}>Type</InputLabel >
                <Select
                  fullWidth
                  variant="filled"
                  label="Type"
                  onBlur={handleBlur}
                  onChange={handleChange}
                  value={values.type || ""}
                  name="type"
                  error={!!touched.type && !!errors.type}
                >
                  <MenuItem value="" disabled>
                    Select Type
                  </MenuItem>
                  <MenuItem value="Issue">Issue</MenuItem>
                  <MenuItem value="Feature">Feature</MenuItem>
                  <MenuItem value="Bug">Bug</MenuItem>
                  <MenuItem value="Other">Other</MenuItem>
                </Select>
              </Grid>
            </Grid>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
              borderRadius={"30px"}
            >
              <Button type="submit" color="secondary" variant="contained">
                Submit
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

const checkoutSchema = yup.object().shape({
  title: yup.string().required("required"),
  description: yup.string().required("required"),
  type: yup.string().required("Please select a typw"),
  priority: yup.string().required("Please select a role"),
});

const initialValues = {
  title: "",
  description: "",
  priority: "",
  type: "",
  time: 0,
  date: new Date(),
};

export default TicketsForm;
