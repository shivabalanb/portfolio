interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className = "" }: TitleProps) => {
  return (
    <h1 className={`text-4xl mb-4 tracking-tight ${className}`}>{children}</h1>
  );
};

export default Title;
