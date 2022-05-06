import React, { useContext } from "react"; 
import { Badge } from "@material-ui/core";
import VisibilityIcon from '@material-ui/icons/Visibility';
import CloseIcon from '@material-ui/icons/Close';
import { img_300, unavailable } from "../../config/config";
import "./SingleContent.css";
import ContentModal from "../ContentModal/ContentModal";
import { GlobalContext } from "../../context/GlobalState";

const SingleContent = ({
  c,
  id,
  poster,
  title,
  media_type,
  vote_average,
}) => { 
  const{ removeMovieFromWatchList,
    addMovieToWatchList,} = useContext(GlobalContext);

  return (
    <ContentModal media_type={media_type} id={id} >
      <Badge
        badgeContent={vote_average}
        color={vote_average > 6 ? "primary" : "secondary"}
      />
      <img
        className="poster"
        src={poster ? `${img_300}${poster}` : unavailable}
        alt={title}
      />
      <b className="title">{title}</b>
      <div className="subTitle">
        <VisibilityIcon className="addButton"
        onClick={() => addMovieToWatchList(id)}/>
        <CloseIcon className="removeButton" 
        onClick={() => removeMovieFromWatchList(id)}/>
      </div>
    </ContentModal>
  );
};

export default SingleContent;
