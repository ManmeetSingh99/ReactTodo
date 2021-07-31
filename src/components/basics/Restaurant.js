import React, { useState } from 'react'
import './style.css';
import Menu from '../menuApi';
import MenuCard from './MenuCard';
import Navbar from './Navbar';

const uniqueList = [...new Set(Menu.map((currEle)=>{
    return currEle.category;
}))
,"All",
];

const Restaurant = () => {
    const [menuData, setMenuData] = useState(Menu);
    const [menuList, setMenuList] = useState(uniqueList);

    const breakfastFilter = (category)=>{
        if(category==="All"){
            setMenuData(Menu);
            return;        
        }
        const updatedList = Menu.filter((currentElement)=>{
            return currentElement.category === category;
        });
        
        setMenuData(updatedList);
    }
    
    return (
        <React.Fragment>
            <Navbar breakfastFilter={breakfastFilter} menuList={menuList} />
            <MenuCard menuData={menuData} />
        </React.Fragment>
    )
}

export default Restaurant
