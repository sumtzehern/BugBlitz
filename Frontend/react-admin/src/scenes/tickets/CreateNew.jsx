// CreateNew.jsx
import React from "react";
import Button from "@mui/material/Button";
import PopupState, { bindTrigger} from "material-ui-popup-state";
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
                fontSize: "12px",
                fontWeight: "bold",
                padding: "10px 15px",
                borderRadius: "30px",
                marginLeft: "auto",
                "&:hover": {
                  backgroundColor: colors.blueAccent[1001],
                },
              }}
            {...bindTrigger(popupState)}
          >
            <AddIcon borderRadius/>
            Add New
          </Button>
        </React.Fragment>
      )}
    </PopupState>
  );
};

export default CreateNew;
