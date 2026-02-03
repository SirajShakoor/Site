import { Injectable, signal } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class CounterState {
  // private writable signal
  private readonly _count = signal(0);

  // public readonly signal
  readonly count = this._count.asReadonly();

  increment(){
    this._count.update(value => value + 1)
  }

  set(value: number){
    this._count.set(value);
  }
}
