import axios from "axios"

const BOOK_ENDPOINT = "api/books.json";

const api = axios.create({
    baseURL: BOOK_ENDPOINT,
    headers: {
        common: {
            Accept: 'application/json',
            "Content-Type": 'application/json'
        }
    }
});

export default function useBook() {

    function getAllBooks() {
        return api.get('')
    }

    return { getAllBooks }

}