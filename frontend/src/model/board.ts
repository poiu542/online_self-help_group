export type Board = {
  title: string;
  content: string;
  date?: string;
  id: number;
  state?: number;
};

export type FreeBoard = {
  post: Board;
  level: number;
  view?: number;
  type?: number;
};

export type CounselBoard = {
  post: Board;
  type?: number;
};

export type Comment = Omit<Board, 'title'>;


