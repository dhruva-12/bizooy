// This is a custome hooks for managing data in application

import { useState } from "react";

export function useFormFields(initialState) {
    const [fields, setValues] = useState(initialState);
    return [
        fields,
        function (event) {
            setValues({
                ...fields,
                [event.target.id]: event.target.value
            });    
        }
    ];
}