import type { Axios } from 'axios'
declare module api {
    api: any
    // get: (url: string) => any;
}

export function get(arg0: string): Primise<{ data: object }> {
    throw new Error('Function not implemented.')
}
