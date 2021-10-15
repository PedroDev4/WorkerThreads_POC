import { isMainThread, Worker } from "worker_threads";
import path from "path";
import { user } from "../service/ExecuteHugeMathUseCase";

async function executionWorker(arrayExecution: user[], lat: number, lon: number) {
    return new Promise((resolve, reject) => {
        const workerJsPath = path.resolve(__dirname, "./worker.js")
        if (isMainThread) {
            const worker = new Worker(`${workerJsPath}`, {
                workerData: {
                    arrayExecution,
                    lat,
                    lon,
                }
            });

            worker.on('message', result => resolve(result));
            worker.on('error', error => reject(error))
        }
    });

}


export { executionWorker };