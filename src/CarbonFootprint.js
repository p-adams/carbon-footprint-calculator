import React, {Component} from 'react'
import {observer} from 'mobx-react'
import { Form, Input, Select, Radio} from 'antd';
import { Checkbox } from 'antd';
import { Slider, InputNumber} from 'antd';
const CheckboxGroup = Checkbox.Group;
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
        const recycleOptions = ['Glass', 'Plastic', 'Paper', 'Aluminum', 'Steel', 'Food waste'];
        return (
            <Form layout="inline">  
                <label className="form-title" htmlFor="form-title">
                    Calculate your carbon footprint points using the form below
                </label><hr/><br/>
                <FormItem>
                    <label>Members of household:</label>
                    <InputNumber min={0} max={20} style={{ marginLeft: 16 }}/>
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
                <FormItem>
                    <label htmlFor="waste-prod">Waste production:</label>
                    <h4 style={selectStyle}>I fill {store.wasteProductionValue} garbage can(s) per week:</h4>
                     <Select placeholder="select garbage can count">
                        <Option value={0}>1/2 or less</Option>
                        <Option value={1}>1</Option>
                        <Option value={2}>2</Option>
                        <Option value={3}>3</Option>
                        <Option value={4}>4</Option>
                    </Select>
                </FormItem>
                <FormItem>
                    <label htmlFor="rec-waste">Recycled waste:</label>
                    <h4 style={selectStyle}>Do you recycle?</h4>
                    <RadioGroup>
                        <Radio value={1}>yes</Radio>
                        <Radio value={2}>no</Radio>
                    </RadioGroup>
                    {/*if yes, show recycle panel*/}
                     <CheckboxGroup options={recycleOptions}/>
                </FormItem>
                <FormItem>
                    <label htmlFor="transportation">Transportation score:</label>
                    <h4 style={selectStyle}>I travel x mile(s) by car:</h4>
                    <Slider min={0} max={20000}/>
                    <InputNumber min={0} max={20000} style={{ marginLeft: 16 }}
                    />
                    <h4 style={selectStyle}>I travel x mile(s) by public transportion:</h4>
                    <Slider min={0} max={20000}/>
                    <InputNumber min={0} max={20000} style={{ marginLeft: 16 }}
                    />
                    <h4 style={selectStyle}>By airplane, I mainly fly:</h4>
                    <Select placeholder="select flight distance">
                        <Option value={0}>Within state</Option>
                        <Option value={1}>To a nearby state/country</Option>
                        <Option value={2}>To a another continent</Option>
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