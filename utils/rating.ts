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

export enum RatingLevel {
  UNKNOWN = 'Unknown',
  SAFE = 'Safe',
  FAIRLY_SAFE = 'Fairly Safe',
  GENERALLY_GOOD = 'Generally Good',
  INSECURE = 'Insecure',
  DANGEROUS = 'Dangerous',
  EXTREMELY_DANGEROUS = 'Extremely Dangerous',
}

export function ratingLevelByStars(stars: number) {
  if (stars >= 0 && stars < 1) return RatingLevel.EXTREMELY_DANGEROUS
  if (stars >= 1 && stars < 2) return RatingLevel.DANGEROUS
  if (stars >= 2 && stars < 3) return RatingLevel.INSECURE
  if (stars >= 3 && stars < 4) return RatingLevel.GENERALLY_GOOD
  if (stars >= 4 && stars < 4.5) return RatingLevel.FAIRLY_SAFE
  if (stars >= 4.5 && stars <= 5) return RatingLevel.SAFE
  return RatingLevel.UNKNOWN;
}