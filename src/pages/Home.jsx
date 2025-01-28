import Container from "../components/Container";
import Carousel from "../components/Carousel";
import { products } from "../Data";
import ProductCard from "../components/ProductCard";
import Section from "../components/Section";
import CategoryCard from "../components/CategoryCard"
import ProductBanners from "../components/ProductBanners";
import BrandSlider from "../components/BrandSlider";
const Home = () => {
  return (
    <>
      <div className="">
        <Carousel />
      </div>
      <Section />
      <CategoryCard />

      <Container className="my-5">
        <div className="text-center">
          <h4 className="mb-2">Featured Products</h4>
          <div className="flex gap-3 sm:gap-6 justify-center">
            <p>BEST SELLERS</p>
          </div>
        </div>
        <section className="container mt-16">
          <div className="row">
            {products.map((product) => (
              <div key={product.id} className="col-6 col-md-4 col-lg-2">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </section>
      </Container>

      <ProductBanners/>

      <div className="my-5 text-center">
        <h3>Shop by Brands</h3>
      <BrandSlider />
      </div>
      
      <Container>
        <div>
          <h3>Top Gadget Shop in Bangladesh</h3>
          <p>
            We are now going through a period when technology brings the
            revolution. From dawn to dusk every moment in our life is connected
            to technology. Various kinds of smart gadgets become inseparable
            parts of our daily life. Consistent with the demand there is a huge
            gadget-selling market globally including Bangladesh. In Bangladesh,
            Apple Gadgets is a top-tier gadget-selling shop. They provide
            consumers a huge collection of gadgets: Phones & Tablets, Laptops &
            Desktops, Accessories, Smart Home Appliances etc. Apple Gadgets
            satisfies its huge customer base both online and offline. Currently,
            it serves customers with four outlets around Dhaka city at four
            different locations. Best customer service makes Apple Gadgets a
            trustworthy retail gadgets shop in Dhaka, Bangladesh.
          </p>
        </div>
        <h3>Best Phones & Tablets Online Shop in Bangladesh</h3>
        <p>
          From early morning alarm to watching a movie at late night laying on
          your bed. Literally, we do half of our daily tasks with our
          smartphones. Phones are now a 24/7 component in our life. Alike phones
          the demand for tablets is also uplifting rapidly. But, the problem is
          to find a reliable shop to buy phones and tablets. In terms of buying
          phones and tablets, Apple Gadgets is a name of trust here in
          Bangladesh. They furnish their outlets with a large number of
          smartphones from top-notch brands. Such as iPhone, Samsung, Google,
          Xiaomi, OnePlus, Oppo, Vivo, Motorola, Infinix, Huawei, Honor, Nokia,
          and many more. Whether you want a smartphone, feature phone, or tablet
          for your official work, get it from Apple Gadgets through online or
          offline.{" "}
        </p>
        <h3>Leading Mobile Accessories Shop in Bangladesh</h3>
        <p>
          Our daily life is incomplete without mobile phones, and for these
          phones to function properly, mobile accessories are indispensable.
          Unluckily most of the time, users are bamboozled with copy products as
          mobile accessories. To get rid of this issue, choose Apple Gadgets to
          grab your essential mobile accessories. You will find all kinds of
          mobile accessories in their outlets at a very reasonable price.
          Genuine products such as phone cover, phone camera protector, power
          adapters, power banks, and wireless chargers from familiar global
          brands are available. They maintain a 2-way shopping system: Online &
          Offline. You can grab your accessories by ordering them online or get
          them from their retail outlets nearby your location.
        </p>
      </Container>
    </>
  );
};

export default Home;
