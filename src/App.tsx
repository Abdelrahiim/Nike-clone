import Nav from "./components/Nav";
import { CustomerReviews, Footer, Hero, PopularProducts, Services, Subscribe, SuperQuality } from "./sections";

const App = () => (
    <>
        <Nav />
        <main className="relative">
            <section className="xl:padding-l wide:padding-r padding-b">
                <Hero />
            </section>
            <section className="padding ">
                <PopularProducts />
            </section>
            <section className="padding ">
                <SuperQuality />
            </section>
            <section className="padding-x py-10 ">
                <Services />
            </section>
            <section className="padding bg-pale-blue">
                <CustomerReviews />
            </section>
            <section className="padding-x sm:py-32 py16 w-full">
                <Subscribe />
            </section>
        </main>
        <footer className="bg-black text-white-400 padding-x padding-t pb-8  text-">
            <Footer />
        </footer>
    </>
);

export default App;
