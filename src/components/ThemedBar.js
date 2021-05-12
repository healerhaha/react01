import React from 'react'
import ThemeContxt from '../theme-contxt'

const ThemedBar = () => {
    return (
        <ThemeContxt.Consumer>
            {
                theme => {
                    // console.log(theme)
                    return(
                        <div 
                            className="alert mt-5"
                            style={ {backgroundColor:theme.bgColor ,
                               color: theme.color} }
                        >
                            样式区域
                            <button className={theme.className}>样式按钮</button>
                        </div>
                    )
                }
            }
        </ThemeContxt.Consumer>
    )

}

export default ThemedBar