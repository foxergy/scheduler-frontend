import { SurveyUser } from './surveyUser';

export class Schedule{
    startTime: Array<number>;
    endTime: Array<number>;
    surveyUser: SurveyUser;


    constructor( startTime: Array<number>, endTime: Array<number>, surveyUser: SurveyUser) {
        this.startTime=startTime;
        this.endTime=endTime;
        this.surveyUser=surveyUser;
    }

    getStartYear(){
        return this.startTime[0];
    }
    getEndYear(){
        return this.endTime[0];
    }
    getStartMonth(){
        return this.startTime[1];
    }
    getEndMonth(){
        return this.endTime[1];
    }
    getStartDay(){
        return this.startTime[2];
    }
    getEndDay(){
        return this.endTime[2];
    }
    getStartHour(){
        return this.startTime[3];
    }
    getEndHour(){
        return this.endTime[3];
    }
    getStartMinute(){
        return this.startTime[4];
    }
    getEndMinute(){
        return this.endTime[4];
    }
}