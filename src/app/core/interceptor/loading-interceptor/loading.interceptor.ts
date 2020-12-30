import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpResponse,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { finalize, tap } from 'rxjs/operators';
import { NgxSpinnerService } from 'ngx-spinner';

@Injectable()
export class LoadingInterceptor implements HttpInterceptor {
  private reqUrls: string[] = [];

  constructor(private spinner: NgxSpinnerService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    let ok: string;
    this.increaseRequests(request);
    return next.handle(request).pipe(
      tap(
        (event) => (ok = event instanceof HttpResponse ? 'succeeded' : ''),
        (error) => (ok = 'failed' + error)
      ),
      finalize(() => {
        const msg = `${request.method} "${request.urlWithParams}" ${ok}`;
        console.log(msg);
        this.decreaseRequests(request.url);
      })
    );
  }

  private decreaseRequests(url: string): void {
    const index = this.reqUrls.indexOf(url);
    if (index >= 0) {
      this.reqUrls.splice(index, 1);
    }
    if (this.reqUrls.length === 0) {
      this.spinner.hide();
    }
  }

  private increaseRequests(request: HttpRequest<any>): void {
    this.reqUrls.push(request.url);
    this.spinner.show(undefined, {
      type: 'ball-spin-clockwise',
      size: 'medium',
      fullScreen: true,
    });
  }
}
