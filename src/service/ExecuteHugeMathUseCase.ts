import { executionWorker } from "../WorkerThreads/main";
export type user = {
    id: number,
    value: number,
    peso: number,
    altura: number,
}

const array: user[] = [
    {
        id: 1,
        value: 101,
        peso: 70,
        altura: 1.70
    },
    {
        id: 2,
        value: 102,
        peso: 79,
        altura: 1.75
    },
    {
        id: 3,
        value: 103,
        peso: 86,
        altura: 1.78
    },
    {
        id: 4,
        value: 104,
        peso: 90,
        altura: 1.80
    },
    {
        id: 5,
        value: 105,
        peso: 96,
        altura: 1.85
    }
];

class ExecuteHugeMathUseCase {

    async execute() {

        const calculatedDistance = await executionWorker(array, 15.40, 30.20);
        return calculatedDistance;
    }
}


export { ExecuteHugeMathUseCase }