import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';


export const useParamState = () => {
    const params = useParams();
    const [paramState, setParamState] = useState(1);

    useEffect(() => {
        if (params.id) {
            setParamState(parseInt(params.id));
        }
    }, [params]);

    return {paramState};
}
