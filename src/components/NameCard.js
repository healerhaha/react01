import React from 'react'

// 名片

/**
 * 方法一
 */
const NameCard = props => {
    const { name, number, isHuman, tags } = props;
    console.log('tags', tags)
    return (
        <div className="alert alert-success">
            <h4 className="alert-heading">{name}</h4>
            <ul>
                <li>电话11：{number}</li>
                <li>{isHuman ? '人类' : '外星生物'}</li>
                <hr />
                <p>
                    {
                        tags.map((tag, index) => (
                            <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
                        ))
                    }
                </p>

            </ul>
        </div>
    )
}

/**
 * 方法二
 */
// class NameCard extends React.Component{
//     render() {
//         const { name , number , isHuman , tags } = this.props;
//         console.log('tags',tags)
//         return (
//             <div className="alert alert-success">
//                 <h4 className="alert-heading">{name}</h4>
//                 <ul>
//                     <li>电话11：{number}</li>
//                     <li>{isHuman ? '人类' :'外星生物' }</li>
//                     <hr/>
//                     <p>
//                         {
//                             tags.map((tag,index) =>(
//                                 <span className="badge badge-pill badge-primary" key={index}>{tag}</span>
//                             ))
//                         }
//                     </p>

//                 </ul>
//             </div>
//         )
//     }
// }

export default NameCard