import { useState } from "react";
import Icon from "@/components/ui/icon";

const CARS = [
  {
    id: 1,
    name: "Toyota Camry",
    class: "Комфорт",
    img: "https://cdn.poehali.dev/projects/42a64d20-40cf-4c8c-85f5-02ffbea51ae9/files/c2713c3b-23b1-421b-884f-1e6bc9a026e7.jpg",
    color: "#F5E642",
    specs: {
      Мест: "4",
      Двигатель: "2.5л / 181 л.с.",
      КПП: "Автомат",
      Привод: "Передний",
      Расход: "7.2 л/100км",
      Год: "2023",
    },
    price: "от 2 500 ₽/день",
  },
  {
    id: 2,
    name: "Hyundai Tucson",
    class: "Бизнес",
    img: "https://cdn.poehali.dev/projects/42a64d20-40cf-4c8c-85f5-02ffbea51ae9/files/4006b86a-09cb-4f91-a9fc-2e3679579d8e.jpg",
    color: "#00D4FF",
    specs: {
      Мест: "5",
      Двигатель: "2.0л / 150 л.с.",
      КПП: "Автомат",
      Привод: "Полный",
      Расход: "8.5 л/100км",
      Год: "2022",
    },
    price: "от 3 000 ₽/день",
  },
  {
    id: 3,
    name: "Mercedes Vito",
    class: "Минивэн",
    img: "https://cdn.poehali.dev/projects/42a64d20-40cf-4c8c-85f5-02ffbea51ae9/files/a1c4932f-de79-498f-93be-3409cc9e9705.jpg",
    color: "#FF6B1A",
    specs: {
      Мест: "7",
      Двигатель: "2.2л / 136 л.с.",
      КПП: "Автомат",
      Привод: "Задний",
      Расход: "9.1 л/100км",
      Год: "2023",
    },
    price: "от 4 000 ₽/день",
  },
];

const STATS = [
  { val: "500+", label: "водителей в парке" },
  { val: "3 года", label: "на рынке" },
  { val: "1 день", label: "до выхода на линию" },
  { val: "100%", label: "легальная работа" },
];

interface HeroFleetProps {
  scrollTo: (href: string) => void;
}

