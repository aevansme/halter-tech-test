import moment from "moment";
import { DailyResult } from "../types/CowHeatResult";

moment.locale('en', {
    relativeTime: {
      future: 'in %s',
      past: '%s',
      s:  '1s',
      ss: '%ss',
      m:  '1m',
      mm: '%dm',
      h:  '1h',
      hh: '%dh',
      d:  '1d',
      dd: '%dd',
      M:  '1M',
      MM: '%dM',
      y:  '1Y',
      yy: '%dY'
    }
  })

// Original code taken from SO article: https://stackoverflow.com/questions/46802448/how-do-i-group-items-in-an-array-by-date
// Thought: Sort method could be added to the array.prototype. For now though, for
//          simplicity, I'll leave this here and create unit tests for test coverge.
// Thought: This function has been kept generic enough to work with all arrays rather than just heatresults. Leaving parameter type as any[] for this reason
export const groupByDate = (key: string, data: any[]): DailyResult[] => {
    const groups = data.reduce((groups, result) => {
        // Note: One design decision here could be to fail gracefully and add a key of "unknown".
        //       I've gone for throwing an error here and then displaying "Something went wrong" to the user
        if (!result.hasOwnProperty(key)) {
            throw new Error("Result error does not have key: " + key);
        }

        const date = result[key].toString().split('T')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(result);
        return groups;
      }, {});
      
    return Object.keys(groups).map((date) => {
        return {
            date: new Date(date),
            results: groups[date]
        };
    });
}

// TODO: Create unit test coverage for this in dateUtils.spect.ts similar to groupByDate above
export const sortByDate = (key: string, data: any[]): any => {
    return data.sort((a,b) => new Date(b.date).getTime() - new Date(a.date).getTime());
}

// TODO: Crete unit test coverage
// TODO: Memoization - This is a pure function as doesn't need to be repeatidly executed for the same input params
export const getFormattedDate = (date: Date): string => {
    return moment(date).calendar({
        sameDay: '[Today]',
        nextDay: '[Tomorrow]',
        nextWeek: 'ddd, d MMM',
        lastDay: '[Yesterday]',
        lastWeek: 'ddd, d MMM',
        sameElse: 'ddd, d MMM'
    })
}

export const getTimeSince = (date: Date): string => {
    return moment(date).fromNow();
}


