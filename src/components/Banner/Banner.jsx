import bannerImg from '../../assets/books.jpg';
const Banner = () => {
  return (
    <div className="hero bg-base-200">
      <div className="hero-content flex flex-col lg:flex-row-reverse gap-10 py-10">
        <img
          src={bannerImg}
          className="max-w-sm rounded-lg shadow-2xl"
        />
        <div>
          <h1 className="text-5xl font-bold pb-5">Box Office News!</h1>
          <button className="btn btn-success text-white">Get Started</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
