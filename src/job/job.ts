class Job {
  interval: NodeJS.Timer;
  isJobRunning: boolean;
  milliseconds = 10000;
  job: () => void;

  state() {
    return {
      isJobRunning: this.isJobRunning,
      milliseconds: this.milliseconds,
      interval: this.interval,
    };
  }

  stopJob() {
    if (this.interval) {
      clearInterval(this.interval);
      this.isJobRunning = false;
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
    this.stopJob();
  }

  startJob() {
    this.job(); // because setInterval will do it on next tick.
    this.interval = setInterval(this.job, this.milliseconds);
    this.isJobRunning = true;
  }

  constructor() {
    return this;
  }
}

const job = new Job();

export default job;
