const NewSection = () => {
  return (
    <main className="new__section bg-black text-white">
      <h1 className="new__section__title text-5xl font-bold">New</h1>
      <section className="new__section__cars leading-7">
        <h2 className="font-bold text-xl">Hydrogen VS Electric Cars</h2>
        <p>Will hydrogen-funded cars ever catch up to EVs?</p>
      </section>
      <hr className="border-gray-500" />
      <section className="new__section__ai leading-7">
        <h2 className="font-bold">The Downside of AI Artistry</h2>
        <p>
          What are the possible adverse affects of on-demand AI image
          generation?
        </p>
      </section>
      <hr className="border-gray-500" />
      <section className="new__section__vc leading-7">
        <h2 className="font-bold ">Is VC Funding Drying Up?</h2>
        <p>
          Private funding by VC firms is down 50% YOY. We take a look at what
          that means.
        </p>
      </section>
    </main>
  );
};

export default NewSection;
