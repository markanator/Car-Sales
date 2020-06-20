import {ADD_FEATURE, REMOVE_FEATURE} from "../actions";

export const initialState = {
    additionalPrice: 0,
    car: {
        price: 26395,
        name: '2019 Ford Mustang',
        image: 'https://cdn.motor1.com/images/mgl/0AN2V/s1/2019-ford-mustang-bullitt.jpg',
        features: []
    },
    additionalFeatures: [
        {
            id: 1,
            name: 'V-6 engine',
            price: 1500
        }, {
            id: 2,
            name: 'Racing detail package',
            price: 1500
        }, {
            id: 3,
            name: 'Premium sound system',
            price: 500
        }, {
            id: 4,
            name: 'Rear spoiler',
            price: 250
        }
    ]
}

export const featureReducer = (state = initialState, action) =>{
    switch(action.type) {
        case ADD_FEATURE:
            console.log("## featureReducer ADD feature");
            // LOGIC
            // 1. spread state to get freshest data
            return {...state,
                // 2. add to additional price
                additionalPrice: state.additionalPrice + action.payload.price,
                // 3. spread carState for freshest Data
                car: {...state.car,
                    // 4. spread features array to add obj to it
                    // keeps data
                    features:[...state.car.features,
                    {
                        id: action.payload.id,
                        name: action.payload.name,
                        price: action.payload.price
                    }
                    ]
                }
            }
            case REMOVE_FEATURE:
                console.log(" ## featureReducer REMOVE feature")
                return {...state,
                    // 2. add to additional price
                    additionalPrice: state.additionalPrice - action.payload.price,
                    // 3. spread carState for freshest Data
                    car: {...state.car,
                        // 4. remove specific feat from state
                        features: state.car.features.filter((feat)=>{
                            return feat.id !== action.payload.id; 
                        })
                        
                    }
                }
        default:
            return state;
    }
}