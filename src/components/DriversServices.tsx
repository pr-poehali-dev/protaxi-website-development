import Icon from "@/components/ui/icon";

const SERVICES = [
  { icon: "Car", title: "Аренда авто для работы", desc: "Современные автомобили в аренду под работу в Яндекс Такси — посуточно или понедельно" },
  { icon: "UserCheck", title: "Подключение к Яндекс Такси", desc: "Быстрое оформление и активация аккаунта водителя в Яндекс Такси под ключ" },
  { icon: "FileText", title: "Помощь с документами", desc: "Помогаем собрать и подать все необходимые документы для работы в такси" },
  { icon: "Wrench", title: "Техническое обслуживание", desc: "Регулярное ТО автомобилей из нашего парка включено в стоимость аренды" },
  { icon: "HeadphonesIcon", title: "Поддержка водителей", desc: "Сопровождаем водителей на всех этапах — от оформления до первых поездок" },
  { icon: "TrendingUp", title: "Рост заработка", desc: "Помогаем настроить аккаунт и тарифы для максимального дохода с первого дня" },
];

const DRIVER_BENEFITS = [
  { icon: "Zap", val: "1 день", label: "до выхода на линию" },
  { icon: "Wrench", val: "ТО", label: "входит в аренду" },
  { icon: "FileText", val: "Под ключ", label: "оформление документов" },
  { icon: "Headphones", val: "24/7", label: "поддержка водителей" },
];

interface DriversServicesProps {
  scrollTo: (href: string) => void;
}

