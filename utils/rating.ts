export function ratingStars(points: number) {
  if (points === 0) return 0;
  if (points > 0 && points <= 10) return 0.5;
  if (points > 10 && points <= 20) return 1;
  if (points > 20 && points <= 30) return 1.5;
  if (points > 30 && points <= 40) return 2;
  if (points > 40 && points <= 50) return 2.5;
  if (points > 50 && points <= 60) return 3;
  if (points > 60 && points <= 70) return 3.5;
  if (points > 70 && points <= 80) return 4;
  if (points > 80 && points <= 90) return 4.5;
  if (points > 90 && points <= 100) return 5;
  return Number.NaN;
}