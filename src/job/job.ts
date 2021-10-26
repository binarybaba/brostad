import {Housing} from "../types";

class Job {
  interval: NodeJS.Timer;
  isJobRunning: boolean = false;
  milliseconds: number = 1200000; // 20 minutes
  results: Array<Housing> = []
  job: () => void;

  state() {
    return {
      interval: this.interval,
      isJobRunning: this.isJobRunning,
      milliseconds: this.milliseconds,
    }
  }

  getResults() {
    return this.results;
  }

  // for debugging only. If you wanna restart the job, use restart()
  // This makes the interval 10 seconds.

  resetState() {
    this.job = () => {};
    this.milliseconds = 10000;
    this.stopJob();
    this.results = []
  }

  restart() {
    this.stopJob();
    this.startJob();
  }

  stopJob() {
    clearInterval(this.interval);
    this.results = []
    this.isJobRunning = false;
  }

  // this is when we might have different jobs.. then it shall also take a job id
  updateJob(job) {
    this.job = job;
  }

  updateMilliseconds(milliseconds) {
    this.milliseconds = milliseconds;
  }

  startJob(job?: () => void) {
    if (job) {
      this.updateJob(job);
    }
    if(this.job) {
      this.job(); // because setInterval will do it on next tick.
      this.interval = setInterval(this.job, this.milliseconds);
      this.isJobRunning = true;
    }
  }

  updateResults(results) {
    this.results = results;
  }

  constructor() {
    return this;
  }
}

const job = new Job();

export default job;
