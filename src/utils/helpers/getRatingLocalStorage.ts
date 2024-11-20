export const getRatingLocalStorage = (id: number) => {
  const ratingsString = localStorage.getItem('ratings');
  const ratings = ratingsString ? JSON.parse(ratingsString) : [];
  const ratingById = ratings.filter((rating: { id: number; rating: number }) => rating.id === id);
  return ratingById;
};
