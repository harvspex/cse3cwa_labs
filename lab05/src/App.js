import React, { useState } from 'react';
import List from './List';

function App() {
    const [lists, setLists] = useState([
        { id: 1, name: 'To Doe', tasks: [] },
        { id: 2, name: 'In Progress', tasks: [] },
        { id: 3, name: 'Done', tasks: [] }
    ]);

    return (
        <div>
            {lists.map((list) => (
                <List key={list.id} list={list} />
            ))}
        </div>
    );
}

export default App;
