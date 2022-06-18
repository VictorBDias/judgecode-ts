export interface BaseRepository<T> {
  appendList: (data: T[]) => void;
  replaceList: (data: T[]) => void;
  create: (data: T) => void;
  update: (id: number, data: T) => void;
  destroy: (id: number) => void;
}
