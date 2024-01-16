// interface CardProps extends React.HTMLAttributes<HTMLDivElement | HTMLButtonElement> {}

// export default function TabButon(props: CardProps) {
//     const { className, defaultValue, onClick, children, ...restProps} = props;
//   if (defaultValue) {
//     return <b>{children}</b>;
//   }
//   return (
//     <button
//       {...restProps}
//     >
//       {children}
//     </button>
//   );
// }

type Props = {
  children: React.ReactNode;
  isActive: string | boolean | undefined;
  onClick: Function
}


export default function TabButon({ children, isActive, onClick }: Props) {
  const buttonClasses = isActive ? "text-white" : "text-[#ADB7BE]";
  if (isActive) {
    return <b>{children}</b>;
  }
  return (
    <button
      onClick={() => {
        onClick();
      }}
    >
      <p className={`mr-3 font-semibold hover:text-white ${buttonClasses}`}>
        {children}
      </p>
    </button>
  );
}
