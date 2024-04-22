import React from 'react';
import GoalsList from './components/GoalsLists';
import TodosList from './components/TodosLists';

export default function App() {
    return (
        <>
            <GoalsList />
            <TodosList />
        </>
    );
}
