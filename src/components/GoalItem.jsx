import React from 'react';

export default function GoalItem({id, text, deleteGoal}) {
    return (
        <div>
            <span>{text}</span>
            <button onClick={() => deleteGoal(id)}>X</button>
        </div>
    );
}
