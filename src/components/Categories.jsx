import React from 'react';

const Categories = ({items,onClick}) => {
    return (
        <div className="categories">
            <ul>
                <li className="active">Все</li>
                {
                    items.map((item,id)=> <li onClick={()=>onClick(item)} key={`${item}_${id}`} >{item}</li>)
                }
            </ul>
        </div>
    );
};

export default Categories;
