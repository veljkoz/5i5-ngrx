import { QAndA } from "./q-and-a";

export interface Talk { 
    id: number;
    title: string;
    scheduled: boolean;
    description: string;
    votesUp: number;
    dateTimeDue: Date;
    //questions: Array<QAndA>;
}