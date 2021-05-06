import React from "react";
import ReplayIcon from "@material-ui/icons/Replay";
import CancelRoundedIcon from "@material-ui/icons/CancelRounded";
import FavoriteIcon from "@material-ui/icons/Favorite";
import StarIcon from "@material-ui/icons/Star";
import FlashOnIcon from "@material-ui/icons/FlashOn";
import { IconButton } from "@material-ui/core";

import "./swipeButtons.css";

const SwipeButtons = () => {
  return (
    <div className="swipe__buttons">
      <IconButton className="swipeButton__repeat">
        <ReplayIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__left">
        <CancelRoundedIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__star">
        <StarIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__right">
        <FavoriteIcon fontSize="large" />
      </IconButton>
      <IconButton className="swipeButton__lightening">
        <FlashOnIcon fontSize="large" />
      </IconButton>
    </div>
  );
};

export default SwipeButtons;
