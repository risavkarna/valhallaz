import { IAuthority, NewAuthority } from './authority.model';

export const sampleWithRequiredData: IAuthority = {
  name: '8540ac3a-8bce-445b-8cab-f0491bd24b50',
};

export const sampleWithPartialData: IAuthority = {
  name: '5b98cd1d-e05e-4837-9475-42d787f8ff1e',
};

export const sampleWithFullData: IAuthority = {
  name: '2dfd5493-8487-4100-97e8-24b56203f318',
};

export const sampleWithNewData: NewAuthority = {
  name: null,
};

Object.freeze(sampleWithNewData);
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
