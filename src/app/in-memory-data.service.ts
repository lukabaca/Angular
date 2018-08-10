import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDataService implements InMemoryDbService {
  createDb() {
    const people = [
      { id: 11, name: 'Jan' },
      { id: 12, name: 'Adam' },
      { id: 13, name: 'Olga' },
      { id: 14, name: 'Jas' },
      { id: 15, name: 'Michal' },
      { id: 16, name: 'Ola' },
      { id: 17, name: 'Filip' },
      { id: 18, name: 'Zygmunt' },
      { id: 19, name: 'Wladyslaw' },
      { id: 20, name: 'Michal2' }
    ];
    return {people};
  }
}
