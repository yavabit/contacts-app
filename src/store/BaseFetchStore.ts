import { flow, makeAutoObservable, makeObservable, observable } from "mobx";

export abstract class BaseFetchStore<T> {
  data: T | null = null;
  loading = false;
  error: string | null = null;

  constructor() {
    makeObservable(this, {
      data: observable,
      loading: observable,
      error: observable,
      fetchData: flow // если используете генератор
    });
  }

  *fetchData(fetchFn: () => Promise<T>) {
    this.loading = true;
    this.error = null;

    try {
      const data: T = yield fetchFn();
      this.data = data;
      this.loading = false;
    } catch (error) {
      this.error = error instanceof Error ? error.message : 'Error';
      this.loading = false;
    }
  }
}