import React from "react";
import NoImage from "../images/no_image.jpg";
import PropTypes from "prop-types";

import { IMAGE_BASE_URL, POSTER_SIZE } from "../../config";
import { StyledActor } from "../styles/StyledActor";

const Actor = ({ actor }) => {
  return (
    <StyledActor>
      <img
        src={
          actor.profile_path
            ? `${IMAGE_BASE_URL}${POSTER_SIZE}${actor.profile_path}`
            : NoImage
        }
        alt="actorthub"
      />
      <span className="actore-name">{actor.name}</span>
      <span className="actor-character">{actor.characther}</span>
    </StyledActor>
  );
};

Actor.propTypes = {
  actor: PropTypes.object
};

export default Actor;
