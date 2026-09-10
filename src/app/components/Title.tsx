interface TitleProps {
  children: React.ReactNode;
  className?: string;
}

const Title = ({ children, className }: TitleProps) => {
  return (
    <h1
      className={`text-3xl sm:text-4xl font-bold tracking-tight text-gray-900 ${
        className !== undefined ? className : "mb-4"
      }`}
    >
      {children}
    </h1>
  );
};

export default Title;
