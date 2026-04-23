import { useState, useEffect } from "react";
import Icon from "@/components/ui/icon";

const NAV_LINKS = [
  { label: "Главная", href: "#home" },
  { label: "Автопарк", href: "#fleet" },
  { label: "Аренда", href: "#rental" },
  { label: "Водителям", href: "#drivers" },
  { label: "Услуги", href: "#services" },
  { label: "FAQ", href: "#faq" },
  { label: "Контакты", href: "#contacts" },
];

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
    price: "от 2 500 ₽/сут",
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
    price: "от 3 200 ₽/сут",
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
    price: "от 5 500 ₽/сут",
  },
];

const SERVICES = [
  { icon: "Car", title: "Городское такси", desc: "Быстрые поездки по городу с профессиональными водителями 24/7" },
  { icon: "MapPin", title: "Трансфер в аэропорт", desc: "Встреча и проводка в аэропорт строго по расписанию" },
  { icon: "Briefcase", title: "Корпоративные поездки", desc: "Бизнес-такси для сотрудников и деловых встреч" },
  { icon: "Star", title: "VIP-класс", desc: "Представительские автомобили для особых случаев" },
  { icon: "Users", title: "Групповые поездки", desc: "Минивэны и автобусы для больших компаний" },
  { icon: "Clock", title: "Почасовая аренда", desc: "Автомобиль с водителем в полное распоряжение" },
];

const DRIVER_BENEFITS = [
  { icon: "TrendingUp", val: "до 90%", label: "от стоимости поездки" },
  { icon: "Zap", val: "24/7", label: "поддержка водителей" },
  { icon: "Shield", val: "Страховка", label: "на каждую поездку" },
  { icon: "Smartphone", val: "Приложение", label: "для iOS и Android" },
];

const FAQS = [
  {
    q: "Как заказать автомобиль?",
    a: "Оставьте заявку на сайте, позвоните по телефону или напишите в мессенджер. Наш оператор свяжется с вами в течение 2 минут.",
  },
  {
    q: "Какие документы нужны для аренды?",
    a: "Паспорт гражданина РФ и водительское удостоверение категории B со стажем не менее 2 лет.",
  },
  {
    q: "Есть ли возможность взять автомобиль без водителя?",
    a: "Да, мы предоставляем автомобили в аренду без водителя. Минимальный срок — 1 сутки.",
  },
  {
    q: "Как стать водителем ProTaxi?",
    a: "Заполните форму на сайте, пройдите проверку документов и медосмотр. Обучение — бесплатно.",
  },
  {
    q: "Работаете ли вы в праздники?",
    a: "Да, ProTaxi работает 365 дней в году, 24 часа в сутки без выходных и праздников.",
  },
];

const STATS = [
  { val: "5 000+", label: "поездок в день" },
  { val: "1 200+", label: "водителей" },
  { val: "4.9", label: "рейтинг в сторах" },
  { val: "3 года", label: "на рынке" },
];

