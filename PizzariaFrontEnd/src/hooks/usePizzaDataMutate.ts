import axios, { AxiosPromise } from "axios"
import { PizzaData } from "../interface/PizzaData";
import { useMutation, useQueryClient } from "@tanstack/react-query";

const API_URL = 'http://localhost:8080'

const postData = async (data: PizzaData): AxiosPromise<any> => {
    const response = axios.post(API_URL + '/pizza', data)
    return response;
}

export function usePizzaDataMutate() {
    const queryClient = useQueryClient();
    const mutate = useMutation({
        mutationFn: postData,
        retry: 2,
        onSuccess: () => {
            queryClient.invalidateQueries({ queryKey: ['pizza-data'] })
        }
    })

    return mutate;
}