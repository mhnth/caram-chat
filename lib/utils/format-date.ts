export const formatMovementDate = function (date: number, locale = 'en-US') {
  const currentDate = new Date();
  const targetDate = new Date(date);
  const timeDifferenceInSeconds = Math.abs(
    (currentDate.getTime() - targetDate.getTime()) / 1000,
  );

  if (timeDifferenceInSeconds < 60) {
    return `${Math.round(timeDifferenceInSeconds)} seconds ago`;
  }

  const timeDifferenceInMinutes = Math.round(timeDifferenceInSeconds / 60);

  if (timeDifferenceInMinutes < 60) {
    return `${timeDifferenceInMinutes}m ago`;
  }

  const timeDifferenceInHours = Math.round(timeDifferenceInMinutes / 60);

  if (timeDifferenceInHours < 24) {
    return `${timeDifferenceInHours}h ago`;
  }

  const timeDifferenceInDays = Math.round(timeDifferenceInHours / 24);

  if (timeDifferenceInDays < 7) {
    return `${timeDifferenceInDays}d ago`;
  }

  const timeDifferenceInMonths = Math.round(timeDifferenceInDays / 30);

  // if (timeDifferenceInMonths < 12) {
  //   return `${timeDifferenceInMonths} months ago`;
  // }

  if (timeDifferenceInMonths < 12) {
    return targetDate.toLocaleDateString(locale, {
      month: 'short',
      day: 'numeric',
    });
  }

  const year = targetDate.getFullYear();
  const month = targetDate.toLocaleDateString(locale, { month: 'short' });
  const day = targetDate.getDate();

  return `${month} ${day}, ${year}`;
};
