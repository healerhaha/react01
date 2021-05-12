// 时钟组件
import React from 'react'

class DigitalClock extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            date: new Date()
        }
    }
    componentDidMount(){
        // 组件生命周期： 初始化
        this.timer = setInterval(() => {
            this.setState({
                date: new Date()
            })
        }, 3000);
    }
    componentDidUpdate(currentProps,currentState){
        // 组件生命周期：更新
        // 两个参数，一个是props，一个是state
        console.log(currentState)
    }
    componentWillUnmount(){
        // 组件生命周期：卸载
        clearInterval(this.timer)
    }
    render() {
        return (
            <div className="digital-clock-component jumbotron"> 
            <h1>{this.state.date.toLocaleTimeString()}</h1>
            </div>
        )
    }
}

export default DigitalClock