export default function DriversServices({ scrollTo }: DriversServicesProps) {
  return (
    <>
      {/* RENTAL */}
      <section id="rental" className="py-24 bg-taxi-card/50 border-y border-taxi-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <div>
              <span className="text-neon-yellow/60 font-oswald tracking-[0.3em] text-sm">АРЕНДА</span>
              <h2 className="section-title text-4xl sm:text-5xl text-white mt-3 mb-6">
                АРЕНДА ДЛЯ
                <br />
                <span className="neon-text">ЯНДЕКС ТАКСИ</span>
                <br />
                БЕЗ ХЛОПОТ
              </h2>
              <p className="text-gray-400 leading-relaxed mb-8">
                Сдаём автомобили водителям для работы в Яндекс Такси. Прозрачные условия, без скрытых платежей.
              </p>
              <div className="space-y-4">
                {[
                  "Техническое обслуживание входит в аренду",
                  "Выдача авто в день обращения",
                  "Аренда от 7 дней",
                  "Прозрачные условия без скрытых платежей",
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
                Оставить заявку на аренду
              </button>
            </div>

            <div className="grid grid-cols-2 gap-4">
              {[
                { label: "Эконом", from: "от 1 700 ₽/день", icon: "Car", color: "#F5E642" },
                { label: "Комфорт", from: "от 2 500 ₽/день", icon: "Car", color: "#00D4FF" },
                { label: "Комфорт+", from: "от 3 000 ₽/день", icon: "Briefcase", color: "#FF6B1A" },
                { label: "Бизнес", from: "от 4 000 ₽/день", icon: "Star", color: "#9B59B6" },
              ].map((cat) => (
                <div
                  key={cat.label}
                  className="glass-card rounded-2xl p-6 flex flex-col gap-3 hover:scale-105 transition-transform duration-300 cursor-pointer"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{ background: `${cat.color}20` }}
                  >
                    <Icon name={cat.icon as "Car" | "Briefcase" | "Star"} size={24} style={{ color: cat.color }} />
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
            ПОДКЛЮЧЕНИЕ К <span className="neon-text">ЯНДЕКС ТАКСИ</span>
          </h2>
          <p className="text-gray-500 mt-4 max-w-xl mx-auto">
            Помогаем водителям быстро и официально начать работу в Яндекс Такси — берём все хлопоты на себя
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {DRIVER_BENEFITS.map((b) => (
            <div
              key={b.label}
              className="glass-card rounded-2xl p-6 text-center hover:border-neon-yellow/30 transition-all duration-300 group"
            >
              <div className="w-14 h-14 bg-neon-yellow/10 rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:bg-neon-yellow/20 transition-colors">
                <Icon name={b.icon as "Zap" | "Wrench" | "FileText" | "Headphones"} size={28} className="text-neon-yellow" />
              </div>
              <div className="font-oswald font-bold text-3xl text-white mb-1">{b.val}</div>
              <div className="text-gray-500 text-sm">{b.label}</div>
            </div>
          ))}
        </div>

        <div className="glass-card rounded-3xl p-8 lg:p-12 neon-border">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <h3 className="section-title text-3xl text-white mb-8">КАК МЫ ПОДКЛЮЧАЕМ</h3>
              <div className="space-y-6">
                {[
                  { n: "01", title: "Оставь заявку", desc: "Позвони или заполни форму на сайте — ответим сразу" },
                  { n: "02", title: "Подготовим документы", desc: "Поможем собрать всё необходимое для регистрации в Яндекс Такси" },
                  { n: "03", title: "Регистрация в системе", desc: "Оформляем аккаунт и настраиваем профиль водителя" },
                  { n: "04", title: "Выход на линию", desc: "Уже через 1 день получаешь автомобиль и первые заказы" },
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
              <div className="font-oswald font-bold text-6xl text-neon-yellow mb-2">1 день</div>
              <div className="text-gray-400 mb-2">до первого заказа в Яндекс Такси</div>
              <div className="text-gray-600 text-sm mb-8">Быстрее чем самостоятельная регистрация</div>
              <button
                className="neon-btn w-full py-4 rounded-xl font-oswald text-lg tracking-wider"
                onClick={() => scrollTo("#contacts")}
              >
                Подключиться к Яндекс Такси
              </button>
            </div>
          </div>
        </div>

        {/* SELF-REGISTRATION BLOCK */}
        <div className="mt-10 glass-card rounded-3xl p-8 lg:p-12 border border-neon-yellow/20 bg-neon-yellow/5">
          <div className="grid lg:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-neon-yellow/10 rounded-full px-4 py-2 mb-6">
                <Icon name="Zap" size={16} className="text-neon-yellow" />
                <span className="text-neon-yellow text-sm font-oswald tracking-widest">САМОСТОЯТЕЛЬНОЕ ПОДКЛЮЧЕНИЕ</span>
              </div>
              <h3 className="section-title text-3xl text-white mb-4">
                ЗАРЕГИСТРИРУЙТЕСЬ <span className="neon-text">САМИ</span> — БЕЗ МЕНЕДЖЕРА
              </h3>
              <p className="text-gray-400 leading-relaxed mb-4">
                Не хочешь ждать? Заполни анкету водителя напрямую через форму Яндекс Такси — и сразу выходи на линию через наш парк.
              </p>
              <p className="text-gray-500 text-sm leading-relaxed">
                Заполни все данные в форме, выбери наш автопарк — и уже сегодня начнёшь получать заказы. Никаких очередей и ожидания звонка менеджера.
              </p>
            </div>
            <div className="flex flex-col items-center text-center gap-6">
              <div className="space-y-3 w-full">
                {[
                  "Заполни анкету за 5 минут",
                  "Выбери наш автопарк в форме",
                  "Получи одобрение и выходи на линию",
                ].map((text, i) => (
                  <div key={text} className="flex items-center gap-3 text-left">
                    <div className="w-7 h-7 rounded-full bg-neon-yellow/20 flex items-center justify-center flex-shrink-0">
                      <span className="text-neon-yellow font-oswald font-bold text-xs">{i + 1}</span>
                    </div>
                    <span className="text-gray-300 text-sm">{text}</span>
                  </div>
                ))}
              </div>
              <a
                href="https://forms.fleet.yandex.ru/forms?ref_id=384b2ff59bc146aaae05962856a649d4"
                target="_blank"
                rel="noopener noreferrer"
                className="neon-btn w-full py-4 rounded-xl font-oswald text-lg tracking-wider flex items-center justify-center gap-2"
              >
                <Icon name="ExternalLink" size={20} />
                Зарегистрироваться в Яндекс Такси
              </a>
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
              ЧТО МЫ <span className="neon-text">ПРЕДЛАГАЕМ</span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((s) => (
              <div
                key={s.title}
                className="glass-card rounded-2xl p-7 hover:border-neon-yellow/30 transition-all duration-300 group hover:-translate-y-1"
              >
                <div className="w-12 h-12 bg-neon-yellow/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-neon-yellow/20 transition-colors">
                  <Icon name={s.icon as "Car" | "UserCheck" | "FileText" | "Wrench" | "HeadphonesIcon" | "TrendingUp"} fallback="Star" size={24} className="text-neon-yellow" />
                </div>
                <h3 className="font-oswald font-bold text-xl text-white mb-3">{s.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}