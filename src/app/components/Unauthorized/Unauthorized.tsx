export const Unauthorized = () => {
  return (
    <section className="w-svw lg: min-h-svh bg-[#d9d9d9]">
      <div className="flex justify-center items-center relative w-full">
        <img className="w-full object-cover h-lvh" src="./src/assets/images/401.png" alt="" />
        <h2 className="absolute font-bold text-[clamp(1rem,0.304rem+3.482vw,3.438rem)] bottom-9 ">
          У вас нет гостевого id, перезагрузите страницу
        </h2>
      </div>
    </section>
  );
};
