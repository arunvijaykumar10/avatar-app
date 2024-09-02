import React, { useState } from "react";
import {
  Avatar,
  AvatarGroup,
  Grid,
  Popover,
  List,
  ListItem,
  ListItemAvatar,
  ListItemText,
  Checkbox,
  Tooltip,
  Card,
  Typography,
} from "@mui/material";

interface AvatarType {
  id: number;
  name: string;
  src: string;
}


function AvatarComponent() {
  const [anchorEl, setAnchorEl] = useState<HTMLElement | null>(null);
  const [checked, setChecked] = useState<number[]>([]);

  const avatars: AvatarType[] = [
    {
      id: 1,
      name: "Jayvion Simon",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-6.webp",
    },
    {
      id: 2,
      name: "Lucian Obrien",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-7.webp",
    },
    {
      id: 3,
      name: "Deja Brady",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-2.webp",
    },
    {
      id: 4,
      name: "Lainey Davidson",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    },
    {
      id: 5,
      name: "Harrison Stein",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    },
    {
      id: 6,
      name: "Reece Chung",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
    },
    {
      id: 7,
      name: "Lainey Davidson",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-3.webp",
    },
    {
      id: 8,
      name: "Harrison Stein",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-4.webp",
    },
    {
      id: 9,
      name: "Reece Chung",
      src: "https://assets.minimals.cc/public/assets/images/mock/avatar/avatar-5.webp",
    },
  ];

  const handleAvatarClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleClickAvatar = (id: number) => () => {
    const avatar = avatars.find((avatar) => avatar.id === id);
    if (avatar) {
      console.log({ id }, avatar);
    }
  };

  const handleCheckboxChange = (id: number) => (event: React.ChangeEvent<HTMLInputElement>) => {
    const isChecked = event.target.checked;
    setChecked((prevChecked) =>
      isChecked
        ? [...prevChecked, id]
        : prevChecked.filter((checkedId) => checkedId !== id)
    );

    const avatar = avatars.find((avatar) => avatar.id === id);
    if (avatar) {
      console.log({ id }, avatar);
    }
  };

  const open = Boolean(anchorEl);

  return (
    <Grid container justifyContent="center" spacing={2}>
      <Grid item>
        <Card sx={{ height: "70px" }}>
          <AvatarGroup
            sx={{ mt: 2, cursor: "pointer" }}
            max={3}
            onClick={handleAvatarClick}
          >
            {avatars.map((avatar) => (
              <Tooltip key={avatar.id} title={avatar.name}>
                <Avatar
                  src={avatar.src}
                  alt={avatar.name}
                  onClick={handleClickAvatar(avatar.id)}
                />
              </Tooltip>
            ))}
          </AvatarGroup>

          <Popover
            open={open}
            anchorEl={anchorEl}
            onClose={handleClose}
            anchorOrigin={{
              vertical: "bottom",
              horizontal: "center",
            }}
            transformOrigin={{
              vertical: "top",
              horizontal: "center",
            }}
          >
            <List>
              {avatars.slice(2).map((avatar) => (
                <ListItem key={avatar.id}>
                  <Checkbox
                    checked={checked.includes(avatar.id)}
                    onChange={handleCheckboxChange(avatar.id)}
                  />
                  <ListItemAvatar>
                    <Avatar src={avatar.src} alt={avatar.name} />
                  </ListItemAvatar>
                  <ListItemText primary={avatar.name} />
                </ListItem>
              ))}
            </List>
          </Popover>
        </Card>
      </Grid>
    </Grid>
  );
}

export default AvatarComponent;
