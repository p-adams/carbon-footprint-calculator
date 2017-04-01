import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Form, Input, Select} from 'antd';
const FormItem = Form.Item;

const CarbonFootprint = observer(class CarbonFootprint extends Component{
    render(){
        return (
            <Form layout="inline">  
                <label className="form-title" htmlFor="form-title">
                    Calculate your carbon footprint points using the form below
                </label><hr/>
                <FormItem>
                    <label>Members of household</label>
                    <Input/>
                </FormItem>
                 <FormItem>
                    <label>Size of home</label>
                    <Select placeholder="Please select size of home">
                        <Option value="lg">Large</Option>
                        <Option value="md">Medium</Option>
                        <Option value="sm">Small</Option>
                        <Option value="apt">Apartment</Option>
                    </Select>
                </FormItem>
            </Form>
        )
    }
    getHouseholdCount(e){
        this.props.store = e.target.value
    }
})

export default CarbonFootprint