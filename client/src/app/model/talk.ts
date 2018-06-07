import { QAndA } from "./q-and-a";

export interface Talk { 
    //id: string;
    title: string;
    scheduled: boolean;
    description: string;
    votesUp: number;
    dateTimeDue: Date;
    //questions: Array<QAndA>;
}