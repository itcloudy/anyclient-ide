import { IServerPreference } from '../server-info.config';

export const ElasticsearchPreference: IServerPreference = {
  name: 'Elasticsearch',
  isSupport: false,
  nextSupport: false,
  versions: ['6', '7', '8', '9'],
};
