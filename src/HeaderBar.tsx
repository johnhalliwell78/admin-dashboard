import AbcIcon from "@mui/icons-material/ArrowDropDown";
import {
  Avatar,
  Breadcrumbs,
  IconButton,
  Menu,
  MenuItem,
  Typography,
} from "@mui/material";
import { useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  align-items: center;
`;
export const HeaderBar = () => {
  const breadcrumbs = [
    <Typography>Core</Typography>,
    <Typography key="3" sx={{ color: "text.primary" }}>
      Breadcrumb
    </Typography>,
  ];
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };
  return (
    <Wrapper>
      <Breadcrumbs separator=">" aria-label="breadcrumb">
        {breadcrumbs}
      </Breadcrumbs>
      <div>
        <IconButton
          onClick={handleClick}
          sx={{ display: "flex", alignItems: "center" }}
        >
          <Avatar
            src="/path-to-user-avatar.jpg"
            sx={{ width: 32, height: 32, mr: 1 }}
          />
          <Typography variant="body1">Nguyễn Chí Toàn</Typography>
          <AbcIcon />
        </IconButton>
        <Menu anchorEl={anchorEl} open={open} onClose={handleClose}>
          <MenuItem onClick={handleClose}>Profile</MenuItem>
          <MenuItem onClick={handleClose}>Logout</MenuItem>
        </Menu>
      </div>
    </Wrapper>
  );
};
