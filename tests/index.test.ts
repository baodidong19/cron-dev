import 'jest'
import {Cron} from '../src'

const cronConfig = {
  cronTest: {
    pattern: '0 0 */2 * * *',
    active: true,
    runOnInit: false,
  }
}

describe('test cron', () =>{
  let job:any
  let jobRun:any
  
  test('init cronTest', async () => {
    const cronDetail = cronConfig['cronTest']
    const cron = new Cron()
    job = cron.startCron(cronDetail.pattern, 'cronTest', cronTest, cronDetail.runOnInit)
    expect(job).toBeDefined
  })
 

  test('init cronTest & run', async () => {
    const cronDetail = cronConfig['cronTest']
    const cron = new Cron()
    jobRun = cron.startCron(cronDetail.pattern, 'cronTestRun', cronTestRun, true)
    expect(jobRun).toBeDefined
  })
  afterAll(async() => {
    job.stop()
    jobRun.stop()});
})

var cronTest =  function async()
{
    console.log('run cronTest')
}

var cronTestRun =  function async()
{
    console.log('run cronTestRun')
}
