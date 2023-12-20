import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Tooltip from '@mui/material/Tooltip';
import { Button, FilledInput, Stack, TextField } from '@mui/material';
import LogoutIcon from '@mui/icons-material/Logout';
import { PrimaryColor, SecondaryColor, buttonContained, buttonOutlined, formControlStyle, inputTextFieldStyle } from '../Styles/Style';
import Modal from '@mui/material/Modal';
import VisibilityOutlinedIcon from '@mui/icons-material/VisibilityOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 440,
  bgcolor: 'background.paper',
  borderRadius: 4.5,
  p: 3,
};



export default function AccountMenu() {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const [modalOpen, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const modalHandleClose = () => setOpen(false);


  const [showPassword1, setShowPassword1] = React.useState(false);
  const handleClickShowPassword1 = () => setShowPassword1((show) => !show);
  const handleMouseDownPassword1 = (event) => {
    event.preventDefault();
  };
  const [showPassword2, setShowPassword2] = React.useState(false);
  const handleClickShowPassword2 = () => setShowPassword2((show) => !show);
  const handleMouseDownPassword2 = (event) => {
    event.preventDefault();
  };
  const [showPassword3, setShowPassword3] = React.useState(false);
  const handleClickShowPassword3 = () => setShowPassword3((show) => !show);
  const handleMouseDownPassword3 = (event) => {
    event.preventDefault();
  };


  const [isInputFocused1, setIsInputFocused1] = useState(false);
  const handleInputFocus1 = () => {
    setIsInputFocused1(true);
  };
  const handleInputBlur1 = () => {
    setIsInputFocused1(false);
  };
  const [isInputFocused2, setIsInputFocused2] = useState(false);
  const handleInputFocus2 = () => {
    setIsInputFocused2(true);
  };
  const handleInputBlur2 = () => {
    setIsInputFocused2(false);
  };
  const [isInputFocused3, setIsInputFocused3] = useState(false);
  const handleInputFocus3 = () => {
    setIsInputFocused3(true);
  };
  const handleInputBlur3 = () => {
    setIsInputFocused3(false);
  };
  return (
    <React.Fragment>
      <Box sx={{ display: 'flex', alignItems: 'center', textAlign: 'center' }}>
        <Tooltip title="Account settings">
          <IconButton
            onClick={handleClick}
            size="small"
            sx={{ ml: 2 }}
            aria-controls={open ? 'account-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
          >
            <Avatar sx={{ width: 35, height: 35, backgroundColor: '#F2F4F6', color: `${PrimaryColor}`, fontSize: 18 }}>JD</Avatar>
          </IconButton>
        </Tooltip>
      </Box>
      <Menu
        anchorEl={anchorEl}
        id="account-menu"
        open={open}
        // onClose={handleClose}
        onClick={handleClose}
        PaperProps={{
          elevation: 0,
          sx: {
            p: 2,
            overflow: 'visible',
            minWidth: '230PX',
            borderRadius: 2,
            filter: 'drop-shadow(0px 20px 25px rgba(0, 0, 0, 0.10)) drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))',
            mt: 0.7,
            '& .MuiAvatar-root': {
              width: 32,
              height: 32,
              ml: -0.5,
              mr: 1,
            },
            '& .MuiMenu-list': {
              pt: 0,
              pb: 0,
            },
          },
        }}
        transformOrigin={{ horizontal: 'right', vertical: 'top' }}
        anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
      >

        <Box>
          {/* <Typography sx={{ fontWeight: 600, color: `${PrimaryColor}` }}>Account Information</Typography>
          <MenuItem sx={{
            px: 0, mt: 1, fontSize: 14, color: `${SecondaryColor}`,
            ':hover': {
              backgroundColor: 'transparent',
            }
          }} onClick={handleClose}>
            Profile Information
          </MenuItem>
          <MenuItem sx={{
            px: 0, mt: 1, fontSize: 14, color: `${SecondaryColor}`,
            ':hover': {
              backgroundColor: 'transparent',
            }
          }}
            onClick={handleOpen}>
            Change Password
          </MenuItem> */}
          <Button sx={{
            backgroundColor: '#F4F5F7', p: 1.5, color: '#17191F', fontWeight: 400, boxShadow: 'none', justifyContent: 'space-between', textTransform: 'capitalize',
            ':hover': {
              backgroundColor: '#F4F5F7',
              boxShadow: 'none',
            }
          }}
            variant="contained"
            fullWidth
            endIcon={<LogoutIcon />}>
            Logout</Button>
        </Box>
      </Menu>




      <Modal
        open={modalOpen}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography sx={{ fontSize: 24, fontWeight: 600, color: `${PrimaryColor}` }} id="modal-modal-title" variant="h6" component="h2">
            Change Password
          </Typography>
          <FormControl sx={{ mt: 3 }} fullWidth theme={formControlStyle} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Old Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword1 ? 'text' : 'password'}
              endAdornment={
                isInputFocused1 && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword1}
                      onMouseDown={handleMouseDownPassword1}
                      edge="end"
                    >
                      {showPassword1 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onFocus={handleInputFocus1}
              onBlur={handleInputBlur1}
            />
          </FormControl>
          <FormControl sx={{ mt: 3 }} fullWidth theme={formControlStyle} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">New Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword2 ? 'text' : 'password'}
              endAdornment={
                isInputFocused2 && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword2}
                      onMouseDown={handleMouseDownPassword2}
                      edge="end"
                    >
                      {showPassword2 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onFocus={handleInputFocus2}
              onBlur={handleInputBlur2}
            />
          </FormControl>
          <FormControl sx={{ mt: 3 }} fullWidth theme={formControlStyle} variant="filled">
            <InputLabel htmlFor="filled-adornment-password">Confirm Password</InputLabel>
            <FilledInput
              id="filled-adornment-password"
              type={showPassword3 ? 'text' : 'password'}
              endAdornment={
                isInputFocused3 && (
                  <InputAdornment position="end">
                    <IconButton
                      aria-label="toggle password visibility"
                      onClick={handleClickShowPassword3}
                      onMouseDown={handleMouseDownPassword3}
                      edge="end"
                    >
                      {showPassword3 ? <VisibilityOutlinedIcon /> : <VisibilityOffOutlinedIcon />}
                    </IconButton>
                  </InputAdornment>
                )
              }
              onFocus={handleInputFocus3}
              onBlur={handleInputBlur3}
            />
          </FormControl>
          <Stack direction={'row'} spacing={2} justifyContent={'end'} sx={{ mt: 3 }}>
            <Button variant="outlined" theme={buttonOutlined} onClick={modalHandleClose}>Cancel</Button>
            <Button variant="contained" theme={buttonContained} onClick={modalHandleClose}>Update</Button>
          </Stack>
        </Box>
      </Modal>
    </React.Fragment>
  );
}


