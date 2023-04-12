function formatDate(date) {
  if (date) {
    const month =
      date.getMonth() + 1 < 10
        ? "0" + (date.getMonth() + 1)
        : date.getMonth() + 1;
    return month + "-" + date.getFullYear();
  }

  return "";
}

function orderBy(data, key, value) {
  if (value === "asc") {
    data.sort(function (a, b) {
      if (a[key] < b[key]) {
        return -1;
      }
      if (a[key] > b[key]) {
        return 1;
      }
      return 0;
    });
  } else {
    data.sort(function (a, b) {
      if (a[key] < b[key]) {
        return 1;
      }
      if (a[key] > b[key]) {
        return -1;
      }
      return 0;
    });
  }

  return data;
}

export { formatDate, orderBy };
