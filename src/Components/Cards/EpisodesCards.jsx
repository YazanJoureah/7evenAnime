import "./Episode.css";

export default function EpisodesCards({ episodes }) {
  console.log(episodes);
  return (
    <>
      {episodes.map((episod) => (
        <div key={episod.entry.mal_id}>
          <div className="col-lg-6 col-12 mb-4 mb-lg-0">
            <div className="custom-block d-flex">
              <div className>
                <div className="custom-block-icon-wrap">
                  <div className="section-overlay" />
                  <a
                    href={episod.episodes[0].url}
                    className="custom-block-image-wrap"
                  >
                    <img
                      src={episod.entry.images.jpg.image_url}
                      className="custom-block-image img-fluid"
                      alt
                    />
                  </a>
                  <a
                    href={episod.episodes[0].url}
                    className="custom-block-icon"
                  >
                    <i className="bi-play-fill" />
                  </a>
                </div>
                <div className="mt-2">
                  <a href="#" className="btn custom-btn">
                    Anime Details
                  </a>
                </div>
              </div>
              <div className="custom-block-info">
                <div className="custom-block-top d-flex mb-1">
                  <small>
                    Episode
                    <span className="badge">{episod.episodes[0].mal_id}</span>
                  </small>
                </div>
                <h5 className="mb-2">
                  <a href="detail-page.html">{episod.entry.title}</a>
                </h5>
                <div className="profile-block d-flex">
                  <img
                    src="images/profile/woman-posing-black-dress-medium-shot.jpg"
                    className="profile-block-image img-fluid"
                    alt
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
