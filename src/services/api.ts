import ky, { Options } from 'ky';
import { CreateInstance, ErrorApi } from './api.type';

class ApiService {
  constructor(private defaultOptions: Options) {}

  createInstance(): CreateInstance {
    const controller = new AbortController();
    const signal = controller.signal;

    const instance = ky.create({
      prefixUrl: config.API_URL,
      timeout: false,
      signal,
      ...this.defaultOptions,
    });

    return { instance, controller };
  }

  //todo user autorization headers
  private getHeaders(): Options['headers'] {
    let headers: Options['headers'];
    const user = null;
    if (user) {
      headers = {
        Authorization: user,
      };
    }

    return headers;
  }

  //todo headers
  async get<T>(endpoint: string, searchParams: Record<string, any> = {}) {
    let headers;
    const { instance, controller } = this.createInstance();

    try {
      const response = await instance.get(endpoint, { searchParams, headers }).json<T>();
      return response;
    } catch (error) {
      this.onErrorHandle(error as ErrorApi);
    } finally {
      controller.abort();
    }
  }

  private onErrorHandle(error: ErrorApi) {
    //todo error handle api
    if (error.name === 'AbortError') {
      console.log('Request aborted');
    } else if (error.response) {
      const { status } = error.response;
      const message = error.response.statusText || 'Unknown error';
      return { code: status, message, status: 'error' };
    } else {
      return { code: -1, message: 'Network error', status: 'error' };
    }
  }
}

module.exports = ApiService;
