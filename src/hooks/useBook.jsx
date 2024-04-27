import axios from "axios"

export default function useBook() {

    function get() {
        return axios.get('/')
    }

    return { get }

}