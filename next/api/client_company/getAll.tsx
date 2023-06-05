import axios from "axios";

export const getAll = async () => {
    const result = await fetch('http://localhost:8000/api/client_companies')
    const data = await result.json();
    return data
}