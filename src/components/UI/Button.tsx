interface IButton {
  text: string;
}

const Button = ({ text }: IButton) => {
  return (
    <button className="relative block px-6 py-2 m-auto text-lg text-black hover:text-white focus:text-white active:text-white font-bold uppercase border-4 border-black md:text-2xl md:px-8 before:content-[''] before:absolute before:w-0 before:bg-black before:top-0 before:bottom-0 before:left-0 before:transition-all before:duration-300 before:z-[-1]  hover:before:w-full focus:before:w-full active:before:w-full">
      {text}
    </button>
  );
};

export default Button;
