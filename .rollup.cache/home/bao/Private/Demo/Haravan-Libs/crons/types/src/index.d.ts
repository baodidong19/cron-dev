export declare class Cron {
    private service;
    constructor();
    startCron(pattern: string, funcname: string, funcobject: any, runoninit?: boolean): boolean;
}
