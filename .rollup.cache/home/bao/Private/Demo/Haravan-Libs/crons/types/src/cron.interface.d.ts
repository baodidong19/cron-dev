export interface DebugData {
    getNextExecuteAt: Function;
    getLastExecuteAt: Function;
    getLastExecuteIn: Function;
    checkIsRunning: Function;
    getCurrentOverlap: Function;
    isRunOnInit: boolean;
    maxOverlap: number;
    cronTime: string;
    name: string;
    bindTo: string;
    description: string;
}
