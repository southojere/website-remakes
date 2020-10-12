import Link from "next/link";
import fetch from "isomorphic-unfetch";
import { motion } from "framer-motion";
import { fadeInUp, stagger } from "../animations";


const Index = (props) => (
  <motion.div
    initial="initial"
    animate="animate"
    exit={{
      opacity: 0,
    }}
  >
    <div className="container center">
      <div className="title">
        <h1>Select a protein</h1>
      </div>
      <motion.div className="product-row" variants={stagger}>
        {props.products.map((product) => (
          <Link
            key={product.id}
            href="/products/[id]"
            as={`/products/${product.id}`}
          >
            <motion.div
              whileHover={{
                scale: 1.05,
              }}
              whileTap={{ scale: 0.9 }}
              variants={fadeInUp}
              className="card"
            >
              <span className="category">Protein</span>
              <motion.img
                key={product.image}
                src={product.image}
                width={250}
                initial={{ x: 60, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{
                  delay: 0.2,
                }}
              />
              <div className="product-info">
                <h4>{product.name}</h4>
                <span>{product.price}</span>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </div>
  </motion.div>
);

Index.getInitialProps = async function () {
  const res = await fetch(
    "http://my-json-server.typicode.com/wrongakram/demo/products"
  );
  const data = await res.json();
  return {
    products: data,
  };
};

export default Index;
