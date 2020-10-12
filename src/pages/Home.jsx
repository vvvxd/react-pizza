import React from 'react';
import {Categories,PizzaBlock, Sort} from "../components";

const Home = ({items}) => {
    return (
        <div className="container">
            <div className="content__top">
                <Categories
                    onClick={(name) => console.log(name)}
                    items={[
                        "Все",
                        "Мясные",
                        "Вегетарианская",
                        "Гриль",
                        "Острые",
                        "Закрытые",
                    ]}
                />
                <Sort 
                items={[
                    {name:'популярности',type:'popylar'}, {name:'цене',type:'prise'}, 
                    {name:'алфавиту',type:'alph'}
                    ]}/>
            </div>
            <h2 className="content__title">Все пиццы</h2>
            <div className="content__items">
                { items &&
                    items.map((item)=>
                        <PizzaBlock key={item.id} {...item} />
                    )
                }

            </div>
        </div>
    );
};

export default Home;
