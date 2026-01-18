import Banner from "@/components/home/Banner";
import Products from "@/components/home/Products";
import BuyFromUs from "@/components/Others/BuyFromUs";


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
    </div>
  );
}
