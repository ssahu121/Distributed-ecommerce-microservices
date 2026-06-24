
import Layout from "../components/Layout/Layout";

function Products() {
  return (
    <Layout>
      <FeaturedProducts />
    </Layout>
  );
}
function FeaturedProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    api.get("/products")
      .then((res) => setProducts(res.data))
      .catch((err) => console.log(err));
  }, []);

  return (
    <div className="container my-5">
      <h2>Featured Products</h2>

      <div className="row">
        {products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <ProductCard
              title={product.title}
              price={product.price}
              image={product.image}
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default FeaturedProducts;