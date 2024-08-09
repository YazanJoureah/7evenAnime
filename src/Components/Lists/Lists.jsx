import AnimeCards from "../Cards/AnimeCard/AnimeCards";
import EpisodesCards from "../Cards/EpisodesCards/EpisodesCards";
import Pagination from "../Pagination/Pagination";
import "./Lists.css";

export default function Lists({ type, Title, data, onChange }) {
  return type === "Anime" ? (
    <section className="section-bg section-padding">
      <div className="container">
        <div className="section-title-wrap mb-5">
          <h4 className="section-title">{Title}</h4>
        </div>
        <div className="Top-Anime">
          {data?.data?.map((item, index) => (
            <AnimeCards item={item} key={index} />
          ))}
        </div>
        <Pagination
          length={data?.pagination?.items?.total}
          postsPerPage={data?.pagination?.items?.per_page}
          pageCahnge={onChange}
        />
      </div>
    </section>
  ) : (
    <section className="section-bg section-padding pb-0" id="section_2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="section-title-wrap mb-5">
            <h4 className="section-title">{Title}</h4>
          </div>
        </div>
        <div className="latest-ep-cards">
          <EpisodesCards episodes={data} />
        </div>
      </div>
    </section>
  );
}
