import {extendObservable, computed} from 'mobx'

class CarbonFootprintCalculator {
    constructor(){
        extendObservable(this, {
            runningTotal: 0,
            household: 1,
            homesize: "md",
            diet: "a",
            foodConsumption: "b",
            laundry: "b",
            dishes: "b",
            appliances: "b",
            waste: "b",
            recyclePref: "",
            showRecyclePanel: false,
            carVal: 0,
            pubTransVal: 0,
            flight: "b",

            setHouseholdCount(val){
                this.household = val++
                console.log(`household: ${this.household}`)
            },
            setHomeSize(val){
                this.homesize = val
                console.log(`homesize: ${this.homesize}`)
            },
            setDiet(val){
                this.diet = val
                console.log(`diet: ${this.diet}`)
            },
            setFoodConsumption(val){
                this.foodConsumption = val
                console.log(`food: ${this.foodConsumption}`)
            },
            setLaundryCount(val){
                this.laundry = val
                console.log(`laundry: ${this.laundry}`)
            },
            setDishCount(val){
                this.dishes = val
                console.log(`dishes: ${this.dishes}`)
            },
            setAppliances(val){
                this.appliances = val
                console.log(`appliances: ${this.appliances}`)
            },
            setWaste(val){
                this.waste = val
                console.log(`waste: ${this.waste}`)
            },
            setRecyclePref(val){
                this.recyclePref = val
                this.recyclePref === "a" ? this.showRecyclePanel = true : this.showRecyclePanel = false
                console.log(`recycle preference: ${this.recyclePref}`)
            },
            setRecycledItems(val){
                console.log(val)
            },
            setCarTrans(val){
                this.carVal = val 
                console.log(`car miles: ${this.carVal}`)
            },
            setPubTrans(val){
                this.pubTransVal = val
                console.log(`pub miles: ${this.pubTransVal}`)
            },
            setFlight(val){
                this.flight = val
                console.log(`flight: ${this.flight}`)
            },
            calculateTotal : computed(function(){
                 return this.runningTotal
            })
        })
    }
}

const store = new CarbonFootprintCalculator()
export default store