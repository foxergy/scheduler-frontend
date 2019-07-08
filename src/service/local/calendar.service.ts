import { Injectable } from "@angular/core";

@Injectable()
export class CalendarService{

    getToday(): Date{
        return new Date();
    }

    getNextWeekOfDates(date: Date){
        let nextDaySet: Array<Date>= [];
        nextDaySet.push(date);
        for(var i = 1; i<7; i++){
            let newDate = new Date(date);
            newDate.setDate(date.getDate()+i);
            nextDaySet.push(newDate);
        } 
        return nextDaySet;
    }


    getCurrentWeek( date: Date ) {
        var tdt: any = new Date(date.valueOf());
        var dayn = (date.getDay() + 6) % 7;
        tdt.setDate(tdt.getDate() - dayn + 3);
        var firstThursday = tdt.valueOf();
        tdt.setMonth(0, 1);
        if (tdt.getDay() !== 4) 
        {
        tdt.setMonth(0, 1 + ((4 - tdt.getDay()) + 7) % 7);
            }
        return 1 + Math.ceil((firstThursday - tdt) / 604800000);
    }

    getDayAbbreviationDE(dayInWeekNumber: number){
        const dayAbb: Array<string> = ['So', 'Mo', 'Di', 'Mi', 'Do', 'Fr', 'Sa'];
        return dayAbb[dayInWeekNumber];
    }

    getMonthTextDE(monthNumber: number){
        const month: Array<string> = ['Januar', 'Februar', 'März', 'April', 'Mai', 'Juni', 'Juli',
                                        'August', 'September', 'Oktober', 'November', 'Dezember'];
        return month[monthNumber];
    }
}