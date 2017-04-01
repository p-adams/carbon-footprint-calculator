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
            color: 'white',
            fontWeight: 'lighter'
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
                <FormItem>
                    <label htmlFor="water-consumption">Water consumption:</label>
                    <h4 style={selectStyle}>Per week, I do laundry:</h4>
                     <Select placeholder="select frequency">
                        <Option value={0}>0 times</Option>
                        <Option value={1}>1 - 3 times</Option>
                        <Option value={2}>4 - 9 times</Option>
                        <Option value={3}>More than 9 times</Option>
                    </Select>
                    <h4 style={selectStyle}>Per week, I run the dishwasher:</h4>
                     <Select placeholder="select frequency">
                        <Option value={0}>0 times</Option>
                        <Option value={1}>1 - 3 times</Option>
                        <Option value={2}>4 - 9 times</Option>
                        <Option value={3}>More than 9 times</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="household-items">Household appliances:</label>
                    <h4 style={selectStyle}>Each year, I purchase:</h4>
                     <Select placeholder="select frequency">
                        <Option value={0}>0 items</Option>
                        <Option value={1}>Less than 3 items</Option>
                        <Option value={2}>3 - 5 items</Option>
                        <Option value={3}>5 - 7 items</Option>
                        <Option value={4}>More than 7 items</Option>
                    </Select>
                   
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