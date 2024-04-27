import { useState } from "react";

export default function useChecker(default_state = false) {
    const [checker, setChecker] = useState(default_state);

    const check = () => {
        setChecker(old_state => !old_state);
    }

    return [checker, check];
}