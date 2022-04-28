import { Component, OnDestroy, OnInit } from '@angular/core';
import { filter, map, Observable, Subscription } from 'rxjs';

@Component({
  selector: 'app-observ',
  templateUrl: './observ.component.html',
  styleUrls: ['./observ.component.css'],
})
export class ObservComponent implements OnInit, OnDestroy {
  orderStatus: any;
  orderStatusObs!: Observable<any>;
  subcription!: Subscription;
  constructor() {

  }
  /* this.sub= this.my.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );

    this.sub = this.my.subscribe(
      (val) => {
        console.log(val);
      },
      (error) => {
        console.log(error);
      },
      () => {
        console.log('Completed');
      }
    );
  }

  ngOnInit(): void {}


  myob: Observable<any> = new Observable((observer) => {
    console.log(observer);
    observer.next('a');
    observer.next('b');
    observer.next('c');
    observer.next('e');
    observer.next('f');
    observer.error();
    observer.complete();
    observer.next('q');
  });

  /*
 observable = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});



 observable1 = new Observable(subscriber => {
  subscriber.next(1);
  subscriber.next(2);
  subscriber.next(3);
  setTimeout(() => {
    subscriber.next(4);
    subscriber.complete();
  }, 1000);
});

/*
observable3.subscribe({
  next(x) { console.log('got value ' + x); },
  error(err) { console.error('something wrong occurred: ' + err); },
  complete() { console.log('done'); }
});
console.log('just after subscribe');
*/
  /*
  my: Observable<any> = new Observable((observer) => {
    console.log('ob1');
    setTimeout(() => {
      observer.next(1);
    }, 1000);
    setTimeout(() => {
      observer.next(2);
    }, 2000);
    setTimeout(() => {
      observer.next(3);
    }, 3000);
    setTimeout(() => {
      observer.next(4);
    }, 4000);
  }).pipe(
    filter((data: any) => {
      return data > 2;
    }),
    map((data: any) => {
      return data * 3;
    })
  );
*/

  ngOnInit(): void {

    this.initOrderStatus();
  }

  initOrderStatus() {
    this.orderStatusObs = new Observable((observer) => {
      setTimeout(() => {
        observer.next('in progress');
      }, 1000);
      setTimeout(() => {
        observer.next('processing!');
      }, 5000);
      setTimeout(() => {
        observer.next('completed!');
      }, 6000);
    });

   this.subcription= this.orderStatusObs.subscribe((value: any) => {
      this.orderStatus = value;
    });
  }

  ngOnDestroy(): void {
    //Called once, before the instance is destroyed.
    //Add 'implements OnDestroy' to the class.
    this.subcription.unsubscribe();
  }
}
