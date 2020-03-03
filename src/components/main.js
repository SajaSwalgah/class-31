import React, { useEffect, useState } from 'react';

let arr =[];

function Main(props) {
    const [toDo, setToDo] = useState([])
    const [item, setItem] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('');
    const [difficulty, setDifficulty] = useState('');


    const _addItem = (e) => {
        setItem(e.target.value);
    }
    const _addAssignee = (e) => {
      setAssignee(e.target.value);
      let x= e.target.value
      arr.push(x)
      console.log('kkkkkk', arr);     
    }

    
    const _addStatus = (e) => {
        setStatus(e.target.value);
    }
    const _addDiff = (e) => {
        setDifficulty(e.target.value);
    }
    
    const _addToDo = (e) => {
        e.preventDefault();
        e.target.reset();
        setToDo([item, assignee]);
        // setS([status, difficulty])
        // console.log('rrrrrrrrr', setToDo([item, assignee]));        
    }
    


    return (
        <section>
            <form onSubmit={_addToDo}>
                <input onChange={_addItem} placeholder="to do" type="text" className="inputs"/><br />
                <input onChange={_addAssignee} placeholder="assignee" type="text" className="inputs" /><br />
                <input onChange={_addDiff} type="range" placeholder="difficuly from 1-5" max="5" min="0" className="inputs" defaultValue="3"/> <br />
                <label className="container">
                    <input onChange={_addStatus} type="checkbox" />
                   <span id="state"> State</span> 
                    <span className="checkmark"></span>
                </label>
                

                {/* <input onChange={_addStatus} type="checkbox" id="chek" />
                <label>status </label> */}
                <button>Add to List</button>
            </form>
            <p id="title"> To Do Items  </p>
            {
                toDo.map(item =>
                    <p key={item} id="items">item :{item}</p>
                    // let arr =[]
                    // arr.push(item)

                )
            }

        </section>
    )

}

console.log(arr );


export default Main