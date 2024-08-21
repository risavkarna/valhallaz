import { IUser } from './user.model';

export const sampleWithRequiredData: IUser = {
  id: 28586,
  login: 'r^@wy0s',
};

export const sampleWithPartialData: IUser = {
  id: 4947,
  login: 'Ffm-',
};

export const sampleWithFullData: IUser = {
  id: 3873,
  login: 'qRZlu',
};
Object.freeze(sampleWithRequiredData);
Object.freeze(sampleWithPartialData);
Object.freeze(sampleWithFullData);
