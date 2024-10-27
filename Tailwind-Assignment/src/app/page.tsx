import Header from "./Component/header/header"
import Herosection from "./Component/herosection/herosection"
import Footer from "./Component/footer/footer"
export default function Home(){

return(
  <>
 <Header/>
 <br/>
 <br/>
 <Herosection/>

 <br/>
 <br/>
 <br/>
 <section>
  <h1 className="text-red-500 text-3xl">About us :-</h1>
  <p className="text-2xl mt-3 mb-10">
  We believe in serving delicious, fresh, and high-quality meals that bring joy to every bite. Our carefully curated menu combines the finest ingredients with traditional flavors to create dishes that delight your taste buds. Whether you're dining in, taking out, or ordering online, we promise a delightful culinary experience that feels like home. Come savor the taste of love and passion in every meal.
  </p>
 </section>
 <Footer/>
 </>
)

}