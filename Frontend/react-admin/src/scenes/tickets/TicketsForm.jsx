import {
  Box,
  Button,
  Select,
  MenuItem,
  TextField,
  InputLabel,
} from "@mui/material";
import { Formik } from "formik";
import * as yup from "yup";
import useMediaQuery from "@mui/material/useMediaQuery";
import Header from "../../components/Header";

// const useStyle = makeStyles(theme => ({
//   root:{
//     '& .MuiGrid-root' : {
//       width:'80%',
//       margin: theme.spacing(1)
//     }
//   }
// }))

const initialValues = {
  title: "",
  description: "",
  priority: "",
  type: "",
  time: 0,
};

const TicketsForm = () => {
  // const theme = useTheme();
  // const colors = tokens(theme.palette.mode);
  // const [values, setValues] = useState(initialValues)
  // const classes = useStyle();

  const isNonMobile = useMediaQuery("(min-width:600px)");

  const handleFormSubmit = (values) => {
    console.log(values);
  };

  return (
    // <Grid container className="{classes.root}">
    //     <Grid item xs={6}>
    //       <TextField variant="outlined" label="Title" value={values.title} />
    //       <TextField variant="outlined" label="Description" value={values.description} />
    //     </Grid>
    //     <Grid item xs={6}></Grid>
    // </Grid>
    <Box m="20px" sx={{ borderRadius: "30px" }}>
      <Formik onSubmit={handleFormSubmit} initialValues={initialValues}>
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
              gridTemplateColumns="repeat(4, minmax(0, 1fr))"
              sx={{
                "& > div": { gridColumn: isNonMobile ? undefined : "span 4" },
              }}
            >
              <InputLabel htmlFor="role" sx={{ marginBottom: -10 }}>
                Title
              </InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                type="text"
                label="Title"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.firstName}
                name="title"
                error={!!touched.firstName && !!errors.firstName}
                helperText={touched.firstName && errors.firstName}
                sx={{ gridColumn: "span 4" }}
              />
              <InputLabel htmlFor="role" sx={{ marginBottom: -10 }}>
                Description
              </InputLabel>
              <TextField
                fullWidth
                variant="outlined"
                multiline // Set multiline to true
                rows={4} // Adjust the number of visible rows
                label="Description"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.email}
                name="description"
                error={!!touched.email && !!errors.email}
                helperText={touched.email && errors.email}
                sx={{ gridColumn: "span 4" }}
              />
              <InputLabel htmlFor="role">Priority</InputLabel>
              <Select
                fullWidth
                variant="outlined"
                label="priority"
                onBlur={handleBlur}
                onChange={handleChange}
                value={values.role || ""}
                name="priority"
                error={!!touched.role && !!errors.role}
                sx={{ gridColumn: "span 1" }}
              >
                <MenuItem value="" disabled>
                  Select
                </MenuItem>
                <MenuItem value="low">Low</MenuItem>
                <MenuItem value="medium">Medium</MenuItem>
                <MenuItem value="high">High</MenuItem>
              </Select>
            </Box>
            <Box
              display="flex"
              justifyContent="end"
              mt="20px"
              borderRadius={"30px"}
            >
              <Button type="submit" color="secondary" variant="contained">
                Create
              </Button>
            </Box>
          </form>
        )}
      </Formik>
    </Box>
  );
};

export default TicketsForm;
