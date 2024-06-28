function cleanDate() {
  const now = new Date();
  const year = now.getFullYear();
  const month = now.getMonth() + 1;
  const day = now.getDate();
  const cleanDateStr = `${year}/${month}/${day}`;
  return cleanDateStr;
}

module.exports = cleanDate;