export default function HeroFleet({ scrollTo }: HeroFleetProps) {
  const [selectedCar, setSelectedCar] = useState(0);

  return (
    <>
      {/* HERO */}
      <section id="home" className="relative min-h-screen flex items-center overflow-hidden grid-bg">
        <div className="absolute inset-0 bg-gradient-to-br from-taxi-darker via-taxi-dark to-taxi-darker" />
        <div
          className="absolute top-1/4 right-0 w-[600px] h-[600px] rounded-full opacity-10 pointer-events-none"
          style={{ background: "radial-gradient(circle, #F5E642 0%, transparent 70%)" }}
        />
        <div
          className="absolute bottom-0 left-1/4 w-[400px] h-[400px] rounded-full opacity-5 pointer-events-none"
          style={{ background: "radial-gradient(circle, #FF6B1A 0%, transparent 70%)" }}
        />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 pt-28 pb-16 w-full">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 bg-neon-yellow/10 neon-border rounded-full px-4 py-2">
                <div className="w-2 h-2 rounded-full bg-neon-yellow animate-pulse" />
                <span className="text-neon-yellow text-sm font-oswald tracking-widest">ОФИЦИАЛЬНЫЙ ПАРТНЁР ЯНДЕКС ТАКСИ</span>
              </div>

              <h1 className="font-oswald font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-white">
                АРЕНДА АВТО
                <br />
                ДЛЯ <span className="neon-text animate-text-glow">ВОДИТЕЛЕЙ</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Сдаём автомобили в аренду для работы в Яндекс Такси и подключаем водителей к платформе — быстро, официально, без лишних хлопот
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="neon-btn px-8 py-4 rounded-xl font-oswald text-lg tracking-wider flex items-center gap-2"
                  onClick={() => scrollTo("#rental")}
                >
                  <Icon name="Key" size={20} />
                  Арендовать авто
                </button>
                <button
                  className="orange-btn px-8 py-4 rounded-xl font-oswald text-lg tracking-wider flex items-center gap-2"
                  onClick={() => scrollTo("#drivers")}
                >
                  <Icon name="UserCheck" size={20} />
                  Подключиться к Яндекс Такси
                </button>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-4">
                {STATS.map((s) => (
                  <div key={s.label} className="text-center">
                    <div className="font-oswald font-bold text-2xl text-neon-yellow">{s.val}</div>
                    <div className="text-gray-500 text-xs mt-1">{s.label}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative hidden lg:flex items-center justify-center">
              <div
                className="absolute inset-0 rounded-full opacity-20 animate-glow-pulse pointer-events-none"
                style={{ background: "radial-gradient(circle, #F5E642 0%, transparent 60%)" }}
              />
              <img
                src={CARS[0].img}
                alt="ProTaxi"
                className="relative w-full max-w-xl animate-float rounded-2xl object-cover"
                style={{ filter: "drop-shadow(0 0 40px rgba(245,230,66,0.3))" }}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-bounce">
          <span className="text-gray-600 text-xs tracking-widest">ЛИСТАЙ ВНИЗ</span>
          <Icon name="ChevronDown" size={20} className="text-gray-600" />
        </div>
      </section>

      {/* MARQUEE */}
      <div className="bg-neon-yellow/10 border-y border-neon-yellow/20 py-3 overflow-hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {Array(8)
            .fill("⚡ ОФИЦИАЛЬНЫЙ ПАРТНЁР ЯНДЕКС ТАКСИ  •  АРЕНДА АВТО ДЛЯ ВОДИТЕЛЕЙ  •  ПОДКЛЮЧЕНИЕ ЗА 1 ДЕНЬ  •  СТРАХОВКА ВКЛЮЧЕНА  ")
            .map((t, i) => (
              <span key={i} className="font-oswald text-sm text-neon-yellow/70 tracking-widest mx-4">
                {t}
              </span>
            ))}
        </div>
      </div>

      {/* FLEET */}
      <section id="fleet" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">НАШ АВТОПАРК</span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mt-3">
            ГАЛЕРЕЯ <span className="neon-text">АВТОМОБИЛЕЙ</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Современные автомобили в идеальном техническом состоянии — берите в аренду и сразу выходите на линию
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-6 mb-12">
          {CARS.map((car, i) => (
            <div
              key={car.id}
              onClick={() => setSelectedCar(i)}
              className="car-card cursor-pointer glass-card rounded-2xl overflow-hidden transition-all duration-300"
              style={
                selectedCar === i
                  ? {
                      borderColor: car.color,
                      boxShadow: `0 0 30px ${car.color}40`,
                      border: `1px solid ${car.color}`,
                    }
                  : {}
              }
            >
              <div className="relative h-52 overflow-hidden bg-taxi-card">
                <img src={car.img} alt={car.name} className="car-img w-full h-full object-cover" />
                <div className="absolute top-3 left-3">
                  <span
                    className="px-3 py-1 rounded-full text-xs font-oswald font-bold tracking-widest"
                    style={{ background: car.color, color: "#0A0A0F" }}
                  >
                    {car.class}
                  </span>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-taxi-card/80 to-transparent" />
              </div>
              <div className="p-5">
                <h3 className="font-oswald font-bold text-xl text-white mb-1">{car.name}</h3>
                <p className="text-sm font-oswald font-bold mb-4" style={{ color: car.color }}>
                  {car.price}
                </p>
                <div className="grid grid-cols-2 gap-2">
                  {Object.entries(car.specs).map(([k, v]) => (
                    <div key={k} className="flex justify-between text-xs">
                      <span className="text-gray-500">{k}</span>
                      <span className="text-gray-300 font-medium">{v}</span>
                    </div>
                  ))}
                </div>
                <button
                  className="mt-5 w-full py-3 rounded-xl font-oswald tracking-wider text-sm transition-all duration-300"
                  style={{
                    background: selectedCar === i ? car.color : "rgba(255,255,255,0.05)",
                    color: selectedCar === i ? "#0A0A0F" : "#fff",
                    border: `1px solid ${selectedCar === i ? car.color : "rgba(255,255,255,0.1)"}`,
                  }}
                >
                  {selectedCar === i ? "✓ Выбран" : "Выбрать"}
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <button
            className="neon-btn px-8 py-4 rounded-xl font-oswald tracking-wider flex items-center gap-2 mx-auto"
            onClick={() => scrollTo("#contacts")}
          >
            <Icon name="Phone" size={18} />
            Оставить заявку на аренду
          </button>
        </div>
      </section>
    </>
  );
}
