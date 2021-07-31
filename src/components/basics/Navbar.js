import React from 'react'

const Navbar = (props) => {
    return (
        <React.Fragment>
            <nav className="navbar">
                <div className="btn-group">
                    {props.menuList.map((currEle)=>{
                        return( <button key={currEle} className="btn-group__item" onClick={()=> props.breakfastFilter(currEle)}>{currEle}</button>) 
                    })}
                </div>
            </nav>
        </React.Fragment>
    )
}

export default Navbar
