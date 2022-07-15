import {
    CronJob
  } from 'cron'
export class Service{
    [key: string]: any
    constructor()
    {
      
    }

    public runCronDetail(pattern:string,funcname:string, runoninit=false) {
      if (this[funcname])
      {
        console.log("runCronDetail: " + pattern + " - " + funcname)
        var job = new CronJob(pattern, this[funcname], null, true, 'Asia/Ho_Chi_Minh',null,runoninit)
        job.start()
        return job
      }
      else
      {
        console.log("runCronDetail: not run")
        return null
      }
    }
}
