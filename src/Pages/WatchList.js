import React, { useState, useEffect } from 'react';
import SingleContent from "../components/SingleContent/SingleContent";
import CustomPagination from "../components/Pagination/CustomPagination";
import './Pages.css';


const WatchList = ({content}) => {
  return (
    <div>
      <span className="pageTitle">Your Watch list</span>
      <div className="trending">
        {content &&
          content.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={"movie" || "tv"}
              vote_average={c.vote_average}
            />
          ))}
      </div>
    </div>
  )
}

export default WatchList
