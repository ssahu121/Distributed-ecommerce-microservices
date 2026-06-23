import ProductCard from "../ProductCard/ProductCard";

function FeaturedProducts() {

  const products = [
    {
      id: 1,
      title: "iPhone 15",
      price: 79999,
      image: "https://picsum.photos/300/300?1"
    },
    {
      id: 2,
      title: "Samsung S25",
      price: 69999,
      image: "https://picsum.photos/300/300?2"
    },
    {
      id: 3,
      title: "Laptop",
      price: 54999,
      image: "https://picsum.photos/300/300?3"
    },
    {
      id: 4,
      title: "Headphones",
      price: 2999,
      image: "https://picsum.photos/300/300?4"
    }
  ];

  return (
    <div className="container my-5">

      <h2 className="mb-4">
        Featured Products
      </h2>

      <div className="row g-4">

        {products.map(product => (
          <div className="col-lg-3 col-md-4 col-sm-6" key={product.id}>
            <ProductCard {...product} />
          </div>
        ))}

      </div>
    </div>
  );
}

export default FeaturedProducts;