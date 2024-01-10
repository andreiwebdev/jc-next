export const Columns = ({ isStackedOnMobile, children }: any) => {
  return (
    <div className="core-columns my-10">
      <div
        className={`mx-auto ${
          isStackedOnMobile ? "block md:flex md:gap-4 md:items-center" : "flex"
        }`}
      >
        {children}
      </div>
    </div>
  );
};
