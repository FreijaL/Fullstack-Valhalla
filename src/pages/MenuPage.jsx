import { useState } from 'react';
import style from './MenuPage.module.scss';
import NavMenu from '../Components/NavMenu';
import Header from '../Components/Header';
import CategoryScrollBar from '../Components/CategoryScrollBar';
import ProductCard from '../Components/ProductCard';
import ProductInfo from '../Components/ProductInfo';
import { useSelector } from 'react-redux';

function MenuPage() {
    
    const products = useSelector((state) => state.products);
    console.log("state:", products);

    const [openInfo, setOpenInfo] = useState(false);

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
    console.log(sortProducts(products));

    const [activeCategory, setActiveCategory] = useState('pizzas');

    const handleCategoryChange = (category) => {
        setActiveCategory(category);
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
                        />
                    ))
                }    
            </main>
            {
                openInfo
                ?
                <ProductInfo />
                :
                ''
            }
        </section>
    )
};

export default MenuPage;
