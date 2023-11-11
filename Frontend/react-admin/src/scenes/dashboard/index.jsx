import Header from "../../components/Header";
import { Box, Button, IconButton, Typography, useTheme } from "@mui/material";

const Dashboard = () => {
  return (
    <div>
      Dashboard
      <Box m="20px">
        <Box display="flex" justifyContent="space-between" alignItems="center">
          <Header title="DASHBOARD" subtitle="Welcome to your dashboard" />
        </Box>
      </Box>
    </div>
  );
};

export default Dashboard;

