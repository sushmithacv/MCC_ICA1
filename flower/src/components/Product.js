import '../assets/CSS/layout.css';
import React, { useState } from 'react';
export default function Product({ flower, addToCart}){
    
    const [quantity, setQuantity] = useState(0);

    const handleAddToCart = () => {
        if (quantity > 0) {
            addToCart(flower, quantity);
            setQuantity(0); // Reset quantity after adding to cart
        }
    };
    
    return(
        <div className="grid-item">

            <div class="card">
            <img src={require('../assets/image/'+flower.img)} alt={flower.name} />
                <div class="card-body">
                    <h5 class="card-title">Price:{flower.price}</h5>
                    <div class="quantity-container">
                        <label for="quantity">Quantity:</label>
                        <input type="number" id="quantity" name="quantity" />
                    </div>
                    <button class="card-button" onClick={handleAddToCart}>Add to Cart</button>
                </div>
            </div>
        </div>
    );
}