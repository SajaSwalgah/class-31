import React, { useEffect, useState } from 'react';

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
        setToDo([item, assignee, status, difficulty]);
        console.log('rrrrrrrrr', toDo);

    }



    return (
        <section>
            <form onSubmit={_addToDo}>
                <input onChange={_addItem} placeholder="to do" type="text" /><br />
                <input onChange={_addAssignee} placeholder="assignee" type="text" /><br />
                <input onChange={_addStatus} type="checkbox" />
                <label>status </label><br />
                <select onChange={_addDiff}>
                    <option>Difficulty</option>
                    <option>1</option>
                    <option>2</option>
                    <option>3</option>
                    <option>4</option>
                    <option>5</option>
                </select>
                <label>Difficulty </label><br />
                <button>Add to List</button>
            </form>
            {
        toDo.map(item => 
          <p key={item}>{item}</p>
        )
      }
        </section>
    )

}

export default Main