import "./Episode.css";

export default function EpisodesCards({ episodes }) {
  return (
    <>
      {episodes.map((episod) => (
        <article className="e-card" key={episod.entry.mal_id}>
          <a className="e-card-img" href={episod.episodes[0].url}>
            <img
              className="images"
              src={episod.entry.images.jpg.image_url}
              alt="alt"
            />
          </a>
          <div className="project-info">
            <div className="project-title">
              <span className="tag">
                Episode
                {episod.episodes[0].mal_id}
              </span>
              <a className="a-title" href={episod.episodes[0].url}>
                {episod.entry.title.slice(0, 30)}
              </a>
            </div>
          </div>
        </article>
      ))}
    </>
  );
}
