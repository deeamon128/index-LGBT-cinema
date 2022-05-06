import React, { useContext} from 'react';
import SingleContent from "../components/SingleContent/SingleContent";
import './Pages.css';
import { GlobalContext } from "../context/GlobalState";


const WatchList = () => {
  const { watchlist } = useContext(GlobalContext);

  return (
    <div>
      <span className="pageTitle">Your Watch list</span>
      <div className="trending">
        {watchlist.map((c) => (
            <SingleContent
              key={c.id}
              id={c.id}
              poster={c.poster_path}
              title={c.title || c.name}
              date={c.first_air_date || c.release_date}
              media_type={"movie" || "tv"}
              vote_average={c.vote_average}
              type="watchlist"
            />
          ))}
      </div>
    </div>
  )
}

export default WatchList
