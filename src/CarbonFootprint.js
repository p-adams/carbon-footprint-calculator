import React, {Component} from 'react'
import {observer} from 'mobx-react'

const CarbonFootprint = observer(class CarbonFootprint extends Component{
    render(){
        return (
            <form>  
                Carbon Footprint Form
            </form>
        )
    }
})

export default CarbonFootprint