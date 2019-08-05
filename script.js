let HOLIDAYS = [
	createDate(2019, 9, 2),
	createDate(2019, 11, 5),
	createDate(2019, 11, 27),
	createDate(2019, 12, 23),
	createDate(2019, 12, 24),
	createDate(2019, 12, 25),
	createDate(2019, 12, 26),
	createDate(2019, 12, 27),
	createDate(2019, 12, 28),
	createDate(2019, 12, 29),
	createDate(2019, 12, 30),
	createDate(2019, 12, 31),
	createDate(2020, 1, 1),
	createDate(2020, 1, 2),
	createDate(2020, 1, 3),
	createDate(2020, 1, 20),
	createDate(2020, 2, 14),
	createDate(2020, 2, 17),
	createDate(2020, 3, 17),
	createDate(2020, 3, 23),
	createDate(2020, 3, 24),
	createDate(2020, 3, 25),
	createDate(2020, 3, 26),
	createDate(2020, 3, 27),
	createDate(2020, 4, 10),
	createDate(2020, 5, 25)
]

function printDate(date)
{
  console.log((new Date(date)).toDateString())
}

function createDate(year, month, day)
{
  return (new Date(year, month-1, day)).getTime();
}

function isNotWeekend(date)
{
  let dayOfWeek = new Date(date).getDay();
  if (dayOfWeek == 0 || dayOfWeek == 6)
    return false;
  return true;
}

function isNotHoliday(date)
{
  return !HOLIDAYS.includes(date);
}

function today()
{
  let now = new Date(); // new Date object with current time
  return now.setHours(0, 0, 0, 0); // we only care about the day
  // this returns a NUMBER, not a DATE!
}

function incrementDay(date)
{
  dateObj = new Date(date);
  return dateObj.setDate(dateObj.getDate() + 1);
}

function range(startDate, endDate)
{
  let result = [];
  let curr = startDate;
  while (curr <= endDate)
  {
    result.push(curr);
    curr = incrementDay(curr)
  }
  return result;
}

function allDays()
{
  return range(Math.max(today(), createDate(2019, 8, 21)), createDate(2020, 5, 29))
}

function daysLeftUnfiltered()
{
    return allDays().length;
}

function daysLeftFiltered()
{
  return allDays().filter(isNotHoliday).filter(isNotWeekend).length;
}


document.getElementById("big").textContent = daysLeftFiltered()
document.getElementById("small").textContent = daysLeftUnfiltered()
