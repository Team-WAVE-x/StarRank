import React from 'react'
import './css/App.css'
import './components/UserContent'
import UserContent from './components/UserContent'

function App() {
    return (
        <div className="App">
            <header>
                <h1>Team WAVE Member Star Ranking</h1>
            </header>
            <div className="users">
                <UserContent />
            </div>
        </div>
    )
}

export default App
