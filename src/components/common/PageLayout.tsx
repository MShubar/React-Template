type PageLayoutProps = {
    title: string;
    description?: string;
    actions?: React.ReactNode;
    children: React.ReactNode;
  };
  
  export default function PageLayout({
    title,
    description,
    actions,
    children,
  }: PageLayoutProps) {
    return (
      <div className="space-y-6">
        <div className="flex items-start justify-between gap-4">
          <div>
            <h1 className="text-2xl font-semibold">{title}</h1>
  
            {description && (
              <p className="mt-1 text-sm text-gray-500">{description}</p>
            )}
          </div>
  
          {actions && <div>{actions}</div>}
        </div>
  
        <div>{children}</div>
      </div>
    );
  }