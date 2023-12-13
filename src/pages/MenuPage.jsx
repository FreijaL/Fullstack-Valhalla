import { useEffect, useState } from 'react';
import style from './MenuPage.module.scss';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { addToCart, calculatePriceTotal } from '../app/productSlice';


function MenuPage() {
    
    const dispatch = useDispatch();
    const products = useSelector((state) => state.products.products);
    const cartItems = useSelector((state) => state.products.cartItems);
    
    function handleAddToCart(product) {
        dispatch(addToCart(product));
        dispatch(calculatePriceTotal());
    };
    
    function sortProducts(products) {
        let sortedProducts = {
            pizzas: [],
            kebabs: [],
            sides: [],
            drinks: [],
            desserts: []
        };

        products.map((product) => {
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

    const [cartQuantity, setCartQuantity] = useState(0);

    useEffect(() => {
        setCartQuantity(cartItems.length);
    }, [cartItems])


    return (
        <section className={style.menuPageContainer}>
            <Header classnameCartItem={`${cartQuantity > 0 ? style.inCart : ''}`} cartQuantity={cartQuantity} />
            <CategoryScrollBar onCategoryChange={handleCategoryChange}
            />
            <main className={style.menuPageMain}>
                <section className={style.menuPageProductContainer}>
                    {sortedProducts &&
                        sortedProducts[activeCategory].map((product, i) => (
                            <ProductCard
                                image={product.image}
                                name={product.itemName}
                                toppings={product.toppings}
                                price={product.price}
                                key={product.id}
                                onClick={() => openProductInfo(product)}
                                onAddToCart={() => {handleAddToCart(product);}}
                                i={i}
                            />
                        ))
                    }

                </section>
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
