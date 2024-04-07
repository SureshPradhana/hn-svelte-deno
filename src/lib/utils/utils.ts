export const getTimeAgo = (unixTimestamp: number) => {
  const timestampMillis = unixTimestamp * 1000;
  const currentMillis = Date.now();

  // Calculate the difference in milliseconds
  const difference = currentMillis - timestampMillis;

  // Convert milliseconds to seconds
  const secondsDifference = Math.floor(difference / 1000);

  // Calculate minutes, hours, and days
  const minutes = Math.floor(secondsDifference / 60);
  const hours = Math.floor(minutes / 60);
  const days = Math.floor(hours / 24);

  // Return the time difference in a human-readable format
  if (days > 0) {
    return `${days} day${days !== 1 ? "s" : ""} ago`;
  } else if (hours > 0) {
    return `${hours} hour${hours !== 1 ? "s" : ""} ago`;
  } else if (minutes > 0) {
    return `${minutes} minute${minutes !== 1 ? "s" : ""} ago`;
  } else {
    return "Just now";
  }
};

export const getDomain = (url: string): string => {
  return url.split("/")[2];
};

export const getIds = async (tag) => {
  const response = await fetch(
    `https://hacker-news.firebaseio.com/v0/${tag}.json?print=pretty`,
  );
  const storyIds = await response.json();
  return storyIds;
};
export const getItems = async (ids) => {
  const newsItemsPromises = ids.map((id: number) =>
    fetch(`https://hacker-news.firebaseio.com/v0/item/${id}.json?print=pretty`)
      .then((res) => res.json())
  );
  const newItems = await Promise.all(newsItemsPromises);
  return newItems;
};
