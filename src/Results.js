import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Row, Col } from 'antd';

const Results = observer(class Results extends Component{
    render(){
        const store = this.props.store
        const f = {
            fontSize: "20pt"
        }
        return(
            <div className="results">
                <Row>
                    <Col span={8}></Col>
                    <Col span={8} className="col">
                        <h3>Running Total</h3>
                        <h1 style={f}>{store.calculateTotal}</h1>
                    </Col>
                    <Col span={8}></Col>
                </Row>
                 <Row>
                    <Col span={8}></Col>
                    {store.calculateTotal >= 60 ?
                         <Col span={8} className="col">
                            <h3>Your carbon footprint leaves a big impact</h3>
                         </Col>
                    :   <Col span={8} className="col">
                            <h3>Your carbon footprint leaves a small impact</h3>
                        </Col>
                    }
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
})

export default Results