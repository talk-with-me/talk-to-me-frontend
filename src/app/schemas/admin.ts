export interface Report {
  reporter: string;
  reporter_ip: string;
  reported: string;
  reported_ip: string;
  reason: string;
  room_id: string;
}

export interface Ban {
  ip: string;
  reason: string;
  date: string;
}
