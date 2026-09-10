const Title = ({
  children,
  className = "mb-4",
}: {
  children: React.ReactNode;
  className?: string;
}) => (
  <h1 className={`text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 ${className}`}>
    {children}
  </h1>
);

export default Title;
