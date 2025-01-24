// import ProductCard from "../components/common/ProductCard/ProductCard"
import MainTitle from "../components/common/main/MainTitle";
import Breadcrumb from "../components/Products/Breadcrumb";

// const products = [
//   {
//     id: 1,
//     title: "Seaside",
//     price: 550,
//     instock: true,
//     description: "A premium quality seaside shoe, perfect for casual outings.",
//     imageUrl:
//       "https://res.cloudinary.com/dikjox62g/image/upload/v1729365072/imges/d872u1ef0c29wtjpau0y.png",
//   },
//   {
//     id: 2,
//     title: "Mountain Hiker",
//     price: 780,
//     instock: false,
//     description: "A sturdy shoe for mountain hiking adventures.",
//     imageUrl:
//       "https://i.pinimg.com/474x/c5/87/9c/c5879c2a385777158a460edc599b70a6.jpg",
//   },
//   {
//     id: 3,
//     title: "Urban Sneaker",
//     price: 320,
//     instock: true,
//     description: "A stylish sneaker for everyday urban life.",
//     imageUrl:
//       "https://i.pinimg.com/236x/d0/5d/6e/d05d6ea5cfc3865c9aa0700767bef3f5.jpg",
//   },
//   {
//     id: 4,
//     title: "Classic Leather",
//     price: 650,
//     instock: true,
//     description: "Elegant leather shoes for formal occasions.",
//     imageUrl:
//       "https://i.pinimg.com/736x/97/b9/2f/97b92f4d6944c9c9ce87dbd67038f40b.jpg",
//   },
//   {
//     id: 5,
//     title: "Trail Runner",
//     price: 480,
//     instock: true,
//     description: "Lightweight running shoes for rugged trails.",
//     imageUrl:
//       "https://i.pinimg.com/736x/11/80/6f/11806f4263353f35741d2502a00d0eff.jpg",
//   },
//   {
//     id: 6,
//     title: "Summer Sandals",
//     price: 120,
//     instock: false,
//     description: "Comfortable sandals for summer adventures.",
//     imageUrl:
//       "https://i.pinimg.com/736x/89/52/97/8952972d40117a7acba8dcf8f225fb0b.jpg",
//   },
//   {
//     id: 7,
//     title: "High-top Sneakers",
//     price: 410,
//     instock: true,
//     description: "Trendy high-top sneakers for casual wear.",
//     imageUrl:
//       "https://i.pinimg.com/236x/61/ba/39/61ba3939637a0ce4adf4f484a3033f1f.jpg",
//   },
//   {
//     id: 8,
//     title: "Winter Boots",
//     price: 900,
//     instock: false,
//     description: "Durable boots to keep your feet warm and dry.",
//     imageUrl:
//       "https://i.pinimg.com/736x/cf/8b/be/cf8bbe5ff03f156c6b6980b8b14c56c2.jpg",
//   },
//   {
//     id: 9,
//     title: "Fitness Trainers",
//     price: 300,
//     instock: true,
//     description: "Perfect trainers for gym and fitness sessions.",
//     imageUrl:
//       "https://i.pinimg.com/736x/de/e3/9f/dee39f8252d198db0f85b52757798cea.jpg",
//   },
//   {
//     id: 10,
//     title: "Casual Loafers",
//     price: 280,
//     instock: true,
//     description: "Stylish loafers for everyday wear.",
//     imageUrl:
//       "https://i.pinimg.com/736x/11/da/c1/11dac1483fac0a74ab3493b346d4cd8d.jpg",
//   },
// ];

const breadcrumbItems = [
  { label: "Home", link: "/" },
];

const Wishlist = () => {
  return (
    <div className="bg-section-color">
      <div className="container mx-auto px-2 py-6 space-y-5">
      <Breadcrumb items={breadcrumbItems} itemNow={"Wishlist"} />
        <MainTitle title="Wishlist">
          Explore a wide range of high-quality materials and tools essential for the oilfield industry.  
          From drilling equipment to maintenance tools, we provide everything you need to ensure efficient operations.
        </MainTitle>

        <div className="cards">
        <div
                className={
                  
                     "grid grid-cols-1 max-md:justify-items-center  md:grid-cols-2 lg:grid-cols-3 gap-4 justify-center "
                    
                }
              >
                {/* {products.map((product) => (
                  <ProductCard
                  key={product.id}
                    title={product.title}
                    price={product.price}
                    instock={product.instock}
                    description={product.description}
                    imageUrl={product.imageUrl}
                  />
                ))} */}
              </div>
        </div>
      </div>
    </div>
  )
}

export default Wishlist
