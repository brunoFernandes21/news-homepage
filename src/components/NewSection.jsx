
const NewSection = () => {
  return (
    <main className="mt-8 bg-black px-4 py-6 text-white">
        <h1 className="New__section__title text-5xl font-bold">New</h1>
        <section className="mt-8 mb-8">
            <h2 className="font-bold text-xl">Hydrogen VS Electric Cars</h2>
            <p>Will hydrogen-funded cars ever catch up to EVs?</p>
        </section>
        <hr />
        <section className="mt-8 mb-8">
            <h2 className="font-bold text-xl">The Downside of AI Artistry</h2>
            <p>What are the possible adverse affects of on-demand AI image generation?</p>
        </section>
        <hr />
        <section className="mt-8">
            <h2 className="font-bold text-xl">Is VC Funding Drying Up?</h2>
            <p>Private funding by VC firms is down 50% YOY. We take a look at what that means.</p>
        </section>
    </main>
  )
}

export default NewSection