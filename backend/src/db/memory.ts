import { IMemoryDB } from '../interfaces/db/memory'

export class MemoryDB implements IMemoryDB {
  private static instance: IMemoryDB | null = null
  schema!: { users: any[] }

  constructor() {
    if (MemoryDB.instance instanceof MemoryDB) return MemoryDB.instance
    MemoryDB.instance = this
    this.schema = {
      users: [],
    }
  }
}
