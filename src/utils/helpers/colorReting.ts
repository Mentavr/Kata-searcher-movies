const ratingColor = {
  lowest: '#E90000',
  low: '#E97E00',
  average: '#E9D100',
  high: '#66E900',
};

export const colorRating = (rating: number) => {
  if (rating >= 0 && rating < 3) {
    return ratingColor.lowest;
  }

  if (rating >= 3 && rating < 5) {
    return ratingColor.low;
  }

  if (rating >= 5 && rating < 7) {
    return ratingColor.average;
  }

  if (rating >= 7) {
    return ratingColor.high;
  }
};
