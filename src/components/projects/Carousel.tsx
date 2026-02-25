import { useEffect, useState } from "react";
import { LuCircleChevronLeft, LuCircleChevronRight } from "react-icons/lu";
import budgetNotionHero from "../../assets/portfolio/budget-notion/hero.png";
import budgetNotionDashboard from "../../assets/portfolio/budget-notion/dashboard.png";
import budgetNotionBudgets from "../../assets/portfolio/budget-notion/budgets.png";
import budgetNotionAccounts from "../../assets/portfolio/budget-notion/accounts.png";
import budgetNotionExpenses from "../../assets/portfolio/budget-notion/expenses.png";
import budgetNotionUsers from "../../assets/portfolio/budget-notion/users.png";

export const Carousel = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isAutoPlay, setIsAutoPlay] = useState(true);

  const slides = [
    {
      id: 1,
      image: budgetNotionHero,
    },
    {
      id: 2,
      image: budgetNotionDashboard,
    },
    {
      id: 3,
      image: budgetNotionBudgets,
    },
    {
      id: 4,
      image: budgetNotionAccounts,
    },
    {
      id: 5,
      image: budgetNotionExpenses,
    },
    {
      id: 6,
      image: budgetNotionUsers,
    },
  ];

  // Auto-play functionality
  useEffect(() => {
    if (!isAutoPlay) return;

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [isAutoPlay, slides.length]);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <div className="relative w-full max-w-4xl mx-auto bg-white rounded-2xl shadow-2xl overflow-hidden">
      {/* Main carousel container */}
      <div className="relative h-100 overflow-hidden">
        {/* Slides */}
        <div
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${currentSlide * 100}%)` }}
        >
          {slides.map((slide) => (
            <div
              key={slide.id}
              className="min-w-full h-full relative flex items-center justify-center"
            >
              {/* Background image */}
              <div
                className="absolute inset-0 bg-cover bg-center"
                style={{ backgroundImage: `url(${slide.image})` }}
              />
            </div>
          ))}
        </div>

        {/* Navigation arrows */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 cursor-pointer"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <LuCircleChevronLeft className="w-6 h-6 text-white" />
        </button>

        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 hover:bg-white/30 backdrop-blur-sm rounded-full p-3 transition-all duration-200 hover:scale-110 cursor-pointer"
          onMouseEnter={() => setIsAutoPlay(false)}
          onMouseLeave={() => setIsAutoPlay(true)}
        >
          <LuCircleChevronRight className="w-6 h-6 text-white" />
        </button>
      </div>

      {/* Auto-play toggle */}
      <div className="absolute top-4 right-4 z-20">
        <button
          onClick={() => setIsAutoPlay(!isAutoPlay)}
          className={`px-3 py-1 rounded-full text-sm font-medium transition-all duration-200 ${
            isAutoPlay
              ? "bg-green-500/20 text-green-100 hover:bg-green-500/30"
              : "bg-red-500/20 text-red-100 hover:bg-red-500/30"
          } backdrop-blur-sm`}
        >
          {isAutoPlay ? "⏸️ Auto" : "▶️ Manual"}
        </button>
      </div>
    </div>
  );
};

export default Carousel;
