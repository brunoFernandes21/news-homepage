const PopularSection = () => {
  return (
    <main className="popular__section flex flex-col gap-10">
      <section className="popular__1 flex gap-6">
        <img src="/image-retro-pcs.jpg" width={120} height={120} alt="Image of an old PC" />
        <div>
          <h1 className="text-5xl text-gray-300 font-bold">01</h1>
          <h2 className="text-lg font-black mt-2">Reviving Retro PCs</h2>
          <p className="mt-2 leading-6">What happens when old PCs are given modern upgrades?</p>
        </div>
      </section>
      <section className="popular__2 flex gap-6">
        <img
          src="/image-top-laptops.jpg" width={120} height={120}
          alt="Image of lots of modern laptops"
        />
        <div>
          <h1 className="text-5xl text-gray-300 font-bold">02</h1>
          <h2 className="text-lg font-black mt-2">Top 10 Laptops of 2022</h2>
          <p className="mt-2 leading-6">Our best picks for various needs and budgets.</p>
        </div>
      </section>
      <section className="popular__3 flex gap-6">
        <img
          src="/image-gaming-growth.jpg" width={120} height={120}
          alt="Image of a gaming controller over a hand"
        />
        <div>
          <h1 className="text-5xl text-gray-300 font-bold">03</h1>
          <h2 className="text-lg font-black mt-2">The Growth of Gaming</h2>
          <p className="mt-2 leading-6">How the pandemic has sparked fresh opportunities.</p>
        </div>
      </section>
    </main>
  );
};

export default PopularSection;
