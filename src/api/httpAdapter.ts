import axios, { AxiosResponse } from 'axios';
import { IHttpAdapterHeader, IHttpAdapterResponseData } from '../interfaces';

const url = (sublink: string): string => {
  return `${import.meta.env.VITE_BACKEND_URL}${sublink}`;
};

export const getAdapter = async (
  sublink: string = '',
  header: IHttpAdapterHeader = {}
): Promise<IHttpAdapterResponseData> => {
  const { data }: AxiosResponse<IHttpAdapterResponseData> = await axios.get(
    url(sublink),
    {
      headers: {
        Authorization: header.auth ? header.auth : '',
      },
    }
  );

  return data;
};

export const postAdapter = async (
  sublink: string = '',
  body = {},
  header: IHttpAdapterHeader = {}
) => {
  const { data }: AxiosResponse<IHttpAdapterResponseData> = await axios.post(
    url(sublink),
    body,
    {
      headers: {
        'Content-Type': header.content ? header.content : 'application/json',
        Authorization: header.auth ? header.auth : '',
      },
    }
  );

  return data;
};

export const patchAdapter = async (
  sublink: string = '',
  body = {},
  header: IHttpAdapterHeader = {}
) => {
  const { data }: AxiosResponse<IHttpAdapterResponseData> = await axios.patch(
    url(sublink),
    body,
    {
      headers: {
        'Content-Type': header.content ? header.content : 'application/json',
        Authorization: header.auth ? header.auth : '',
      },
    }
  );

  return data;
};

export const deleteAdapter = async (
  sublink: string = '',
  header: IHttpAdapterHeader = {}
) => {
  const { data }: AxiosResponse<IHttpAdapterResponseData> = await axios.delete(
    url(sublink),
    {
      headers: {
        Authorization: header.auth ? header.auth : '',
      },
    }
  );

  return data;
};