export default function Index() {
  const [selectedCar, setSelectedCar] = useState(0);
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handler);
    return () => window.removeEventListener("scroll", handler);
  }, []);

  const scrollTo = (href: string) => {
    const id = href.replace("#", "");
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-taxi-dark font-golos">
      {/* NAVBAR */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-taxi-darker/95 backdrop-blur-xl border-b border-taxi-border shadow-lg shadow-black/50"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 flex items-center justify-between h-16 lg:h-20">
          <div className="flex items-center gap-2">
            <div className="w-9 h-9 bg-neon-yellow rounded-lg flex items-center justify-center animate-glow-pulse">
              <Icon name="Car" size={20} className="text-taxi-dark" />
            </div>
            <span className="font-oswald font-bold text-2xl text-white tracking-widest">
              PRO<span className="neon-text">TAXI</span>
            </span>
          </div>

          <div className="hidden lg:flex items-center gap-1">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="px-3 py-2 text-sm font-golos text-gray-300 hover:text-neon-yellow transition-colors duration-200 rounded-md hover:bg-white/5"
              >
                {link.label}
              </button>
            ))}
          </div>

          <button
            className="neon-btn px-5 py-2.5 rounded-lg text-sm font-oswald tracking-wider hidden lg:flex items-center gap-2"
            onClick={() => scrollTo("#contacts")}
          >
            <Icon name="Phone" size={16} />
            Заказать
          </button>

          <button
            className="lg:hidden text-white p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <Icon name={menuOpen ? "X" : "Menu"} size={24} />
          </button>
        </div>

        {menuOpen && (
          <div className="lg:hidden bg-taxi-darker border-t border-taxi-border px-4 py-4 flex flex-col gap-2">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="text-left px-3 py-3 text-gray-300 hover:text-neon-yellow border-b border-taxi-border/50 text-sm"
              >
                {link.label}
              </button>
            ))}
            <button
              className="neon-btn mt-2 py-3 rounded-lg font-oswald tracking-wider"
              onClick={() => scrollTo("#contacts")}
            >
              Заказать такси
            </button>
          </div>
        )}
      </nav>

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
                <span className="text-neon-yellow text-sm font-oswald tracking-widest">ОНЛАЙН • РАБОТАЕМ 24/7</span>
              </div>

              <h1 className="font-oswald font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight text-white">
                ТАКСИ НОВОГО
                <br />
                <span className="neon-text animate-text-glow">ПОКОЛЕНИЯ</span>
              </h1>

              <p className="text-gray-400 text-lg max-w-lg leading-relaxed">
                Профессиональные водители, современный автопарк и мгновенная подача — ProTaxi меняет стандарт городских поездок
              </p>

              <div className="flex flex-wrap gap-4">
                <button
                  className="neon-btn px-8 py-4 rounded-xl font-oswald text-lg tracking-wider flex items-center gap-2"
                  onClick={() => scrollTo("#contacts")}
                >
                  <Icon name="Zap" size={20} />
                  Вызвать такси
                </button>
                <button
                  className="orange-btn px-8 py-4 rounded-xl font-oswald text-lg tracking-wider flex items-center gap-2"
                  onClick={() => scrollTo("#rental")}
                >
                  <Icon name="Key" size={20} />
                  Арендовать авто
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
            .fill("⚡ ПРОФЕССИОНАЛЬНЫЕ ВОДИТЕЛИ  •  СОВРЕМЕННЫЙ АВТОПАРК  •  ПОДАЧА ЗА 5 МИНУТ  •  РАБОТАЕМ 24/7  ")
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
            Тщательно отобранный парк современных автомобилей в идеальном техническом состоянии
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
            Забронировать выбранный автомобиль
          </button>
        </div>
      </section>

      {/* RENTAL */}
      <section id="rental" className="py-24 bg-taxi-card/50 border-y border-taxi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">АРЕНДА</span>
              <h2 className="section-title text-4xl sm:text-5xl text-white mt-3 mb-6">
                АВТО В АРЕНДУ
                <br />
                <span className="neon-text">БЕЗ ЛИШНИХ</span>
                <br />
                ХЛОПОТ
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Широкий выбор автомобилей от эконом до бизнес-класса. Прозрачные условия, без скрытых платежей. Страховка включена.
              </p>
              <div className="space-y-4">
                {[
                  "Без залога при оплате картой",
                  "Страховка КАСКО включена",
                  "Подача в любое место города",
                  "Аренда от 1 дня",
                ].map((text) => (
                  <div key={text} className="flex items-center gap-3">
                    <Icon name="CheckCircle" size={20} className="text-neon-yellow flex-shrink-0" />
                    <span className="text-gray-300">{text}</span>
                  </div>
                ))}
              </div>
              <button
                className="mt-10 neon-btn px-8 py-4 rounded-xl font-oswald tracking-wider flex items-center gap-2"
                onClick={() => scrollTo("#contacts")}
              >
                <Icon name="Key" size={18} />
                Оставить заявку
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Эконом", from: "от 1 500 ₽", icon: "Car", color: "#F5E642" },
                { label: "Комфорт", from: "от 2 500 ₽", icon: "Car", color: "#00D4FF" },
                { label: "Бизнес", from: "от 4 000 ₽", icon: "Briefcase", color: "#FF6B1A" },
                { label: "Минивэн", from: "от 5 500 ₽", icon: "Users", color: "#9B59B6" },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}20` }}
                  >
                    <Icon name={cat.icon as "Car" | "Briefcase" | "Users"} size={24} style={{ color: cat.color }} />
                  </div>
                  <div>
                    <div className="font-oswald font-bold text-white text-lg">{cat.label}</div>
                    <div className="text-sm font-bold" style={{ color: cat.color }}>
                      {cat.from}
                    </div>
                    <div className="text-gray-600 text-xs mt-1">в сутки</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* DRIVERS */}
      <section id="drivers" className="py-24 px-4 sm:px-6 max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">ВОДИТЕЛЯМ</span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mt-3">
            РАБОТАЙ С <span className="neon-text">PROTAXI</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Присоединяйся к команде профессионалов и зарабатывай больше с нашими условиями
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DRIVER_BENEFITS.map((b) => (
            <div
              key={b.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-neon-yellow/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-neon-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-yellow/20 transition-colors">
                <Icon name={b.icon as "TrendingUp" | "Zap" | "Shield" | "Smartphone"} size={28} className="text-neon-yellow" />
              </div>
              <div className="font-oswald font-bold text-3xl text-white mb-1">{b.val}</div>
              <div className="text-gray-500 text-sm">{b.label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 lg:p-12 neon-border">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="section-title text-3xl text-white mb-8">КАК НАЧАТЬ РАБОТУ</h3>
              <div className="space-y-6">
                {[
                  { n: "01", title: "Оставь заявку", desc: "Заполни форму на сайте или позвони нам" },
                  { n: "02", title: "Пройди проверку", desc: "Документы и медосмотр — займёт 1 день" },
                  { n: "03", title: "Обучение", desc: "Бесплатный инструктаж по нашим стандартам" },
                  { n: "04", title: "Начни зарабатывать", desc: "Первая поездка уже в день подключения" },
                ].map((step) => (
                  <div key={step.n} className="flex gap-5 items-start">
                    <div className="font-oswald font-bold text-3xl text-neon-yellow/30 w-12 flex-shrink-0">
                      {step.n}
                    </div>
                    <div>
                      <div className="font-oswald font-bold text-white text-lg">{step.title}</div>
                      <div className="text-gray-500 text-sm mt-1">{step.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="text-center">
              <div className="font-oswald font-bold text-6xl text-neon-yellow mb-2">90%</div>
              <div className="text-gray-400 mb-2">выплата от каждой поездки</div>
              <div className="text-gray-600 text-sm mb-8">Минимальная комиссия сервиса на рынке</div>
              <button
                className="neon-btn w-full py-4 rounded-xl font-oswald text-lg tracking-wider"
                onClick={() => scrollTo("#contacts")}
              >
                Стать водителем ProTaxi
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="py-24 bg-taxi-card/50 border-y border-taxi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">ЧТО МЫ ПРЕДЛАГАЕМ</span>
            <h2 className="section-title text-4xl sm:text-5xl text-white mt-3">
              НАШ СПЕКТР <span className="neon-text">УСЛУГ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="glass-card rounded-2xl p-7 hover:border-neon-yellow/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-neon-yellow/20 transition-colors">
                  <Icon name={s.icon as "Car" | "MapPin" | "Briefcase" | "Star" | "Users" | "Clock"} size={24} className="text-neon-yellow" />
                </div>
                <h3 className="font-oswald font-bold text-xl text-white mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 px-4 sm:px-6 max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">ПОДДЕРЖКА</span>
          <h2 className="section-title text-4xl sm:text-5xl text-white mt-3">
            ЧАСТЫЕ <span className="neon-text">ВОПРОСЫ</span>
          </h2>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className={`glass-card rounded-2xl overflow-hidden transition-all duration-300 ${
                openFaq === i ? "border-neon-yellow/30" : "hover:border-white/10"
              }`}
            >
              <button
                className="w-full px-6 py-5 flex items-center justify-between text-left"
                onClick={() => setOpenFaq(openFaq === i ? null : i)}
              >
                <span className="font-golos font-semibold text-white pr-4">{faq.q}</span>
                <Icon
                  name={openFaq === i ? "ChevronUp" : "ChevronDown"}
                  size={20}
                  className={`flex-shrink-0 transition-colors ${openFaq === i ? "text-neon-yellow" : "text-gray-600"}`}
                />
              </button>
              {openFaq === i && (
                <div className="px-6 pb-5 text-gray-400 text-sm leading-relaxed border-t border-taxi-border pt-4">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CONTACTS */}
      <section id="contacts" className="py-24 bg-taxi-card/50 border-t border-taxi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="text-center mb-16">
            <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">СВЯЗЬ С НАМИ</span>
            <h2 className="section-title text-4xl sm:text-5xl text-white mt-3">
              СВЯЖИТЕСЬ С <span className="neon-text">НАМИ</span>
            </h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <div className="space-y-6">
              {[
                { icon: "Phone", label: "Телефон", val: "+7 (800) 123-45-67", sub: "Бесплатно по России" },
                { icon: "MessageCircle", label: "WhatsApp / Telegram", val: "+7 (999) 123-45-67", sub: "Ответим в течение минуты" },
                { icon: "MapPin", label: "Офис", val: "ул. Центральная, 15", sub: "Пн–Пт: 9:00–21:00" },
                { icon: "Mail", label: "Email", val: "info@protaxi.ru", sub: "Для корпоративных клиентов" },
              ].map((c) => (
                <div
                  key={c.label}
                  className="glass-card rounded-2xl p-5 flex items-start gap-4 hover:border-neon-yellow/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-neon-yellow/10 rounded-xl flex items-center justify-center flex-shrink-0">
                    <Icon name={c.icon as "Phone" | "MessageCircle" | "MapPin" | "Mail"} size={22} className="text-neon-yellow" />
                  </div>
                  <div>
                    <div className="text-gray-500 text-xs mb-1">{c.label}</div>
                    <div className="font-oswald font-bold text-white text-lg">{c.val}</div>
                    <div className="text-gray-600 text-xs mt-1">{c.sub}</div>
                  </div>
                </div>
              ))}
            </div>

            <div className="glass-card rounded-3xl p-8 neon-border">
              <h3 className="font-oswald font-bold text-2xl text-white mb-6">ОСТАВИТЬ ЗАЯВКУ</h3>
              <div className="space-y-4">
                <input
                  type="text"
                  placeholder="Ваше имя"
                  className="w-full bg-taxi-dark border border-taxi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 transition-colors font-golos"
                />
                <input
                  type="tel"
                  placeholder="Номер телефона"
                  className="w-full bg-taxi-dark border border-taxi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 transition-colors font-golos"
                />
                <select className="w-full bg-taxi-dark border border-taxi-border rounded-xl px-4 py-3.5 text-gray-400 focus:outline-none focus:border-neon-yellow/50 transition-colors font-golos">
                  <option value="">Тип обращения</option>
                  <option>Заказать такси</option>
                  <option>Аренда автомобиля</option>
                  <option>Подключение водителя</option>
                  <option>Корпоративный клиент</option>
                </select>
                <textarea
                  placeholder="Комментарий (необязательно)"
                  rows={3}
                  className="w-full bg-taxi-dark border border-taxi-border rounded-xl px-4 py-3.5 text-white placeholder-gray-600 focus:outline-none focus:border-neon-yellow/50 transition-colors resize-none font-golos"
                />
                <button className="neon-btn w-full py-4 rounded-xl font-oswald text-lg tracking-wider">
                  Отправить заявку
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-taxi-darker border-t border-taxi-border py-10 px-4 sm:px-6">
        <div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-neon-yellow rounded-lg flex items-center justify-center">
              <Icon name="Car" size={16} className="text-taxi-dark" />
            </div>
            <span className="font-oswald font-bold text-xl text-white">
              PRO<span className="neon-text">TAXI</span>
            </span>
          </div>
          <div className="flex flex-wrap gap-4 justify-center text-sm text-gray-600">
            {NAV_LINKS.map((link) => (
              <button
                key={link.href}
                onClick={() => scrollTo(link.href)}
                className="hover:text-neon-yellow transition-colors"
              >
                {link.label}
              </button>
            ))}
          </div>
          <div className="text-gray-700 text-sm">© 2024 ProTaxi</div>
        </div>
      </footer>
    </div>
  );
}
