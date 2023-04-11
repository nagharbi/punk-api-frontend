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

export { formatDate };
