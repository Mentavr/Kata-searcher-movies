export const addRatingsToLocalStorage = (id: number, rating: number) => {
  const ratingsString = localStorage.getItem('ratings');
  const ratings = ratingsString ? JSON.parse(ratingsString) : [];
  ratings.push({ id: id, rating: rating });
  localStorage.setItem('ratings', JSON.stringify(ratings));
};
