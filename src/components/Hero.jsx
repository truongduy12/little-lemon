import { useNavigate } from "react-router-dom";

function Hero() {
  const nav = useNavigate();
  return (
    <section className="hero-section">
      <div className="hero-content">
        <h1>Little Lemon</h1>
        <h2>Chicago</h2>
        <article>
          We are a family owned <br /> Mediterranean restaurant, <br />
          focused on traditional <br /> recipes served with a modern <br />{" "}
          twist.
        </article>
        <button className="btn-primary" onClick={() => nav("reservation")}>
          Reserve a Table
        </button>
      </div>
      <img
        className="hero-img"
        src="/restauranfood.jpg"
        alt="Restaurant food"
      />
    </section>
  );
}
export default Hero;
