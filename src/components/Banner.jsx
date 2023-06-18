import BannerCard from "./BannerCard";

const banners = [
  {
    image: "/greek salad.jpg",
    price: 12.09,
    name: "Greek salad",
    desc: "The famous greek salad of crispy lettuce, peppers, olives and our Chicago style feta cheese, garnished with crunchy garlic and rosemary croutons.",
  },
  {
    image: "/bruchetta.svg",
    price: 5.99,
    name: "Bruschetta",
    desc: "Our Bruschetta is made from grilled bread that has been smeared with garlic and seasoned with salt and olive oil.",
  },
  {
    image: "/lemon dessert.jpg",
    price: 8.0,
    name: "Lemon Dessert",
    desc: "This comes straight from grandma;s recipe book, every last ingredients has been sourced and it as authentic as can be imagined.",
  },
];

function Banner() {
  return (
    <section className="banner-section">
      <div className="content">
        <div className="content-head">
          <h1>This weeks specials!</h1>
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <button className="btn-primary">Online Menu</button>
          </div>
        </div>
        <div className="banners">
          {banners.map((banner, index) => (
            <BannerCard key={index} item={banner} />
          ))}
        </div>
      </div>
    </section>
  );
}
export default Banner;
