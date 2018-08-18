import { timeout } from 'Utils';
import { mockResponse } from 'Constants';

export const getCountryCities = async () => {
  await timeout(1500);
  return mockResponse;
};
