import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Row, Col } from 'antd';

const Results = observer(class Results extends Component{
    render(){
        return(
            <div>
                <Row>
                    <Col span={8}></Col>
                    <Col span={8}>
                        <h3>Running total</h3>
                        <h1>{this.props.store.runningTotal}</h1>
                    </Col>
                    <Col span={8}></Col>
                </Row>
            </div>
        )
    }
})

export default Results