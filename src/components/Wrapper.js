const Wrapper = ({ children }) => {
  return (
    <div className="w-full h-fit flex justify-center relative overflow-x-hidden">
      <div className="w-full max-w-[500px] h-full">{children}</div>
    </div>
  );
};

export default Wrapper;
