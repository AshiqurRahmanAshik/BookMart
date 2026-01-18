import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import BuyFromUs from "@/components/Others/BuyFromUs";
import FAQ from "@/components/Others/FAQ";
import Stats from "@/components/Others/Stats";

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Products></Products>
      </section>
      <section>
        <BuyFromUs></BuyFromUs>
      </section>

      <section>
        <Stats></Stats>
      </section>
      <section>
        <FAQ></FAQ>
      </section>
    </div>
  );
}
