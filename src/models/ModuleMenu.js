import React from 'react';
import IconButton from '@material-ui/core/IconButton';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import MoreVertIcon from '@material-ui/icons/MoreVert';

import { displayModuleContext } from '../contexts/ModuleContext';

const options = [
  'no',
  'de'
];

const ITEM_HEIGHT = 48;

export default function ModuleMenu()
{

  const {module, toggleModule}= React.useContext(displayModuleContext);

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = (event,data) => {
    setAnchorEl(null);
    if(data !== "backdropClick")
    {
      toggleModule(data)
    }

  };

  return (
    <div>
      <IconButton
        aria-label="more"
        aria-controls="long-menu"
        aria-haspopup="true"
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        id="long-menu"
        anchorEl={anchorEl}
        keepMounted
        open={open}
        onClose={handleClose}
        PaperProps={{
          style: {
            maxHeight: ITEM_HEIGHT * 4.5,
            width: '20ch',
          },
        }}
      >
        {options.map((option) => (
          <MenuItem key={option} selected={option === module} onClick={((e) => handleClose(e,option))}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}
