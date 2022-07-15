import {Service} from './cron.service'
export class Cron{
    private service

    constructor()
    {
        this.service = new Service()
    }
    
    public startCron(pattern:string, funcname:string, funcobject: any, runoninit = false)
    {
        if (!!funcobject)
        {
            console.log('start cron')
            //new Service(this.config).runCron(config,funcname)        
            //let srv = new Service(this.config)
            this.service[funcname] = funcobject
            //srv[funcname] = new Controller(this.config).getProduct().getService().syncProductCron()
            return this.service.runCronDetail(pattern,funcname, runoninit)
        }
        else
        {
            console.log('khong ton tai cron function')
            return false
        }       
    }
}