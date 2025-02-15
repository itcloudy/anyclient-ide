import { IPageService } from './pageService';

export class MongoPageService implements IPageService {
  buildSql(sql: string, page?: number | undefined, pageSize?: number | undefined): string {
    throw new Error('Method not implemented.');
  }
  buildTable(table: string, page?: number | undefined, pageSize?: number | undefined): string {
    throw new Error('Method not implemented.');
  }
  protected buildPageSql(sql: string, start: number, limit: number): string {
    if (sql.match(/\.skip.+?\)/i)) {
      return sql.replace(/\.skip.+?\)/i, `.skip(${start})`);
    }
    return sql.replace(/(\.find.+?\))/, `$1.skip(${start})`);
  }

  protected pageMatch() {
    return /limit\((\d+)\)/i;
  }
}
