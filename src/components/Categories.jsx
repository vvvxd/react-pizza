import React, { useState } from 'react';

const Categories = React.memo(({ items, onClick }) => {
    const [activeItem, setActiveItem] = useState(0);

    const onSelectItem = (index) => {
        setActiveItem(index);
        onClick(index);
    };

    return (
        <div className="categories">
            <ul>
                {items &&
                    items.map((item, id) => {
                        return (
                            <li
                                onClick={() => onSelectItem(id)}
                                key={`${item}_${id}`}
                                className={activeItem === id ? 'active' : ''}>
                                {item}
                            </li>
                        );
                    })}
            </ul>
        </div>
    );
}
)

export default Categories;
