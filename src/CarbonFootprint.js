import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Form, Input, Select, Radio} from 'antd';
const FormItem = Form.Item;
const RadioButton = Radio.Button;
const RadioGroup = Radio.Group;

const CarbonFootprint = observer(class CarbonFootprint extends Component{
    render(){
        const store = this.props.store
        const selectStyle = {
            color: 'white'
        }
        return (
            <Form layout="inline">  
                <label className="form-title" htmlFor="form-title">
                    Calculate your carbon footprint points using the form below
                </label><hr/>
                <FormItem>
                    <label>Members of household:</label>
                    <Input/>
                </FormItem>
                 <FormItem>
                    <label htmlFor="home-size">Size of home:</label>
                    <Select placeholder="Please select size of home">
                        <Option value="lg">Large</Option>
                        <Option value="md">Medium</Option>
                        <Option value="sm">Small</Option>
                        <Option value="apt">Apartment</Option>
                    </Select>
                </FormItem>
                    <FormItem>
                    <label htmlFor="food-consumption">Food consumption:</label>
                    <h4 style={selectStyle}>select one</h4>
                    <RadioGroup onChange={this.getDietaryPreference} defaultValue="a">
                        <RadioButton value="a">meat-eater</RadioButton>
                        <RadioButton value="b">vegetarian</RadioButton>
                        <RadioButton value="c">vegan</RadioButton>
                    </RadioGroup>
                    <label htmlFor="food-choices">What are your food consumption habits?</label>
                    <RadioGroup onChange={this.getFoodConsumption} value={store.foodConsumption}>
                        <Radio value={1}>I primarily eat prepackaged foods</Radio>
                        <Radio value={2}>I eat both prepackaged and fresh foods</Radio>
                        <Radio value={3}>I eat only fresh foods</Radio>
                    </RadioGroup>
                </FormItem>
            </Form>
        )
    }
    getDietaryPreference(e){
        console.log(e.target.value)
    }
    getFoodConsumption(e){
        console.log(e.target.value)
    }
})

export default CarbonFootprint