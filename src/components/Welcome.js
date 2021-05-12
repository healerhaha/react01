import React from 'react'

// hello world

class Welcome extends React.Component {
    render() {
        const todolist = ['learn react', 'learn redux'];
        const islogIn = false;
        return (
            <div className="this">
                <h1> Hello Rreact </h1>
                {1 + 2}
                <ul>
                    {
                        todolist.map((item,index) =>
                            <li key={index}>{item}</li>
                        )
                    }
                </ul>
                { islogIn ? <p> 你已经登陆 </p> : <p> 请登陆 </p> }
            </div>
        )
    }
}

export default Welcome