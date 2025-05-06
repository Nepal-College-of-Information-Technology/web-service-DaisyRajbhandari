document.getElementById('reviewForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const title = document.getElementById('movieTitle').value;
  const review = document.getElementById('reviewText').value;

  if (title && review) {
    const reviewSection = document.getElementById('reviews');

    const card = document.createElement('div');
    card.className = 'review-card';

    card.innerHTML = `<h3>${title}</h3><p>${review}</p>`;
    reviewSection.appendChild(card);

    // Clear form
    document.getElementById('reviewForm').reset();
  }
});
