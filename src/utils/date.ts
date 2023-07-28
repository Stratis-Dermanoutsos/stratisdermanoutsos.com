/**
 * Returns the difference in months between two dates.
 * 
 * @param dateStart
 * @param dateEnd
 * @returns The timespan between two dates in months.
 */
const differenceInMonths = function (dateStart: Date, dateEnd: Date) {
    const monthDiff = dateStart.getMonth() - dateEnd.getMonth();
    const yearDiff = dateStart.getFullYear() - dateEnd.getFullYear();

    return monthDiff + yearDiff * 12;
}

/**
 * Converts a date to a string in the format of "MMM YYYY" or "PRESENT" if the date is undefined.
 * 
 * @param date The date to convert.
 * @returns The formatted date.
 */
const getShortString = function (date?: Date | undefined) {
    return date?.toLocaleDateString('en-US', {
        month: 'short',
        year: 'numeric'
    }).toUpperCase() || 'PRESENT';
};

/**
 * Converts a date range to a string in the format of "0y 0m" or "0m" if the date range is less than a year.
 * 
 * @param dateStart The starting date.
 * @param dateEnd The ending date. If undefined, the current date is used.
 * @returns The formatted date range.
 */
const getDurationString = function (dateStart: Date, dateEnd?: Date | undefined) {
    if (dateEnd === undefined)
        dateEnd = new Date();

    const monthsDifference = differenceInMonths(dateEnd, dateStart);
    const years = Math.floor(monthsDifference / 12);
    const months = monthsDifference % 12;

    if (years > 0)
        return `${years}y ${months}m`;
    else
        return (months === 0) ? '1m' : `${months}m`;
}

export { getDurationString, getShortString };