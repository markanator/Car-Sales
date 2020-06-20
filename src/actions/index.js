export const ADD_FEATURE = "ADD_FEATURE";
export const REMOVE_FEATURE = "REMOVE_FEATURE";

export const addFeature = newFeature =>{
    console.log("Adding New Feature!");
    return { type: ADD_FEATURE, payload: newFeature};
}
export const removeFeature = oldFeature =>{
    console.log("Removing Feature!");
    return { type: REMOVE_FEATURE, payload: oldFeature
    };
}

