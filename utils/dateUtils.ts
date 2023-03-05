// Original code taken from SO article: https://stackoverflow.com/questions/46802448/how-do-i-group-items-in-an-array-by-date
// Thought: Perhaps thre is a usecase to use _.groupBy with lodash or similar library.
// Thought: Perhaps this new sort method could be added to the array.prototype. For now though, for
//          simplicity, I'll leave this here and create unit tests for test coverge.
// Thought: Can this function be kept generic enough to work with all arrays rather than just heatresults? Leaving parameter type as any[] for this reason
export const groupByDate = (key: string, data: any[]): any => {
    const groups = data.reduce((groups, result) => {
        const date = result[key].toString().split('T')[0];
        if (!groups[date]) {
          groups[date] = [];
        }
        groups[date].push(result);
        return groups;
      }, {});
      
    const results = Object.keys(groups).map((date) => {
        return {
            date,
            results: groups[date]
        };
    });

    return results;
}

export const sortByDate = (key: string, data: any[]): any => {
    return data.sort((a,b) => a.date.getTime() - b.date.getTime());
}

