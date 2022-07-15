import { Service } from './cron.service';
var Cron = /** @class */ (function () {
    function Cron() {
        this.service = new Service();
    }
    Cron.prototype.startCron = function (pattern, funcname, funcobject, runoninit) {
        if (runoninit === void 0) { runoninit = false; }
        if (!!funcobject) {
            console.log('start cron');
            //new Service(this.config).runCron(config,funcname)        
            //let srv = new Service(this.config)
            this.service[funcname] = funcobject;
            //srv[funcname] = new Controller(this.config).getProduct().getService().syncProductCron()
            return this.service.runCronDetail(pattern, funcname, runoninit);
        }
        else {
            console.log('khong ton tai cron function');
            return false;
        }
    };
    return Cron;
}());
export { Cron };
//# sourceMappingURL=index.js.map