import * as React from "react";
import { Product } from "./domain/Product";
import "./RecommendedSection.css";
import { RecommendedCard } from "./RecommendedCard";

export interface RecommendedSectionProps {
  products: Array<Product>;
  AddButton: React.ComponentType<{item: Object}>;
}

export const RecommendedSection: React.FC<RecommendedSectionProps> = ({ products, AddButton }) => {
  const productList = products.slice(0, 4);
  return (
      <>
        <div className="pegrid">
        {productList.map((product) => (
                  <RecommendedCard
                      key={product.product_id}
                      name={product.name}
                      price={product.price}
                      description={product.description}
                      image={product.image}
                      addBtn={<AddButton item={product} />}
                  />
                
                ))}
        </div>
      </>
  )
}