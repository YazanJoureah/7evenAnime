import { RxStarFilled, RxArrowTopRight } from "react-icons/rx";

export default function CaroselCards({ item }) {
  return (
    <div className="card-container">
      <div
        className="image"
        style={{
          backgroundImage: `url(${item.images.jpg.large_image_url})`,
        }}
      >
        <div className="content">
          <div className="title-wrap">
            <span className="type">{item.type}</span>

            <strong className="title">{item.title}</strong>
          </div>
          <div className="badges">
            {item.genres.map((badg) => (
              <span className="badge" key={badg.mal_id}>
                {badg.name}
              </span>
            ))}
          </div>

          <div className="desc">{`${item.synopsis.slice(0, 150)}......`}</div>
          <div className="cards-footer">
            <div className="info">
              <span>
                <strong>Score: </strong>
                {item.score}
                <RxStarFilled size={14} color="gold" />
              </span>

              <span>
                <strong>Season: </strong>
                {`${item.season} ${item.year}`}
              </span>
            </div>

            <button className="show-details">
              <RxArrowTopRight size={24} /> <span> Show details</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
