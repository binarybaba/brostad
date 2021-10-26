class Job {
  interval: NodeJS.Timer;
  milliseconds = 10000;
  job: () => void;

  stopJob() {
    if (this.interval) {
      clearInterval(this.interval);
    }
  }

  updateMilliseconds(milliseconds) {
    this.milliseconds = milliseconds;
  }

  getMilliseconds() {
    return this.milliseconds;
  }

  updateJob(job) {
    this.job = job;
    this.stopJob()

  }

  startJob() {
    this.job();// because setInterval will do it on next tick.
    this.interval = setInterval(this.job, this.milliseconds);
  }

  constructor() {
    return this;
  }
}

const job = new Job();

export default job;