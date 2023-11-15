import axios, { AxiosPromise } from "axios"
import { PizzaData } from "../interface/PizzaData";
import { useQuery } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const fetchData = async (): AxiosPromise<PizzaData[]> => {
    const response = axios.get(API_URL + '/pizza')
    return response;
}

export function usePizzaData() {
    const query = useQuery({
        queryFn: fetchData,
        queryKey: ['pizza-data'],
        retry: 2
    })

    return {
        ...query,
        data: query.data?.data
    }
}