/**
 * function accepts a date string as input and returns a formatted string representing the date and time in the format "DD/MM/YYYY HH:MM AM/PM"
 * @param {string} inputDateStr
 * @returns {string}
 */
function getFormattedTime(inputDateStr) {
  if (!inputDateStr) return "N/A";
  const inputDate = new Date(inputDateStr);

  const formattedDate = inputDate.toLocaleDateString("en-GB", {
    day: "2-digit",
    month: "2-digit",
    year: "numeric",
  });

  const formattedTime = inputDate.toLocaleTimeString("en-US", {
    hour: "2-digit",
    minute: "2-digit",
    hour12: true,
  });

  return formattedDate + " " + formattedTime;
}

export default getFormattedTime;
