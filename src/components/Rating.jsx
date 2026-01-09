export default function Rating({ value = 0 }) {
  const full = Math.round(value);
  return (
    <div className="flex items-center gap-2">
      <div className="flex items-center">
        {Array.from({ length: 5 }).map((_, i) => {
          const filled = i < full;
          return (
            <svg
              key={i}
              width="16"
              height="16"
              viewBox="0 0 24 24"
              className={filled ? "text-amber-400" : "text-slate-600"}
              fill="currentColor"
            >
              <path d="M12 17.27 18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
            </svg>
          );
        })}
      </div>
      <span className="text-sm text-slate-400">({value.toFixed(1)})</span>
    </div>
  );
}
