import {extendObservable, computed} from 'mobx'

class CarbonFootprintCalculator {
    constructor(){
        extendObservable(this, {
            runningTotal: 0,
            foodConsumption: 2,
            wasteProductionValue: 0,
            get getRunningTotal(){
                return this.runningTotal
            },
            calculateTotal : computed(function(){
                 return this.runningTotal
            })
        })
    }
}

const store = new CarbonFootprintCalculator()
export default store