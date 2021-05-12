import React from 'react'

// 当一个组件没有生命周期也没有state的时候，就用一个function的形式，比较简单

const CommentList = ({ comments }) => {
    return (
        <div className="comment-list-component">
            <label>评论列表</label>
            <ul className="list-group mb-3">
                {
                    comments.map((comment, index) =>
                        <li key={index} className="list-group-item">{comment}</li>

                    )
                }

            </ul>
        </div>
    )
}

export default CommentList