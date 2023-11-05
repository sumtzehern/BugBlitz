import { useState } from "react";
import { Sidebar as ProSidebar, Menu, MenuItem } from "react-pro-sidebar";
import "react-pro-sidebar/dist/css/styles.css";
import { Box, IconButton, Typography, useTheme } from "@mui/material";
import { Link } from "react-router-dom";
import { tokens } from "../../theme";
import GridViewRoundedIcon from "@mui/icons-material/GridViewRounded"; //Dash
import GroupAddRoundedIcon from "@mui/icons-material/GroupAddRounded"; //Team
import FolderRoundedIcon from "@mui/icons-material/FolderRounded"; //Project
import SplitscreenRoundedIcon from "@mui/icons-material/SplitscreenRounded"; //Tickest
import MailRoundedIcon from "@mui/icons-material/MailRounded"; //Contacts
import BarChartRoundedIcon from "@mui/icons-material/BarChartRounded"; //bar
import LineAxisRoundedIcon from "@mui/icons-material/LineAxisRounded"; //line
import DonutSmallRoundedIcon from "@mui/icons-material/DonutSmallRounded"; //pie
import QuizRoundedIcon from "@mui/icons-material/QuizRounded"; //faq
import MenuOutlinedIcon from "@mui/icons-material/MenuOutlined";
import CalendarTodayRoundedIcon from "@mui/icons-material/CalendarTodayRounded"; //calen

const Item = ({ title, to, icon, selected, setSelected}) => {
    const theme = useTheme()
    const colors = tokens(theme.palette.mode);
    return (
    <MenuItem 
        active={selected === title } 
        style={{color: colors.grey[100]}}
        onClick={() => setSelected(title)}
        icon={icon}
    >
        <Typography>{title}</Typography>
        <Link to={to}/>
    </MenuItem>
    )
}

const Sidebar = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selected, setSelected] = useState("Dashboard");

  return (
    <Box
      sx={{
        "& .pro-sidebar-inner": {
          background: "${colors.primary[400]} !important",
        },
        "& .pro-icon-wrapper": {
          backgroundColor: "transparent !important"
        },
        "& .pro-inner-item": {
          padding: "5px 35px 5px 20px !important"
        },
        "& .pro-inner-item:hover": {
          backgroundColor: "#0081FB !important"
        },
        "& .pro-menu-item.active": {
          color: "#0085FB !important"
        },
      }}
    >
        <ProSidebar collapsed={isCollapsed}>
            <Menu iconshape="square">
                {/* LOGO AND MENU ITEM*/}
                <MenuItem onClick={() => setIsCollapsed(!isCollapsed)} 
                icon={isCollapsed ? <MenuOutlinedIcon /> : undefined}
                style={{
                    margin: "10px 0 20px 0",
                    borderRadius: "30px",
                    color: colors.primary[900],
                }}
                >
                    {!isCollapsed && (
                        <Box display="flex" justifyContent="space-between" alignItems="center" ml ="15px">
                            <Typography variant="h6" color={colors.grey[900]}>
                                ADMINS
                            </Typography>
                            <IconButton onClick={() => setIsCollapsed(!isCollapsed)}>
                                <MenuOutlinedIcon />
                            </IconButton>
                        </Box>
                    )}
                </MenuItem>

                {/* USER */}
                {!isCollapsed && (
                    <Box mb="25px">
                        <Box display="flex" justifyContent={"center"} alignItems={"center"}>
                            <img 
                            alt="profile-user"
                            width={"60px"}
                            height={"60px"}
                            style={{borderRadius:"20px", cursor:"pointer"}}
                            src={"../../assets/user.png"}
                            />
                        </Box>

                        <Box textAlign={"center"}>
                            <Typography variant="h6" color={colors.grey[900]} fontWeight="bold" sx={{
                                m: "10px 0 0 0"
                            }}>Jason P</Typography>
                            <Typography color={colors.greenAccent[600]} >Product Manager</Typography>
                        </Box>
                    </Box>
                )}
                {/* MENU ITEM */}
                {/* <Box paddingLeft={isCollapsed ?undefined : "10%"}>
                        <Item 
                            title={"Dashboard"}
                            to="/"
                            icon={<GridViewRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Project"}
                            to="/project"
                            icon={<FolderRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Manage Team"}
                            to="/team"
                            icon={<GroupAddRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Tickets"}
                            to="/tickets"
                            icon={<SplitscreenRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Create User"}
                            to="/user"
                            icon={<MailRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Bar Chart"}
                            to="/bar"
                            icon={<BarChartRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Line"}
                            to="/line"
                            icon={<LineAxisRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Pie"}
                            to="/pie"
                            icon={<DonutSmallRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"FAQ"}
                            to="/faq"
                            icon={<QuizRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Pie"}
                            to="/pie"
                            icon={<DonutSmallRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Menu"}
                            to="/menu"
                            icon={<MenuOutlinedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                        <Item 
                            title={"Calender"}
                            to="/calender"
                            icon={<CalendarTodayRoundedIcon />}
                            selected={selected}
                            setSelected={setSelected}
                        />
                </Box> */}
            </Menu>
        </ProSidebar>
    </Box>
  );
};

export default Sidebar;
