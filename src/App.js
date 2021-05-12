// import logo from './logo.svg';
import './App.css';
import LikesButton from './components/LikesButton';
import NameCard from './components/NameCard'
import Welcome from './components/Welcome'
import DigitalClock from './components/DigitalClock'
import CommentBox from './components/CommentBox'
import CommentList from './components/CommentList'
import ThemedBar from './components/ThemedBar'
import { Component } from 'react';
import ThemeContxt from './theme-contxt'

/**
 * 方法一
 */

// const tags = ['帅哥','王子']
// function App() {
//   return (
//     <div className="App">
//       <Welcome/>
//       <NameCard name="victory" number={12345678} isHuman tags={tags}/>
//       <LikesButton/>
//       <DigitalClock/>
//       <CommentBox/>
//     </div>
//   );
// }

/**
 * 方法二
 */

const tags = ['帅哥', '王子'];
const themes = {
    light: {
        className: 'btn btn-primary',
        bgColor: '#eeeeee',
        color: '#000'
    },
    dark: {
        className: 'btn btn-light',
        bgColor: '#222222',
        color: '#fff'
    },
}

class App extends Component {//组件间的数据改变需要变量提升到app.js中的state处理
    constructor(props) {
        super(props)
        this.state = {
            comments: ['this is my app'],
            theme: 'dark'
        }
        this.addComment = this.addComment.bind(this)
        this.changeTheme = this.changeTheme.bind(this)
    }
    addComment(comment) {
        this.setState({
            comments: [...this.state.comments, comment]
        })
    }
    changeTheme(theme) {
        this.setState({
            theme
        })
    }
    render() {
        const { comments } = this.state;
        return (
            <ThemeContxt.Provider value={themes[this.state.theme]}>
                <div className="App">
                    <h1 className="App-title">Welcome to React</h1>
                    <a href="#theme-switcher" className="btn btn-light" onClick={() => { this.changeTheme('light') }}>浅色主题</a>
                    <a href="#theme-switcher" className="btn btn-secondary" onClick={() => { this.changeTheme('dark') }}>深色主题</a>
                    <ThemedBar />
                    <Welcome />
                    <NameCard name="victory" number={12345678} isHuman tags={tags} />
                    <LikesButton />
                    <DigitalClock />
                    <CommentList comments={comments} />
                    <CommentBox
                        commentsLength={comments.length}
                        onAddComment={this.addComment}
                    />
                </div>
            </ThemeContxt.Provider>
        )
    }
}




export default App;
