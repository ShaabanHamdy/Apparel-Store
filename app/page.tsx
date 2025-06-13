import MenProducts from "./pages/MenProducts/MenProducts";
import Discount from "./pages/navbar/Discount";
import Navbar from "./pages/navbar/Navbar";
import Register from "./pages/Register/Register";
// import ProductCard from "./pages/ProductCard/ProductCard";
import Slider from "./pages/Slider/Slider";

export default function Page() {
  return (
    <div className="bg-gray-900">
      <Discount />
      <Navbar />
      <Slider />
      <MenProducts/>
      <Register />
    </div>
  );
}
