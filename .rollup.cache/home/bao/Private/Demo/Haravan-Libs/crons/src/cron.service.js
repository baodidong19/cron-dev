import { CronJob } from 'cron';
var Service = /** @class */ (function () {
    function Service() {
    }
    Service.prototype.runCronDetail = function (pattern, funcname, runoninit) {
        if (runoninit === void 0) { runoninit = false; }
        if (this[funcname]) {
            console.log("runCronDetail: " + pattern + " - " + funcname);
            var job = new CronJob(pattern, this[funcname], null, true, 'Asia/Ho_Chi_Minh', null, runoninit);
            job.start();
            return true;
        }
        else {
            console.log("runCronDetail: not run");
            return false;
        }
    };
    return Service;
}());
export { Service };
//# sourceMappingURL=cron.service.js.map