import { Schedule } from './schedule';
import { SurveyUser } from './surveyUser';

export class SurveyEvent{
    id: string;
    name: string;
    description: string;
    schedules: Array<Schedule>;
    user: Array<SurveyUser>;
}