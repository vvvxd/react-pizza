import React from 'react';
import { Categories, PizzaBlock, Sort, PizzaLoadingBlock } from '../components';
import { useSelector, useDispatch } from 'react-redux';
import { fetchRizzas } from '../redux/actions/pizzas';
import { addPizzaToCart } from '../redux/actions/cart';

import { setCategory, setSortBy } from '../redux/actions/filters';

const categoryNames = ['Мясные', 'Вегетарианская', 'Гриль', 'Острые', 'Закрытые'];
const sortIems = [
    { name: 'популярности', type: 'popular', order: 'desc' },
    { name: 'цене', type: 'price', order: 'desc' },
    { name: 'алфавит', type: 'name', order: 'asc' },
];

const Home = () => {
    const dispatch = useDispatch();
    const items = useSelector(({ pizzas }) => pizzas.items);
    const cartItems = useSelector(({ cart }) => cart.items);

    const isLoaded = useSelector(({ pizzas }) => pizzas.isLoaded);
    const { sortBy, cotegory } = useSelector(({ filters }) => filters);

    React.useEffect(() => {
        dispatch(fetchRizzas(cotegory, sortBy));
    }, [cotegory, sortBy]);
    
    const onSelectCategory = React.useCallback((index) => {
        dispatch(setCategory(index));
    }, []);

    const onSelectSortType = React.useCallback((type) => {
        dispatch(setSortBy(type));
    }, []);

    const handleAddPizzaToCatr = (obj) => {
        dispatch(addPizzaToCart(obj));
    };
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    activeCategory={cotegory}
                    onClickCategory={onSelectCategory}
                    items={categoryNames}
                />
                <Sort
                    onClickSortType={onSelectSortType}
                    activeSortType={sortBy.type}
                    items={sortIems}
                />
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                {isLoaded
                    ? items.map((obj) => (
                          <PizzaBlock
                              onClickAddPizza={handleAddPizzaToCatr}
                              key={obj.id}
                              addedCount={
                                  cartItems[obj.id] === undefined
                                      ? ''
                                      : cartItems[obj.id].items.length
                              }
                              {...obj}
                          />
                      ))
                    : Array(12)
                          .fill(0)
                          .map((_, id) => <PizzaLoadingBlock key={id} />)}
            </div>
        </div>
    );
};

export default Home;
