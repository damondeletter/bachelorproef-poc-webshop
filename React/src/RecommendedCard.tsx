import * as React from 'react';
import "./RecommendedCard.css";
export interface RecommendedCardProps {
    name: string;
    price: number;
    description: string;
    image: string;
    addBtn: any;
}

export const RecommendedCard: React.FC<RecommendedCardProps> = ({ name, price, description, image, addBtn }) => {
    return (
        <div className="cardRec">
        
            <img src={image} alt="Image header" />
            <div>
                <div className="card-title">{name}</div>
                <div className="space">
                    <div className="coll">
                        <div className="card-title">€{price}</div>
                         {addBtn}
                    </div>
                </div>
            </div>
        </div>
    )
}