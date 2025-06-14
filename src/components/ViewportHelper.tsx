export const ViewportHelper = ({ visible }: { visible: boolean }) => {
  return (
    <div className={`${visible ? "block" : "hidden"} `}>
      {/* Small (sm): 640px to 767px */}
      <div className="hidden sm:block md:hidden bg-red-600 text-white px-3 py-1 rounded z-50">
        SM Screen
      </div>

      {/* Medium (md): 768px to 1023px */}
      <div className="hidden md:block lg:hidden bg-blue-600 text-white px-3 py-1 rounded z-50">
        MD Screen
      </div>

      {/* Large (lg): 1024px to 1279px */}
      <div className="hidden lg:block xl:hidden bg-green-600 text-white px-3 py-1 rounded z-50">
        LG Screen
      </div>

      {/* Extra Large (xl): 1280px to 1535px */}
      <div className="hidden xl:block 2xl:hidden bg-indigo-600 text-white px-3 py-1 rounded z-50">
        XL Screen
      </div>

      {/* 2X Large (2xl): 1536px and above */}
      <div className="hidden 2xl:block bg-purple-600 text-white px-3 py-1 rounded z-50">
        2XL Screen
      </div>
    </div>
  );
};
