export interface Task {
    id?: number;
    text: string;
    day: string;
    reminder: boolean;
  }
  
export const TASKS: Task[] = [
  {
    id: 1,
    text: 'Doctors Appointment',
    day: 'May 5th at 2:30pm',
    reminder: true,
  },
  {
    id: 2,
    text: 'Meeting at School',
    day: 'May 6th at 1:30pm',
    reminder: true,
  },
  {
    id: 3,
    text: 'Food Shopping',
    day: 'May 7th at 12:30pm',
    reminder: false,
  },
];

export const emptyTask:Task = {
    id: 0,
    text: '',
    day: '',
    reminder: false,
  }