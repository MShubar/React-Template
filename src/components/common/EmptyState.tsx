type EmptyStateProps = {
    title?: string;
    description?: string;
  };
  
  export default function EmptyState({
    title = "No data found",
    description = "There is nothing to show right now.",
  }: EmptyStateProps) {
    return (
      <div className="py-10 text-center">
        <h3 className="font-semibold">{title}</h3>
        <p className="mt-1 text-sm text-gray-500">{description}</p>
      </div>
    );
  }