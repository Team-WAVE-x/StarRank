/* eslint-disable @typescript-eslint/no-unused-expressions */
import React, { Component } from 'react'
import './css/App.css'
import './components/UserContent'
import UserContent from './components/UserContent'
import getUser from './data/GetUser'
const member = require('./data/member.json')

class App extends Component {
    public render() {
        for (let i = 0; i < member.length; i++){
            getUser(member[i].name).then(a => console.log(a))
        }
        return (
            <div className="App">
                <header>
                    <h1 className="title">Team WAVE Member Star Ranking</h1>
                </header>
                <div className="users">
                    <UserContent name={member[0].name} stars={member[0].stars} followers={member[0].followers}
                    avatarUrl={member[0].avatarUrl}/>
                    <UserContent name={member[1].name} stars={member[1].stars} followers={member[1].followers}
                    avatarUrl={member[1].avatarUrl}/>
                    <UserContent name={member[2].name} stars={member[2].stars} followers={member[2].followers}
                    avatarUrl={member[2].avatarUrl}/>
                    <UserContent name={member[3].name} stars={member[3].stars} followers={member[3].followers}
                    avatarUrl={member[3].avatarUrl}/>
                    <UserContent name={member[4].name} stars={member[4].stars} followers={member[4].followers}
                    avatarUrl={member[4].avatarUrl}/>
                    <UserContent name={member[5].name} stars={member[5].stars} followers={member[5].followers}
                    avatarUrl={member[5].avatarUrl}/>
                    <UserContent name={member[6].name} stars={member[6].stars} followers={member[6].followers}
                    avatarUrl={member[6].avatarUrl}/>
                    <UserContent name={member[7].name} stars={member[7].stars} followers={member[7].followers}
                    avatarUrl={member[7].avatarUrl}/>
                    <UserContent name={member[8].name} stars={member[8].stars} followers={member[8].followers}
                    avatarUrl={member[8].avatarUrl}/>
                </div>
            </div>
        )
    }
}

export default App
