import { useState } from "react";
import { ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import "react-pro-sidebar/dist/css/styles.css";
import { tokens } from "../../theme";
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined"; //menu
import SpaceDashboardOutlinedIcon from "@mui/icons-material/SpaceDashboardOutlined"; //dashboard
import FolderOutlinedIcon from "@mui/icons-material/FolderOutlined"; //project
import GroupOutlinedIcon from "@mui/icons-material/GroupOutlined"; //Team
import PlaylistAddOutlinedIcon from "@mui/icons-material/PlaylistAddOutlined"; //tickets
import DynamicFormOutlinedIcon from "@mui/icons-material/DynamicFormOutlined"; //form
import BarChartOutlinedIcon from "@mui/icons-material/BarChartOutlined"; //bar
import PieChartOutlinedIcon from "@mui/icons-material/PieChartOutlined"; //pie
import TimelineOutlinedIcon from "@mui/icons-material/TimelineOutlined"; //line
import HelpCenterOutlinedIcon from "@mui/icons-material/HelpCenterOutlined"; //faq
import CalendarTodayOutlinedIcon from "@mui/icons-material/CalendarTodayOutlined"; //calender

const Item = ({ title, to, icon, selected, setSelected }) => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  return (
    <MenuItem
      active={selected === title}
      style={{
        color: colors.grey[100],
      }}
      onClick={() => setSelected(title)}
      icon={icon}
    >
      <Typography>{title}</Typography>
      <Link to={to} />
    </MenuItem>
  );
};

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: `${colors.primary[500]} !important`,
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important",
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important",
        },
        "& .pro-inner-item:hover": {
          color: "#868dfb !important",
        },
        "& .pro-menu-item.active": {
          color: "#6870fa !important",
        },
      }}
    >
      <ProSidebar collapsed={isCollapsed}>
        <Menu iconShape="square">
          <MenuItem
            onClick={() => setIsCollapsed(!isCollapsed)}
            icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
            style={{
              margin: "10px 0 20px 0",
              color: colors.grey[100],
            }}
          >
            {!isCollapsed && (
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                ml="15px"
              >
                <Typography variant="h3" color={colors.grey[100]}>
                  ADMINS
                </Typography>
                <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                  <MenuOutlinedIcon />
                </IconButton>
              </Box>
            )}
          </MenuItem>

          {!isCollapsed && (
            <Box mb="20px">
              <Box display="flex" justifyContent="center" alignItems="center">
                <img
                  alt="profile-user"
                  width="70px"
                  height="70px"
                  src={`../../assets/avatar.png`}
                  style={{ cursor: "pointer", borderRadius: "30%" }}
                />
              </Box>
              <Box textAlign="center">
                <Typography
                  variant="h3"
                  color={colors.grey[100]}
                  fontWeight="bold"
                  sx={{ m: "10px 0 0 0" }}
                >
                  John Wayne
                </Typography>
                <Typography variant="h6" color={colors.greenAccent[500]}>
                  Product Manager
                </Typography>
              </Box>
            </Box>
          )}

          {/* MENU ITEM */}
          <Box paddingLeft={isCollapsed ? undefined : "10%"}>
          <Item
              title="Dashboard"
              to="/"
              icon={<SpaceDashboardOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Data
            </Typography>
            <Item
              title="Project"
              to="/project"
              icon={<FolderOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Manage Team"
              to="/team"
              icon={<GroupOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Tickets"
              to="/tickets"
              icon={<PlaylistAddOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Pages
            </Typography>
            <Item
              title="Form"
              to="/form"
              icon={<DynamicFormOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Calendar"
              to="/calendar"
              icon={<CalendarTodayOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            {/* <Item
              title="FAQ Page"
              to="/faq"
              icon={<HelpCenterOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            /> */}
            <Typography
              variant="h6"
              color={colors.grey[300]}
              sx={{ m: "15px 0 5px 20px" }}
            >
              Charts
            </Typography>
            <Item
              title="Bar Chart"
              to="/bar"
              icon={<BarChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Pie"
              to="/pie"
              icon={<PieChartOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
            <Item
              title="Line"
              to="/line"
              icon={<TimelineOutlinedIcon />}
              selected={selected}
              setSelected={setSelected}
            />
          </Box>
        </Menu>
      </ProSidebar>
    </Box>
  );
};

export default Sidebar;
