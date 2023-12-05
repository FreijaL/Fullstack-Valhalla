//MenuPage.jsx

import { useState } from 'react';
import style from './MenuPage.module.scss';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart } from '../app/productSlice';


function MenuPage() {
    
    const products = useSelector((state) => state.products);
    const cartItems = useSelector((state) => state.cartItems);
    const dispatch = useDispatch();
    // console.log("state:", products);
    const handleAddToCart = (product) => {
        dispatch(addToCart(product)); // Assuming the payload is the product id
        
    };

    console.log(cartItems);

    function sortProducts(products) {
        let sortedProducts = {
            pizzas: [],
            kebabs: [],
            sides: [],
            drinks: [],
            desserts: []
        };

        products.products.map((product) => {
            switch(product.category) {
                case "Pizza": 
                    sortedProducts.pizzas.push(product)
                    break;
                case "Kebab":
                    sortedProducts.kebabs.push(product)
                    break;
                case "Tillbehör":
                    sortedProducts.sides.push(product)
                    break; 
                case "Dryck":
                    sortedProducts.drinks.push(product)
                    break;
                case "Dessert":
                    sortedProducts.desserts.push(product)
                    break;
                default:
                    break;
            }
        });

        return sortedProducts;
    }

    const sortedProducts = sortProducts(products);

    const [activeCategory, setActiveCategory] = useState('pizzas');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
    }

    const [openInfo, setOpenInfo] = useState(false);
    const [pizzaInfo, setPizzaInfo] = useState();

    const openProductInfo = (product) => {
        if (product.category === "Pizza" || product.category === "Kebab") {
            setOpenInfo(true);
            setPizzaInfo(product);
        }
    }

    const handleCloseModal = () => {
        setOpenInfo(false);
    }

    return (
        <section className={style.menuPageContainer}>
            <Header />
            <CategoryScrollBar onCategoryChange={handleCategoryChange}
            />
            <main className={style.menuPageMain}>
                {sortedProducts &&
                    sortedProducts[activeCategory].map((product) => (
                        <ProductCard
                        image={product.image}
                        name={product.itemName}
                        toppings={product.toppings}
                        price={product.price}
                        key={product.id}
                        onClick={() => openProductInfo(product)}
                        onAddToCart={() => handleAddToCart(product)}
                        />
                    ))
                }
            </main>
            { openInfo ? (
                <ProductInfo
                closeModal={handleCloseModal}
                product={pizzaInfo}
                />
            ): null}
        </section>
    )
};

export default MenuPage;
