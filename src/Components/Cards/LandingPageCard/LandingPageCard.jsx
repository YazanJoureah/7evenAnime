export default function LandingPageCard({ item }) {
  return (
    <div
      className="card_container"
      style={{
        backgroundImage: `url(${item.images.jpg.large_image_url})`,
        backgroundSize: "cover",
        borderRadius: "30px",
        width: "300px",
        height: "400px",
      }}
    ></div>
  );
}
