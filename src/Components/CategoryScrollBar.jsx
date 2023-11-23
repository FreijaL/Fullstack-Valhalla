import style from './CategoryScrollBar.module.scss';


function CategoryScrollBar() {

    return(
        <aside className={style.categoryScrollBarContainer}>
            <section className={style.categoryCard}>
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/pizza.png" alt="pizza-category" />
                </section>
                <h3 className={style.categoryHeading}>Pizza</h3>
            </section>
            <section className={style.categoryCard}>
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/kebab.png" alt="kebab-category" />
                </section>
                <h3 className={style.categoryHeading}>Kebab</h3>
            </section>
            <section className={style.categoryCard}>
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/extra.png" alt="extra-category" />
                </section>
                <h3 className={style.categoryHeading}>Tillbehör</h3>
            </section>
            <section className={style.categoryCard}>
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/drink.png" alt="drink-category" />
                </section>
                <h3 className={style.categoryHeading}>Dryck</h3>
            </section>
            <section className={style.categoryCard}>
                <section className={style.categoryCardImageContainer}>
                    <img className={style.categoryCardImage} src="./images/desert.png" alt="drink-category" />
                </section>
                <h3 className={style.categoryHeading}>Dessert</h3>
            </section>
        </aside>
    )
};

export default CategoryScrollBar;