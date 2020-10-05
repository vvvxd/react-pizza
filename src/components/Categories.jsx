import React, {useState} from 'react';

const Categories = ({items, onClick}) => {
    const [activeItem, setActiveItem] = useState(0);
    return (
        <div className="categories">
            <ul>
                { items &&
                    items.map((item, id) => {
                        return (
                            <li
                                onClick={() => setActiveItem(id)}
                                key={`${item}_${id}`}
                                className={activeItem===id ? 'active':''}
                            >
                                {item}
                            </li>
                        )
                    })
                }
            </ul>
        </div>
    );
};

export default Categories;
