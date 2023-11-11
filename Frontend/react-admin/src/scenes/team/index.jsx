import { Box, Typography, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataTeam } from "../../data/mockData"; // data provided through different file or
import Header from "../../components/Header";
import { useTheme } from "@emotion/react";

const Team = () => {
  const useTheme = useTheme();
  const colors = tokens(theme.pallete.mode);

  return (
    <Box>
      <Header title="TEAM" subtitle="Managing the Team Members" />
      <Box>
        <DataGrid rows={mockDataTeam} columns={{columns}}/>
      </Box>
    </Box>
  );
};

export default Team;
