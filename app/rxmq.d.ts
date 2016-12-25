declare module 'rxmq' {
  interface IRxMQ {
    channel(name: string): IRxMQ;
    subject(name: string): IRxMQ;
    onNext(message: {}): IRxMQ;
    observe(name: string): IRxMQ;
    subscribe(callback: ( valueHandler, errorHandler, completeHandler) => any);
  }
  class RxMQ implements IRxMQ {
    channel(name: string): IRxMQ;
    subject(name: string): IRxMQ;
    onNext(message: {}): IRxMQ;
    observe(name: string): IRxMQ;
    subscribe(callback: ( valueHandler, errorHandler, completeHandler) => any);
  }
  export default new RxMQ;
}
