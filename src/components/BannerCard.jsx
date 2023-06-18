function BannerCard({ item }) {
  return (
    <div className="banner-card">
      <img
        src={item.image}
        alt={item.name}
        width={"100%"}
        height={"250px"}
        style={{ objectFit: "cover", display: "block" }}
      />
      <div
        style={{
          padding: "0 1rem",
          display: "flex",
          flexDirection: "column",
          flexGrow: 1,
        }}
      >
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <h2 style={{ fontSize: "18pt" }}>{item.name}</h2>
          <span
            style={{ color: "#ee9972", fontWeight: "bold" }}
            className="card-price"
          >
            ${item.price.toFixed(2)}
          </span>
        </div>
        <div style={{ color: "#495e57", padding: "2rem 0", flexGrow: 1 }}>
          {item.desc}
        </div>
        <div style={{ justifySelf: "flex-end" }}>
          <b>Order a delivery &nbsp; &rarr;</b>
        </div>
      </div>
    </div>
  );
}
export default BannerCard;
