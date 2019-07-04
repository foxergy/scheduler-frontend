import { Schedule } from './schedule';
import { SurveyUser } from './surveyUser';

export class SurveyEvent{
    name: string;
    description: string;
    schedules: Array<Schedule>;
    user: Array<SurveyUser>;
}