// @flow

import axios, { AxiosResponse, AxiosInstance } from "axios";

type Headers = {
  [headerName: string]: string | void;
};

const getDefaultHeaders = (): Headers => ({
  Accept: "application/json"
});

const instance: AxiosInstance = axios.create({
  baseURL: "https://api.speedrun.ch/api/singletons/get/"
});

export type SingletonComponentSettings = {
  id: string;
  class: string;
  style: string;
  tag?: string;
  text?: string;
};

export type SingletonComponent = {
  component: string;
  settings: SingletonComponentSettings;
  children?: Array<SingletonComponent>;
};

export type Singleton = {
  title: string;
  content: Array<SingletonComponent>;
};

export function getSingleton(
  identifier: string
): Promise<AxiosResponse<Singleton>> {
  return instance.request<Singleton>({
    url: identifier,
    method: "GET",
    headers: getDefaultHeaders()
  });
}
