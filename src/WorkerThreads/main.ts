import { isMainThread, Worker } from "worker_threads";
import path from "path";

const workerJsPath = path.resolve(__dirname, "./worker.js")
if (isMainThread) {
    const worker = new Worker(`${workerJsPath}`, {
        workerData: {
            pathMath: './worker.ts'
        }
    });

    worker.on('message', result => console.log(result));
}