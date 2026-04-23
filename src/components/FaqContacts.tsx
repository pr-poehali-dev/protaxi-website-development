import { useState } from "react";
import Icon from "@/components/ui/icon";
import { NAV_LINKS } from "@/components/Navbar";

const FAQS = [
  {
    q: "Как арендовать автомобиль для работы в Яндекс Такси?",
    a: "Оставьте заявку на сайте или позвоните нам. Мы проверим документы и уже на следующий день вы сможете выйти на линию.",
  },
  {
    q: "Какие документы нужны для аренды?",
    a: "Паспорт гражданина РФ и водительское удостоверение категории B со стажем не менее 3 лет.",
  },
  {
    q: "Вы принимаете заказы на такси?",
    a: "Нет, мы не диспетчерская служба и не принимаем заказы от пассажиров. Наша специализация — аренда автомобилей водителям и подключение к Яндекс Такси.",
  },
  {
    q: "Что входит в подключение к Яндекс Такси?",
    a: "Мы помогаем зарегистрироваться в системе, подать документы, пройти проверку и настроить аккаунт — полностью под ключ.",
  },
  {
    q: "Есть ли минимальный срок аренды?",
    a: "Минимальный срок аренды — 7 дней. Также доступна помесячная аренда со скидкой.",
  },
];

interface FaqContactsProps {
  scrollTo: (href: string) => void;
}

export default function FaqContacts({ scrollTo }: FaqContactsProps) {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
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
    </>
  );
}