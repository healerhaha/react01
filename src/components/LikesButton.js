import React from 'react'

// 点赞修改state的值
/**
 * 方法一
 */
class LikesButton extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            likes: 0
        }
    }
    increaseLikes() {
        // console.log(this)
        this.setState({
            likes: this.state.likes + 1
        })
    }
    render() {
        return (
            <div className="likes-button-component">
                <button
                    type="button"
                    className="btn btn-outline-primary btn-lg"
                    onClick={() => { this.increaseLikes() }}
                >
                    👍 {this.state.likes}
                </button>
            </div>
        )
    }
}
/**
 * 方法二,bind this
 */
// class LikesButton extends React.Component{
//     constructor (props){
//         super(props)
//         this.state = {
//             likes:0
//         }
//         this.increaseLikes=this.increaseLikes.bind(this)
//     }
//     increaseLikes(){
//         alert(111)
//         console.log(this)
//         this.setState({
//           likes:++this.state.likes
//         })
//     }
//     render(){
//         return (
//             <div className="likes-button-component">
//                 <button 
//                     type="button" 
//                     className="btn btn-outline-primary btn-lg"
//                     onClick={this.increaseLikes}
//                 >
//                    👍 {this.state.likes}
//                 </button>
//             </div>
//         )
//     }
// }

export default LikesButton
