import Banner from "@/components/Home/Banner";
import Products from "@/components/Home/Products";
import Image from "next/image";

export default function Home() {
  return (
    <div className="space-y-12">
      <section>
        <Banner></Banner>
      </section>

      <section>
        <Products></Products>
      </section>
    </div>
  );
}
