import React from 'react'
// 留言表单
/**
 * 受控组件
 */
// class CommentBox extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             value: ''
//         }
//         this.handleChange = this.handleChange.bind(this)
//         this.handleSubmit = this.handleSubmit.bind(this)
//     }
//     handleChange(event){
//         console.log('event',event.target.value)
//         this.setState({
//             value:event.target.value
//         })
//     }
//     handleSubmit(event){
//         alert(this.state.value);
//         event.preventDefault()//禁止了form的submit的默认行为，跳转等
//     }
//     render() {
//         return (
//             <form className="p-5" onSubmit={this.handleSubmit}>
//                 <div className="form-group">
//                     <label>留言内容</label>
//                     <input type="text"
//                         className="form-control"
//                         placeholder="请输入内容"
//                         value={this.state.value}
//                         onChange={this.handleChange}
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">留言</button>
//                 <p>已有{this.props.commentsLength}条评论</p>
//             </form>
//         )
//     }
// }

/**
 * 非受控组件,将真实数据保存在dom中，通过ref去取值
 */

 class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.handleSubmit = this.handleSubmit.bind(this)
    }
    handleSubmit(event){
        // alert(this.textInput.value);
        this.props.onAddComment(this.textInput.value)
        event.preventDefault()//禁止了form的submit的默认行为，跳转等
    }
    render() {
        return (
            <form className="p-5" onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>留言内容</label>
                    <input type="text"
                        className="form-control"
                        placeholder="请输入内容"
                        ref={(textInput) => { this.textInput = textInput}}
                    />
                </div>
                <button type="submit" className="btn btn-primary">留言</button>
            </form>
        )
    }
}
export default CommentBox
