import {extendObservable, computed} from 'mobx'

class CarbonFootprintCalculator {
    constructor(){
        extendObservable(this, {
            totalPoints: 0,
            get runningTotal(){
                return this.totalPoints
            },
            calculateTotal : computed(function(){
                 return this.totalPoints
            })
        })
    }
}

const store = new CarbonFootprintCalculator()
export default store