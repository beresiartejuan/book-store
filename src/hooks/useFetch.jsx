import { useEffect, useState } from "react";

export default function useFetch(instance) {

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);
    const [result, setResult] = useState(null);


    useEffect(() => {
        if (!loading) return;

        instance().then((response) => {
            setResult(response.data);
        }).catch(err => {
            setError(err);
        }).finally(() => {
            setLoading(false);
        });
    }, [loading]);

    return { loading, result, error };

}