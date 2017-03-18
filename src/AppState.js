import {extendObservable, computed} from 'mobx'

const CarbonFootprintCalculator = function() {
        extendObservable(this, {
            totalPoints: 0,
            
            get runningTotal(){
                return this.totalPoints
            },
            calculateTotal: computed(function(){
                return this.totalPoints
            })
        })
    }

const store = new CarbonFootprintCalculator()
export default store