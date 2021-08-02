import React, { useState ,useEffect} from 'react';
import './style.css';

const getLocalData = () => {
    const list =  localStorage.getItem("todoListData");

    if(list){
        return JSON.parse(list);
    }
    else{
        return([]);
    }
}

const Todo = () => {
    const [inputData, setInputData] = useState("");
    const [items, setItems] = useState(getLocalData());
    const [isEdited , setIsEdited] = useState("");
    const [toggleButton, setToggleButton] = useState(false);


    const addItemsHandler = ()=>{
        if(!inputData){
            alert("Enter Data!")
        }
        else if(inputData && toggleButton){
            setItems(items.map((currele) =>{
                if(currele.id === isEdited){
                    return {...currele, name:inputData}
                }
                return currele;
            }));
            setIsEdited();
            setInputData("");
            setToggleButton(false);
        }
        
        else {
            const myNewInputData = {
                id:new Date().getTime().toString(),
                name:inputData
            }
            setItems([...items , myNewInputData]);
            setInputData("");
        }
    }

    const editingItem = (id) => {
        const itemToBeEdited = items.find((currElem)=>{
            return currElem.id === id;
        });
        setIsEdited(id);
        setInputData(itemToBeEdited.name);
        setToggleButton(true);
    }
    
    const deletedItem = (id) => {
        const updatedItems = items.filter((currentEle)=>{
            return currentEle.id !== id; 
        });
        setItems(updatedItems);
    }
    
    const removeAllItems = () => {
        setItems([]);
    }

    useEffect(() => {
        localStorage.setItem("todoListData", JSON.stringify(items))
    }, [items]);

   
    return (
        <React.Fragment>    
            <div className="main-div">
                <div className="child-div">
                    <figure>
                        <img src="./images/todo.svg" alt="todo" />
                        <figcaption>Add Your List Here </figcaption>
                    </figure>
                    <div className="addItems">
                        <input className="form-control" type="text" placeholder="✍️ Add Items"  value={inputData} onChange={(event)=> setInputData(event.target.value)}/>
                        {toggleButton ? (<i className="far fa-edit add-btn" onClick={addItemsHandler}></i>)
                        : (<i className="fa fa-plus add-btn" onClick={addItemsHandler}></i>) };
                       
                    </div>


                    <div className="showItems">
                        {items.map((currElement)=>{
                            return (
                                <div key={currElement.id} className="eachItem">
                                <h3>{currElement.name}</h3>
                                <div className="todo-btn">
                                <i className="far fa-edit add-btn" onClick={()=> editingItem(currElement.id)}> </i>
                                <i className="far fa-trash-alt add-btn" onClick={()=> deletedItem(currElement.id)}></i>
                                </div>
                            </div>
                            )
                        })}
                       
                    </div>

                    <div className="showItems">
                        <button className="btn effect04" data-sm-link-text="Remove All" onClick={removeAllItems}><span>CHECK LIST</span></button>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Todo;
