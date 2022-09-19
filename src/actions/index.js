import axios, { Axios } from "axios";
export const INITIAL_FETCH = 'INITIAL_FETCH';
export const SEND_SERVER = 'SEND_SERVER';

export function getInitialFetch() {
    return {
        type: INITIAL_FETCH,
        payload: { name: 'Ronaldo Silva' }
    }
}   

export function sendServer(data){
    const request = axios.post('http://localhost:9000', {data});
    return {
        type: SEND_SERVER,
        payload: request
    }
}