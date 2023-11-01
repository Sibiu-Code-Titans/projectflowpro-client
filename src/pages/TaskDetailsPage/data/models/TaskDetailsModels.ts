export interface TaskDetailsDto {
  createdAt: Date;
  description: string;
  endDate: Date;
  id: number;
  lastUpdate: Date;
  progress: number;
  title: string;
}

export interface TaskDetailsNavbarDto {
  title: string;
}

export interface TaskDetailsInfoBarDto {
  created_at: Date;
  end_date: Date;
  last_update: Date;
  progress: number;
}
