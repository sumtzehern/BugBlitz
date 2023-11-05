import { useState } from "react";
import { Sidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import { BOX, Box, IconButton, Typography, useTheme} from '@mui/material';
import { Link } from 'react-router-dom'
import { tokens } from "../../theme";
import GridViewRoundedIcon from '@mui/icons-material/GridViewRounded'; //Dash
import GroupAddRoundedIcon from '@mui/icons-material/GroupAddRounded'; //Team
import FolderRoundedIcon from '@mui/icons-material/FolderRounded'; //Project
import SplitscreenRoundedIcon from '@mui/icons-material/SplitscreenRounded'; //Tics
import MailRoundedIcon from '@mui/icons-material/MailRounded'; //Contacts
import BarChartRoundedIcon from '@mui/icons-material/BarChartRounded'; //bar
import LineAxisRoundedIcon from '@mui/icons-material/LineAxisRounded'; //line
import DonutSmallRoundedIcon from '@mui/icons-material/DonutSmallRounded'; //pie
import QuizRoundedIcon from '@mui/icons-material/QuizRounded'; //faq
import CalendarTodayRoundedIcon from '@mui/icons-material/CalendarTodayRounded'; //calen


const Sidebar = () => {
    const theme = useTheme();
    const colors = tokens(theme.palette.mode);
    const [isCollapsed, setIsCollapsed] = useState(false);
    const [selected, setSelected] = useState("Dashboard");

    
    return (
        <Box sx={{
            "& .pro-sidebar-inner" : {
                background: '${colors.primary[400]} !important'
            },
            "& .pro-icon-wrapper" : {
                backgroundColor: "transparent !important"
            },
            "& .pro-inner-item" : {
                padding: "5px 35px 5px 20px !important"
            },
            "& .pro-inner-item:hover" : {
                backgroundColor: "#0081FB !important"
            },
            "& .pro-menu-item:active" : {
                backgroundColor: "#0085FB !important"
            },
        }}
        >

        </Box>

    );
}

export default Sidebar