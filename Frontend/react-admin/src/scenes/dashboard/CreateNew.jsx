// CreateNew.jsx
import React from "react";
import Button from "@mui/material/Button";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
import AddIcon from "@mui/icons-material/Add";
import { tokens } from "../../theme";
import { useTheme } from "@mui/system";


const CreateNew = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <React.Fragment>
          <Button
            variant="contained"
            sx={{
                backgroundColor: colors.blueAccent[1000],
                color: colors.grey[100],
                fontSize: "14px",
                fontWeight: "bold",
                padding: "10px 20px",
                borderRadius: "30px",
                "&:hover": {
                  backgroundColor: colors.blueAccent[1001],
                },
              }}
            {...bindTrigger(popupState)}
          >
            <AddIcon sx={{ marginRight: "10px" }} />
            Create new
          </Button>
          <Menu {...bindMenu(popupState)} 
            PaperProps={{
                sx : {
                    backgroundColor: colors.primary[700]
                }
            }}
          >
            <MenuItem onClick={popupState.close} >New Project</MenuItem>
            <MenuItem onClick={popupState.close} >New Ticket</MenuItem>
          </Menu>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default CreateNew;
