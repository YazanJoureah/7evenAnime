import "./Header.css";
export default function Header({ Title }) {
  return (
    <div className="site-header">
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-12 text-center">
            <h2 className="m-0">{Title}</h2>
          </div>
        </div>
      </div>
    </div>
  );
}
