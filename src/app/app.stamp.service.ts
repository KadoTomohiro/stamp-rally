import { Injectable } from '@angular/core';

@Injectable()
export class StampSheet {

  private STORE_KEY = 'stamp';

  constructor() {
    let stampCodes = [
      'aaa',
      'bbb',
      'ccc'
    ];

    let stamps = this.restore(this.STORE_KEY) || stampCodes.map(this.initStore);
    this.store(this.STORE_KEY, stamps);
  }

  get sheet () {
    return this.restore(this.STORE_KEY);
  }

  public stamp(code: string) {
    console.log(`Stamp ${code}`);
    let stamps = this.restore(this.STORE_KEY);
    let index = stamps.findIndex((e: Stamp) => e.code === code);
    console.log(index);
    let stamp = stamps[index];
    if (stamp) {
      stamp.stamped = true;
      stamps[index] = stamp;
    }
    this.store(this.STORE_KEY, stamps);

    return index || undefined;
  }

  private initStore(code) {
    return new Stamp(code, false)
  }

  private store(key, data) {
    localStorage.setItem(key, JSON.stringify(data));
    return;
  }
  private restore(key: string) {
    return JSON.parse(localStorage.getItem(key));
  }

}

interface IStamp {
  code: string;
  stamped: boolean;
}

class  Stamp implements IStamp{
  constructor(public code: string, public stamped: boolean) {
  }
}
