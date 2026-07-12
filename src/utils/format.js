export function signed(number) {
  if (typeof number !== 'number') return number;
  return number >= 0 ? `+${number}` : `${number}`;
}

export function formatNumber(n, { fallback = null, compact = false } = {}) {
  if (n == null) return fallback;
  if (compact && n >= 1000) return `${(n / 1000).toFixed(1)}k`;
  return n.toLocaleString();
}

export function timeAgo(dateStr, { fallback = null, compact = false } = {}) {
  if (!dateStr) return fallback;
  const days = Math.floor((Date.now() - new Date(dateStr).getTime()) / (1000 * 60 * 60 * 24));
  if (days < 1) return 'today';
  if (days === 1) return 'yesterday';
  if (days < 30) return compact ? `${days}d ago` : `${days} days ago`;
  if (days < 365) {
    const months = Math.floor(days / 30);
    return compact ? `${months}mo ago` : `${months} months ago`;
  }
  const years = Math.floor(days / 365);
  return compact ? `${years}y ago` : `${years} years ago`;
}
