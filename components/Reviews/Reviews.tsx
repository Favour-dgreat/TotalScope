import styles from "./Reviews.module.css";

const testimonials = [
  {
    name: "Name",
    rating: 5,
    quote:
      "If you need an agency who truly understands how to build and manage a thriving community, look no further...",
    avatar: "/images/memoji.png",
  },
  {
    name: "Name",
    rating: 5,
    quote:
      "Great work with the website development. Fits perfectly into what this project is, with the right images used. I love it!",
    avatar: "/images/memoji1.png",
  },
  {
    name: "Name",
    rating: 4,
    quote:
      "Incredible blockchain expertise! They built a robust system that exceeded our expectations...",
    avatar: "/images/memoji2.png",
  },
  {
    name: "Name",
    rating: 4,
    quote:
      "The best CM I have ever had! Always there to help and keep things running smoothly. A real community Hero!",
    avatar: "/images/232.png",
  },
];
const testimonialss = [
  {
    name: "Name",
    rating: 3,
    quote: "Love this agency. Very good team.",
    avatar: "/images/1723.png",
  },
  {
    name: "Name",
    rating: 4,
    quote:
      "Incredible blockchain expertise! They built a robust system that exceeded our expectations...",
    avatar: "/images/1.png",
  },
  {
    name: "Name",
    rating: 4,
    quote:
      "The best CM I have ever had! Always there to help and keep things running smoothly. A real community Hero!",
    avatar: "/images/3.png",
  },
  {
    name: "Name",
    rating: 3,
    quote: "Love this agency. Very good team.",
    avatar: "/images/5.png",
  },
];

const renderStars = (rating: number) => {
  return Array.from({ length: 5 }, (_, i) => (
    <img
      key={i}
      src={i < rating ? "/images/StarFilled.png" : "/images/Star.png"}
      alt={i < rating ? "Filled star" : "Empty star"}
      className={styles.star}
    />
  ));
};

const Reviews = () => {
  return (
    <section className={styles.detail} id="reviews">
      <h2>Reviews</h2>
      <div className={`relative flex overflow-x-auto gap-4 w-full px-4 pr-4 snap-x snap-mandatory scroll-smooth hide-scrollbar`}>
  {testimonials.map((item, index) => (
    <div
      key={index}
      className="snap-start flex-shrink-0 w-full sm:w-80 rounded-[10px] text-left overflow-hidden"
      style={{
        padding: "1rem",
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(80deg, rgba(70, 23, 79, 1) 0%, rgba(175, 3, 103, 1) 30%, rgba(0, 0, 170, 1) 100%) border-box",
        border: "2px solid transparent",
      }}
    >
      <span className="flex items-start gap-3 mb-2">
        <img
          src={item.avatar}
          alt={`${item.name}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 style={{ fontSize: "18px", color: "#ccc", fontWeight: "bold" }}>
            {item.name}
          </h3>
          <div className="flex">{renderStars(item.rating)}</div>
        </div>
      </span>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          color: "#ccc",
        }}
      >
        {item.quote}
      </p>
    </div>
  ))}
  {/* Right gradient overlay as hint */}
  <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent" />
</div>

<div className={`relative flex overflow-x-auto gap-4 w-full pt-2 px-4 pr-4 snap-x snap-mandatory scroll-smooth hide-scrollbar`}>
  {testimonialss.map((item, index) => (
    <div
      key={index}
      className="snap-start flex-shrink-0 w-full sm:w-80 rounded-[10px] text-left overflow-hidden"
      style={{
        padding: "1rem",
        background:
          "linear-gradient(black, black) padding-box, linear-gradient(80deg, rgba(70, 23, 79, 1) 0%, rgba(175, 3, 103, 1) 30%, rgba(0, 0, 170, 1) 100%) border-box",
        border: "2px solid transparent",
      }}
    >
      <span className="flex items-start gap-3 mb-2">
        <img
          src={item.avatar}
          alt={`${item.name}'s avatar`}
          className="w-10 h-10 rounded-full object-cover"
        />
        <div className="flex flex-col">
          <h3 style={{ fontSize: "18px", color: "#ccc", fontWeight: "bold" }}>
            {item.name}
          </h3>
          <div className="flex">{renderStars(item.rating)}</div>
        </div>
      </span>
      <p
        style={{
          fontSize: "16px",
          fontFamily: "'Poppins', sans-serif",
          color: "#ccc",
        }}
      >
        {item.quote}
      </p>
    </div>
  ))}
  {/* Right gradient overlay as hint */}
  <div className="pointer-events-none absolute top-0 right-0 h-full w-16 bg-gradient-to-l from-black to-transparent" />
</div>

    </section>
  );
};

export default Reviews;
