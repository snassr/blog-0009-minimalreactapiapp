// ServiceStatus defines the expected states for a service.
export enum ServiceStatus {
  INIT = 'INIT',
  LOADING = 'LOADING',
  LOADED = 'LOADED',
  ERROR = 'ERROR',
}

// ServiceInit states the service has been initialized.
interface ServiceInit {
  status: ServiceStatus.INIT;
}

// ServiceInit states the service has is waiting to return.
interface ServiceLoading {
  status: ServiceStatus.LOADING;
}

// ServiceInit states the service has returned.
interface ServiceLoaded<T> {
  status: ServiceStatus.LOADED;
  payload: T;
}

// ServiceInit states the service has returned with an error.
interface ServiceError {
  status: ServiceStatus.ERROR;
  error: Error;
}

export type Service<T> =
  | ServiceInit
  | ServiceLoading
  | ServiceLoaded<T>
  | ServiceError
