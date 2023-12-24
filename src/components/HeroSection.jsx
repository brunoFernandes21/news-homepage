const HeroSection = () => {
  return (
    <main className="hero__section">
      <section className="hero__section__images">
        <img
          className="hero__section__mobile__image"
          src="/src/assets/image-web-3-mobile.jpg"
          alt=""
        />
        <img
          className="hero__section__desktop__image"
          src="/src/assets/image-web-3-desktop.jpg"
          alt=""
        />
      </section>
      <section className="hero__content">
        <h1 className="title text-5xl font-bold">The Bright Future of Web 3.0?</h1>
        <div className="content">
          <p className=" leading-7">
            We dive into the next evolution of the web that claims to put the
            power of the the platforms back into the hands of the people. But is
            it really fulfilling its promise?
          </p>
          <button className="btn mt-6">READ MORE</button>
        </div>
      </section>
    </main>
  );
};

export default HeroSection;
