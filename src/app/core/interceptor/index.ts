import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { HandleErrorInterceptor } from './handle-error/handle-error.interceptor';
import { LoadingInterceptor } from './loading-interceptor/loading.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: HandleErrorInterceptor, multi: true },
  { provide: HTTP_INTERCEPTORS, useClass: LoadingInterceptor, multi: true }
];
