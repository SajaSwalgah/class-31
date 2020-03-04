import React, { useEffect, useState } from 'react';
// import uuid from 'uuid';


function Main(props) {
    const [toDo, setToDo] = useState([])
    const [item, setItem] = useState('');
    const [assignee, setAssignee] = useState('');
    const [status, setStatus] = useState('incomplete');
    const [difficulty, setDifficulty] = useState(3);

    // let id = uuid;


    const _addItem = (e) => {
        setItem(e.target.value);
    }
    const _addAssignee = (e) => {
        setAssignee(e.target.value);
    }
    const _addStatus = (e) => {
        setStatus('completed')
    }

    const _addDiff = (e) => {
        setDifficulty(e.target.value);

    }






    const _addToDo = (e) => {



        setStatus('incomplete')
        e.preventDefault();
        e.target.reset();
        setToDo([...toDo, [item, assignee, status]]);
        console.log('rrrrrrrrr', difficulty);

    }


    useEffect(() => {

        if (toDo.length >= 1) {
            let ctr = 0;
            let cctr = 0
            // console.log('rrrrrrrrrrrrrrrrrrrrr', toDo);
            for (let i = 0; i < toDo.length; i++) {
                if (toDo[i][2] === 'incomplete') {
                    ctr++
                } else if (toDo[i][2] === 'complete') {
                    cctr++
                }
            }
            document.title = `${ctr} items incompleted and ${cctr} items have completed`;
        } else document.title = `There Is No List!`;
    }, [toDo]);

    const changeStatus = e => {
        for (let i = 0; i < toDo.length; i++) {
            console.log('888888888', e.target.name);
            if (toDo[i][0] === e.target.name && toDo[i][2] === 'incomplete') {
                setStatus('completed')
            } else if (toDo[i][2] === 'completed') {
                setStatus('incomplete')
            }
        }
    }




    return (
        <section>
            <form onSubmit={_addToDo}>
                <input onChange={_addItem} placeholder="to do" type="text" className="inputs" /><br />
                <input onChange={_addAssignee} placeholder="assignee" type="text" className="inputs" /><br />
                <label>
                    <input onChange={_addDiff} type="range" placeholder="difficuly from 1-5" max="5" min="0" className="inputs" defaultValue="3" /> <br />
                    {/* <span> Difficulty</span> */}
                </label>
                <label className="container">
                    <input onClick={_addStatus} type="checkbox" />
                    <span id="state"> State</span>
                    <span className="checkmark"></span>
                </label>


                {/* <input onChange={_addStatus} type="checkbox" id="chek" />
                <label>status </label> */}
                <button>Add to List</button>
            </form>
            <p id="title"> To Do Items  </p>
            {
                toDo.map((item, idx) =>
                    <li key={idx} id="items">
                        TO DO : {item[0]}
                        <span id="assignee">By : {item[1]} </span>
                        <button onClick={changeStatus} name={item[0]} style={{ background: item[2] === 'incomplete' ? 'red' : 'greenF' }}>{item[2]}</button>

                    </li>
                )
            }
        </section>
    )

}

//  "homepage": "https://github.com/SajaSwalgah/class-31/",



export default Main