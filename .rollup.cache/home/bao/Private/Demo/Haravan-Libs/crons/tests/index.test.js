import { __awaiter, __generator } from "tslib";
import 'jest';
import { Cron } from '../src';
var cronConfig = {
    cronTest: {
        pattern: '0 0 */2 * * *',
        active: true,
        runOnInit: false,
    }
};
describe('test cron', function () {
    test('register queue', function () { return __awaiter(void 0, void 0, void 0, function () {
        var cronDetail, cron, result;
        return __generator(this, function (_a) {
            cronDetail = cronConfig['cronTest'];
            cron = new Cron();
            result = cron.startCron(cronDetail.pattern, 'cronTest', cronTest, cronDetail.runOnInit);
            console.log(result);
            expect(result).toBe(true);
            return [2 /*return*/];
        });
    }); });
});
var cronTest = function async() {
    console.log('run cronTest');
};
//# sourceMappingURL=index.test.js.map