import React from 'react';

const MenuCard = (props) => {
    
    return (
        <section className="main-card--container">
        {props.menuData.map((currEle)=> {
            return(
            <React.Fragment key={currEle.id}>
                <div  className="card-container" >
                    <div className="card">
                        <div className="card-body">
                            <span className="card-number card-circle subtle">{currEle.id}</span>
                            <span className="card-author subtle">{currEle.name}</span>
                            <h2 className="card-title">{currEle.name}</h2>
                            <span className="card-description subtle">{currEle.description}</span>
                            <div className="card-read">Read</div>
                        </div>
                        <img src={currEle.image} alt="" className="card-media" />
                        <span className="card-tag subtle">Order Now</span>
                    </div>
                </div>
            </React.Fragment>
            );
        })}
        
        </section>
    )
}

export default MenuCard
