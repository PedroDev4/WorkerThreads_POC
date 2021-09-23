import { parentPort, workerData } from "worker_threads";

function calculateNumbers(num1: number, num2: number): number {

    return (((num1 + num2) / 2) * 4) + 14598432;

}

parentPort.postMessage(calculateNumbers(5000, 123523));