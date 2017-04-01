import React, {Component} from 'react'
import {observer} from 'mobx-react'

const Results = observer(class Results extends Component{
    render(){
        return(
            <div>
                <h1>{this.props.store.runningTotal}</h1>
            </div>
        )
    }
})

export default Results