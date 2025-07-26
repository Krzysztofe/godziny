export type ModelDay = {
  _id: string;
  userName: string;
  userColor: string;
  date: string;
  hours: number;
  place: string;
};

export type ModelFormDay = Omit<ModelDay, "_id">;
