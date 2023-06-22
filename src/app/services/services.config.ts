import { DefaultDataServiceConfig } from "@ngrx/data";

export const defaultDataServiceConfig: DefaultDataServiceConfig = {
    root: 'http://localhost:8081/api/v1',
    timeout: 3000,
}