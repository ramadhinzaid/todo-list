export const TaskSkeleton = () => {
  return (
    <div className="w-full max-w-md mx-auto space-y-3">
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex items-center gap-3 p-4 bg-gray-50 dark:bg-gray-800/50 border dark:border-gray-700 rounded-xl animate-pulse">
          <div className="w-5 h-5 bg-gray-200 dark:bg-gray-700 rounded-full" />
          <div className="flex-1 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
          <div className="w-4 h-4 bg-gray-200 dark:bg-gray-700 rounded" />
        </div>
      ))}
    </div>
  );
};
