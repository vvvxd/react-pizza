import React from 'react';
import { Categories, PizzaBlock, Sort } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { setCategory } from '../redux/actions/filters';

const categoriesNames = ['Все', 'Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortItems = [
    { name: 'популярности', type: 'popylar' },
    { name: 'цене', type: 'prise' },
    { name: 'алфавиту', type: 'alph' },
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);

    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    return (
        <div className="container">
            <div className="content__top">
                <Categories onClick={onSelectCategory} items={categoriesNames} />
                <Sort items={sortItems} />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {items && items.map((item) => <PizzaBlock key={item.id} {...item} />)}
            </div>
        </div>
    );
};

export default Home;
