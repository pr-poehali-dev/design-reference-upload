import { useState } from "react";
import React from "react";
import Icon from "@/components/ui/icon";

const HERO_BG = "https://cdn.poehali.dev/projects/0f86619d-cc65-4a14-9c83-b8daf88a1a79/files/488ec1cc-694a-4fee-bd95-b2c86ac9f999.jpg";
const IMG_AGENT = "https://cdn.poehali.dev/projects/0f86619d-cc65-4a14-9c83-b8daf88a1a79/files/00eb31a1-f8bb-4893-8984-6e84b6dcc014.jpg";
const IMG_WEBINAR = "https://cdn.poehali.dev/projects/0f86619d-cc65-4a14-9c83-b8daf88a1a79/files/450e3194-3447-4cc0-bb12-918da6a2acaa.jpg";
const IMG_TRAVEL = "https://cdn.poehali.dev/projects/0f86619d-cc65-4a14-9c83-b8daf88a1a79/files/d906f6ec-3ba1-4d8c-a26f-23ade2ccffb3.jpg";
const IMG_AUTHOR = "https://cdn.poehali.dev/projects/0f86619d-cc65-4a14-9c83-b8daf88a1a79/files/2f466cf0-cc40-4b3f-9e33-30d2b177c189.jpg";

const navLinks = [
  { label: "Программа", href: "#program" },
  { label: "Об авторе", href: "#author" },
  { label: "Отзывы", href: "#reviews" },
  { label: "FAQ", href: "#faq" },
];

const forWhomCards = [
  {
    icon: "Home",
    title: "Хотите работать из дома",
    desc: "Вам нужна профессия, которую можно встроить в свою жизнь, а не жизнь подстраивать под чужой график.",
    result: "На вебинаре вы поймёте, как выглядит реальный старт в профессии и с каких шагов можно начать уже сейчас.",
  },
  {
    icon: "RefreshCw",
    title: "Хотите сменить работу",
    desc: "Прежняя работа больше не радует, но уходить в неизвестность страшно. Не хочется снова потратить время и силы впустую.",
    result: "На вебинаре вы поймёте, подходит ли вам профессия турагента и как входить в неё без розовых очков.",
  },
  {
    icon: "Globe",
    title: "Любите путешествия",
    desc: "Вы давно смотрите в сторону туризма, но пока это симпатия к теме, а не понятный план заработка.",
    result: "На вебинаре вы поймёте, как устроена профессия турагента и как сделать первые шаги без хаоса.",
  },
  {
    icon: "TrendingUp",
    title: "Нужен дополнительный доход",
    desc: "Вы не готовы всё бросить прямо сейчас, но хотите попробовать новое направление и понять, можно ли на нём зарабатывать.",
    result: "На вебинаре вы поймёте, как входить в профессию спокойно, без лишнего давления.",
  },
];

const programSteps = [
  {
    num: "01",
    title: "Первый шаг в онлайн-турагентстве",
    desc: "Покажем, как превратить интерес к путешествиям в понятное направление для работы и с чего начать, если у вас пока нет опыта в туризме.",
  },
  {
    num: "02",
    title: "Как зарабатывает турагент",
    desc: "Разберём, из чего складывается доход, какие есть точки роста и за счёт чего можно выйти на хороший доход без хаотичных действий.",
  },
  {
    num: "03",
    title: "Закрытые предложения и рекламные туры",
    desc: "Расскажем, как турагенты получают доступ к закрытым предложениям от туроператоров и что такое рекламные туры.",
  },
  {
    num: "04",
    title: "Стажировка и реальные возможности",
    desc: "Объясним, как попасть на оплачиваемую стажировку, что она даёт новичку и кого мы рассматриваем для дальнейшей работы в команде.",
  },
  {
    num: "05",
    title: "Разборы, примеры и ответы на вопросы",
    desc: "Покажем успешные кейсы, разберём обучение на сильных примерах и ответим на вопросы участников.",
  },
];

const authorStats = [
  { value: "17", label: "лет в туризме" },
  { value: "300+", label: "обученных турагентов" },
  { value: "№1", label: "у ведущих туроператоров России" },
];

const reviews = [
  {
    name: "Анастасия К.",
    city: "Москва",
    text: "Пришла на вебинар с полным нулём — ни опыта, ни понимания профессии. После вебинара всё встало на места. Сейчас уже провела первые сделки!",
    emoji: "🌟",
  },
  {
    name: "Марина Л.",
    city: "Санкт-Петербург",
    text: "Боялась, что продажи — это не моё. Алена очень доступно объяснила, как на самом деле работает турагент. Никакого «впаривания» — это партнёрство с клиентом.",
    emoji: "✈️",
  },
  {
    name: "Екатерина В.",
    city: "Новосибирск",
    text: "Давно мечтала о работе из дома. После обучения у Алены всё получилось — сейчас работаю в своём темпе и зарабатываю больше, чем на прежней должности.",
    emoji: "🌴",
  },
  {
    name: "Ольга Р.",
    city: "Казань",
    text: "Начинала как дополнительный доход. Теперь это основная работа. Очень благодарна за системный подход и поддержку на каждом этапе.",
    emoji: "💫",
  },
  {
    name: "Юлия Т.",
    city: "Краснодар",
    text: "Не ожидала, что за один вебинар получу такую чёткую картину профессии. Никакой воды, только конкретика и реальные примеры.",
    emoji: "🏖️",
  },
  {
    name: "Светлана М.",
    city: "Екатеринбург",
    text: "После вебинара сразу записалась на обучение. Сейчас уже в команде Global Travel. Это был лучший шаг в моей жизни!",
    emoji: "🎯",
  },
];

const faqItems = [
  {
    q: "Подойдёт ли вебинар, если у меня вообще нет опыта в туризме?",
    a: "Да. Вебинар как раз рассчитан на тех, кто только присматривается к профессии и хочет понять, как в неё войти с нуля.",
  },
  {
    q: "А если я боюсь продаж и общения с клиентами?",
    a: "Это частый страх у новичков. На вебинаре разберём, как устроена работа турагента на самом деле и почему продажи в этой сфере не сводятся к давлению и «впариванию».",
  },
  {
    q: "Подойдёт ли мне эта профессия, если я хочу работать из дома?",
    a: "Да, если вам важны гибкость, удалённый формат и возможность выстраивать работу под свою жизнь. На вебинаре покажем, как выглядит такой формат в реальности.",
  },
  {
    q: "Можно ли рассматривать это как дополнительный доход?",
    a: "Да. Для многих именно так всё и начинается: спокойно, без резких шагов и с понятным входом в профессию.",
  },
  {
    q: "Что будет на вебинаре: теория или что-то прикладное?",
    a: "Вы получите конкретный разбор профессии, модели заработка, реальные возможности старта, примеры и ответы на вопросы. Без воды и общих разговоров.",
  },
  {
    q: "Участие точно бесплатное?",
    a: "Да, участие в вебинаре бесплатное. Нужно только зарегистрироваться, чтобы получить информацию для подключения.",
  },
  {
    q: "Что будет после регистрации?",
    a: "После регистрации вы получите все детали участия и ссылку на вебинар.",
  },
];

function scrollTo(id: string) {
  document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
}

export default function Index() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);
  const [reviewIdx, setReviewIdx] = useState(0);
  const [form, setForm] = useState({ name: "", phone: "", email: "" });

  const visibleReviews = 3;
  const maxIdx = reviews.length - visibleReviews;

  return (
    <div className="min-h-screen bg-cream font-golos" style={{ background: "hsl(var(--cream))" }}>

      {/* NAV */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-stone-200">
        <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <span className="font-cormorant text-xl font-semibold text-teal tracking-wide">Global Travel</span>
            <span className="hidden sm:block text-xs text-stone-400 font-golos ml-1">Школа онлайн-турагентов</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map(l => (
              <button key={l.href} onClick={() => scrollTo(l.href.slice(1))}
                className="text-sm text-stone-600 hover:text-teal transition-colors font-golos">
                {l.label}
              </button>
            ))}
          </div>
          <button
            onClick={() => scrollTo("register")}
            className="bg-teal text-white text-sm px-5 py-2 rounded-full font-golos font-medium hover:bg-teal-dark transition-colors"
            style={{ backgroundColor: "hsl(var(--teal))", color: "#fff" }}
          >
            Записаться
          </button>
        </div>
      </nav>

      {/* HERO */}
      <section className="relative min-h-screen flex items-center pt-16 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover" />
          <div className="absolute inset-0" style={{ background: "linear-gradient(135deg, hsl(195 40% 12% / 0.72) 0%, hsl(182 52% 24% / 0.55) 100%)" }} />
        </div>
        <div className="relative z-10 max-w-6xl mx-auto px-6 py-24">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-sm font-golos font-medium"
              style={{ background: "hsl(182 52% 36% / 0.25)", border: "1px solid hsl(182 52% 60% / 0.4)", color: "hsl(182 70% 80%)" }}>
              <Icon name="Calendar" size={14} />
              Бесплатный вебинар · 24 мая 2026, 14:00 МСК
            </div>
            <h1 className="font-cormorant text-5xl md:text-6xl lg:text-7xl font-semibold text-white leading-tight mb-6">
              Профессия турагента с нуля: как начать и дойти до первых продаж
            </h1>
            <p className="text-lg text-white/80 font-golos mb-8 leading-relaxed">
              Бесплатный вебинар для тех, кто хочет освоить новую профессию и выйти на доход в понятной системе.
            </p>
            <ul className="space-y-3 mb-10">
              {[
                "Поймёте, как устроена работа турагента",
                "Узнаете, как стартовать без опыта в туризме",
                "Разберётесь, как не бояться клиентов и продаж",
                "Увидите путь к первым заявкам и первым деньгам",
              ].map(item => (
                <li key={item} className="flex items-center gap-3 text-white/90 font-golos">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0" style={{ background: "hsl(var(--teal))" }}>
                    <Icon name="Check" size={11} />
                  </span>
                  {item}
                </li>
              ))}
            </ul>
            <button
              onClick={() => scrollTo("register")}
              className="inline-flex items-center gap-2 text-white font-golos font-semibold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
              style={{ background: "hsl(var(--teal))" }}
            >
              Иду на вебинар
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* FOR WHOM */}
      <section id="forwhom" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-golos font-medium uppercase tracking-widest mb-4" style={{ color: "hsl(var(--teal))" }}>Для кого</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-navy mb-4 leading-tight">
              У каждой своя причина прийти в туризм.<br />Но цель одна
            </h2>
            <p className="text-stone-500 font-golos max-w-2xl mx-auto text-lg">
              Выйти на доход в понятной системе. Этот вебинар поможет увидеть свой путь в профессии и перестать крутиться в мыслях без движения.
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            {forWhomCards.map((card, i) => (
              <div key={i} className="rounded-2xl p-8 border border-stone-100 hover:shadow-lg transition-shadow group"
                style={{ background: "hsl(var(--cream))" }}>
                <div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 group-hover:scale-110 transition-transform"
                  style={{ background: "hsl(var(--teal-light))" }}>
                  <Icon name={card.icon} fallback="Star" size={22} style={{ color: "hsl(var(--teal))" }} />
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-navy mb-3">{card.title}</h3>
                <p className="text-stone-500 font-golos text-sm leading-relaxed mb-4">{card.desc}</p>
                <p className="text-sm font-golos font-medium leading-relaxed" style={{ color: "hsl(var(--teal))" }}>{card.result}</p>
              </div>
            ))}
          </div>

          {/* After outcomes */}
          <div className="mt-12 rounded-2xl p-8 border" style={{ background: "hsl(var(--teal-light))", borderColor: "hsl(182 45% 80%)" }}>
            <h3 className="font-cormorant text-2xl font-semibold text-navy mb-5">После вебинара у вас будет</h3>
            <div className="grid sm:grid-cols-2 gap-3">
              {[
                "Понимание, подходит ли вам профессия турагента",
                "Ясная картина, как в неё входят с нуля",
                "Понимание первых шагов без хаоса и перегруза",
                "Уверенность, чтобы перейти от интереса к действию",
              ].map(item => (
                <div key={item} className="flex items-start gap-3">
                  <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(var(--teal))" }}>
                    <Icon name="Check" size={11} style={{ color: "#fff" }} />
                  </span>
                  <span className="text-navy font-golos text-sm leading-relaxed">{item}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* PHOTO BANNER */}
      <section className="relative h-80 overflow-hidden">
        <img src={IMG_WEBINAR} alt="Участницы вебинара" className="w-full h-full object-cover object-center" />
        <div className="absolute inset-0 flex items-center justify-center" style={{ background: "hsl(182 52% 24% / 0.65)" }}>
          <div className="text-center px-6">
            <p className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-3">Более 300 турагентов обучено с 2020 года</p>
            <p className="font-golos text-white/80 text-lg">По всей России. От первого шага до первых продаж.</p>
          </div>
        </div>
      </section>

      {/* PROGRAM */}
      <section id="program" className="py-24" style={{ background: "hsl(var(--cream))" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-golos font-medium uppercase tracking-widest mb-4" style={{ color: "hsl(var(--teal))" }}>Программа вебинара</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-navy mb-4 leading-tight">
              Не мотивация ради мотивации,<br />а понятный разбор
            </h2>
            <p className="text-stone-500 font-golos max-w-2xl mx-auto">
              Как войти в профессию и на чём в ней зарабатывать — шаг за шагом.
            </p>
          </div>
          <div className="grid lg:grid-cols-5 gap-8 items-start">
            <div className="lg:col-span-3 space-y-4">
              {programSteps.map((step, i) => (
                <div key={i} className="bg-white rounded-2xl p-6 md:p-8 flex gap-6 items-start hover:shadow-md transition-shadow border border-stone-100">
                  <span className="font-cormorant text-5xl font-bold flex-shrink-0 leading-none mt-1" style={{ color: "hsl(182 45% 82%)" }}>{step.num}</span>
                  <div>
                    <h3 className="font-cormorant text-2xl font-semibold text-navy mb-2">{step.title}</h3>
                    <p className="text-stone-500 font-golos text-sm leading-relaxed">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
            <div className="lg:col-span-2 sticky top-24 space-y-4">
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={IMG_TRAVEL} alt="Путешествия и туризм" className="w-full h-full object-cover" />
              </div>
              <div className="rounded-2xl overflow-hidden aspect-[4/3]">
                <img src={IMG_AGENT} alt="Работа турагента" className="w-full h-full object-cover" />
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <button
              onClick={() => scrollTo("register")}
              className="inline-flex items-center gap-2 text-white font-golos font-semibold text-lg px-8 py-4 rounded-full transition-all hover:scale-105 shadow-lg"
              style={{ background: "hsl(var(--teal))" }}
            >
              Иду на вебинар
              <Icon name="ArrowRight" size={20} />
            </button>
          </div>
        </div>
      </section>

      {/* AUTHOR */}
      <section id="author" className="py-24 bg-white">
        <div className="max-w-6xl mx-auto px-6">
          <p className="text-sm font-golos font-medium uppercase tracking-widest mb-12 text-center" style={{ color: "hsl(var(--teal))" }}>Об авторе</p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative">
              <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 relative">
                <img src={IMG_AUTHOR} alt="Алена Фондеркина" className="w-full h-full object-cover" />
              </div>
              <div className="absolute -bottom-6 -right-6 bg-white rounded-2xl p-4 shadow-xl border border-stone-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full flex items-center justify-center" style={{ background: "hsl(var(--teal-light))" }}>
                    <Icon name="Award" size={18} style={{ color: "hsl(var(--teal))" }} />
                  </div>
                  <div>
                    <p className="font-cormorant text-lg font-bold text-navy">№1</p>
                    <p className="text-xs text-stone-400 font-golos">у туроператоров РФ</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-navy mb-2 leading-tight">
                В профессию легче входить рядом с теми, кто уже занял в ней сильную позицию
              </h2>
              <p className="text-stone-500 font-golos mb-6 leading-relaxed">
                Алена Фондеркина построила в туризме не просто опыт, а систему, которая помогает новичкам входить в профессию увереннее, быстрее и с реальной перспективой роста.
              </p>
              <p className="text-navy font-golos leading-relaxed mb-6">
                Меня зовут Алена Фондеркина. Я основательница Школы Туризма Global Travel, эксперт с 17-летним опытом в туризме, руководитель и куратор онлайн-школы турагентов.
              </p>
              <p className="text-stone-500 font-golos text-sm leading-relaxed mb-8">
                С 2020 года я обучила более 300 онлайн-турагентов по всей России. Сегодня Global Travel под моим руководством занимает первое место у ведущих туроператоров России.
              </p>
              <div className="grid grid-cols-3 gap-4 mb-8">
                {authorStats.map((s, i) => (
                  <div key={i} className="rounded-xl p-4 text-center" style={{ background: "hsl(var(--teal-light))" }}>
                    <p className="font-cormorant text-3xl font-bold" style={{ color: "hsl(var(--teal))" }}>{s.value}</p>
                    <p className="text-xs text-stone-500 font-golos mt-1 leading-tight">{s.label}</p>
                  </div>
                ))}
              </div>
              <button
                onClick={() => scrollTo("register")}
                className="inline-flex items-center gap-2 text-white font-golos font-semibold px-7 py-3 rounded-full transition-all hover:scale-105"
                style={{ background: "hsl(var(--teal))" }}
              >
                Иду на вебинар
                <Icon name="ArrowRight" size={18} />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* REVIEWS */}
      <section id="reviews" className="py-24" style={{ background: "hsl(var(--cream))" }}>
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-golos font-medium uppercase tracking-widest mb-4" style={{ color: "hsl(var(--teal))" }}>Отзывы участниц</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-navy">Они уже прошли этот путь</h2>
          </div>

          {/* Gallery */}
          <div className="relative overflow-hidden">
            <div
              className="flex gap-6 transition-transform duration-500"
              style={{ transform: `translateX(calc(-${reviewIdx * (100 / visibleReviews)}% - ${reviewIdx * 24 / visibleReviews}px))` }}
            >
              {reviews.map((r, i) => (
                <div key={i} className="flex-shrink-0 w-full md:w-[calc(33.33%-16px)] bg-white rounded-2xl p-6 border border-stone-100 shadow-sm">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-14 h-14 rounded-full flex items-center justify-center text-2xl flex-shrink-0"
                      style={{ background: "hsl(var(--teal-light))" }}>
                      {r.emoji}
                    </div>
                    <div>
                      <p className="font-cormorant text-lg font-semibold text-navy">{r.name}</p>
                      <p className="text-xs text-stone-400 font-golos">{r.city}</p>
                    </div>
                  </div>
                  <div className="flex gap-0.5 mb-3">
                    {[...Array(5)].map((_, j) => (
                      <Icon key={j} name="Star" size={14} style={{ color: "hsl(var(--teal))", fill: "hsl(var(--teal))" }} />
                    ))}
                  </div>
                  <p className="text-stone-600 font-golos text-sm leading-relaxed">{r.text}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={() => setReviewIdx(i => Math.max(0, i - 1))}
              disabled={reviewIdx === 0}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30 hover:border-teal"
              style={{ borderColor: reviewIdx === 0 ? "hsl(var(--muted))" : "hsl(var(--teal))" }}
            >
              <Icon name="ChevronLeft" size={18} style={{ color: "hsl(var(--teal))" }} />
            </button>
            <div className="flex gap-2">
              {Array.from({ length: maxIdx + 1 }).map((_, i) => (
                <button key={i} onClick={() => setReviewIdx(i)}
                  className="w-2 h-2 rounded-full transition-all"
                  style={{ background: i === reviewIdx ? "hsl(var(--teal))" : "hsl(var(--cream-dark))" }} />
              ))}
            </div>
            <button
              onClick={() => setReviewIdx(i => Math.min(maxIdx, i + 1))}
              disabled={reviewIdx === maxIdx}
              className="w-10 h-10 rounded-full border flex items-center justify-center transition-all disabled:opacity-30"
              style={{ borderColor: reviewIdx === maxIdx ? "hsl(var(--muted))" : "hsl(var(--teal))" }}
            >
              <Icon name="ChevronRight" size={18} style={{ color: "hsl(var(--teal))" }} />
            </button>
          </div>
        </div>
      </section>

      {/* PHOTO STRIP before form */}
      <section className="grid grid-cols-3 h-48 md:h-64 overflow-hidden">
        <div className="overflow-hidden">
          <img src={IMG_AGENT} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="overflow-hidden">
          <img src={HERO_BG} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
        <div className="overflow-hidden">
          <img src={IMG_WEBINAR} alt="" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" />
        </div>
      </section>

      {/* REGISTER FORM */}
      <section id="register" className="py-24" style={{ background: "hsl(var(--teal-dark))" }}>
        <div className="max-w-5xl mx-auto px-6">
          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-sm font-golos font-medium uppercase tracking-widest mb-4" style={{ color: "hsl(182 70% 70%)" }}>Регистрация</p>
              <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-white mb-4 leading-tight">
                Запишитесь на бесплатный вебинар
              </h2>
              <p className="font-golos text-white/70 mb-8 leading-relaxed">
                Получите понятную картину профессии, реальные возможности для старта и ответы на свои вопросы.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Честный разбор профессии без иллюзий и воды",
                  "Понятный путь входа в туризм с нуля",
                  "Разбор дохода, возможностей роста и старта",
                  "Практические примеры, кейсы и ответы на вопросы",
                ].map(item => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5" style={{ background: "hsl(182 52% 50% / 0.3)", border: "1px solid hsl(182 52% 60%)" }}>
                      <Icon name="Check" size={10} style={{ color: "hsl(182 70% 75%)" }} />
                    </span>
                    <span className="text-white/80 font-golos text-sm">{item}</span>
                  </li>
                ))}
              </ul>
              <div className="rounded-xl p-4 inline-flex items-center gap-3" style={{ background: "hsl(182 52% 30% / 0.5)", border: "1px solid hsl(182 52% 50% / 0.3)" }}>
                <Icon name="Calendar" size={20} style={{ color: "hsl(182 70% 70%)" }} />
                <div>
                  <p className="text-white font-golos font-medium text-sm">24 мая 2026 года, 14:00 МСК</p>
                  <p className="text-white/50 font-golos text-xs">Онлайн · Участие бесплатное</p>
                </div>
              </div>
            </div>

            <div className="bg-white rounded-2xl p-8 shadow-2xl">
              <p className="font-cormorant text-2xl font-semibold text-navy mb-2">Забронировать место</p>
              <p className="text-stone-500 font-golos text-sm mb-6">Оставьте данные, чтобы получить ссылку на участие.</p>
              <div className="space-y-4">
                <div>
                  <label className="text-xs font-golos font-medium text-stone-500 uppercase tracking-wide mb-1 block">Имя</label>
                  <input
                    type="text"
                    placeholder="Ваше имя"
                    value={form.name}
                    onChange={e => setForm(f => ({ ...f, name: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:ring-2 text-navy"
                    style={{ outline: "none" } as React.CSSProperties}
                  />
                </div>
                <div>
                  <label className="text-xs font-golos font-medium text-stone-500 uppercase tracking-wide mb-1 block">Телефон</label>
                  <input
                    type="tel"
                    placeholder="+7 (___) ___-__-__"
                    value={form.phone}
                    onChange={e => setForm(f => ({ ...f, phone: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:ring-2 text-navy"
                  />
                </div>
                <div>
                  <label className="text-xs font-golos font-medium text-stone-500 uppercase tracking-wide mb-1 block">E-mail</label>
                  <input
                    type="email"
                    placeholder="your@email.ru"
                    value={form.email}
                    onChange={e => setForm(f => ({ ...f, email: e.target.value }))}
                    className="w-full border border-stone-200 rounded-xl px-4 py-3 font-golos text-sm focus:outline-none focus:ring-2 text-navy"
                  />
                </div>
                <button
                  className="w-full text-white font-golos font-semibold py-4 rounded-xl transition-all hover:scale-[1.02] shadow-lg mt-2"
                  style={{ background: "hsl(var(--teal))" }}
                >
                  Забронировать место бесплатно
                </button>
              </div>
              <p className="text-xs text-stone-400 font-golos mt-4 text-center leading-relaxed">
                Нажимая на кнопку, вы соглашаетесь с политикой конфиденциальности и обработкой персональных данных.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-24 bg-white">
        <div className="max-w-3xl mx-auto px-6">
          <div className="text-center mb-16">
            <p className="text-sm font-golos font-medium uppercase tracking-widest mb-4" style={{ color: "hsl(var(--teal))" }}>FAQ</p>
            <h2 className="font-cormorant text-4xl md:text-5xl font-semibold text-navy">Часто задаваемые вопросы</h2>
          </div>
          <div className="space-y-3">
            {faqItems.map((item, i) => (
              <div key={i} className="border border-stone-100 rounded-2xl overflow-hidden">
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-stone-50 transition-colors"
                >
                  <span className="font-golos font-medium text-navy text-sm leading-relaxed">{item.q}</span>
                  <span className="flex-shrink-0 w-7 h-7 rounded-full flex items-center justify-center transition-all"
                    style={{ background: openFaq === i ? "hsl(var(--teal))" : "hsl(var(--teal-light))" }}>
                    <Icon name={openFaq === i ? "Minus" : "Plus"} size={14}
                      style={{ color: openFaq === i ? "#fff" : "hsl(var(--teal))" }} />
                  </span>
                </button>
                {openFaq === i && (
                  <div className="px-6 pb-5">
                    <p className="text-stone-500 font-golos text-sm leading-relaxed">{item.a}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
          <div className="text-center mt-12 flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => scrollTo("register")}
              className="inline-flex items-center gap-2 text-white font-golos font-semibold px-8 py-4 rounded-full transition-all hover:scale-105"
              style={{ background: "hsl(var(--teal))" }}
            >
              Записаться на вебинар
              <Icon name="ArrowRight" size={18} />
            </button>
            <button
              onClick={() => scrollTo("register")}
              className="inline-flex items-center gap-2 font-golos font-semibold px-8 py-4 rounded-full border-2 transition-all hover:scale-105"
              style={{ borderColor: "hsl(var(--teal))", color: "hsl(var(--teal))" }}
            >
              Занять место бесплатно
            </button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ background: "hsl(var(--navy))" }} className="py-16">
        <div className="max-w-6xl mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-10 mb-12">
            <div className="md:col-span-2">
              <p className="font-cormorant text-2xl font-semibold text-white mb-1">Global Travel</p>
              <p className="text-white/50 font-golos text-sm mb-4">Школа онлайн-турагентов</p>
              <p className="text-white/40 font-golos text-xs leading-relaxed max-w-xs">
                Помогаем войти в профессию турагента с нуля и выйти на доход в понятной системе.
              </p>
            </div>
            <div>
              <p className="text-white/60 font-golos text-xs uppercase tracking-widest mb-4">Навигация</p>
              <ul className="space-y-2">
                {["Программа вебинара", "Об авторе", "Отзывы", "FAQ", "Записаться на вебинар"].map(l => (
                  <li key={l}>
                    <button className="text-white/60 font-golos text-sm hover:text-white transition-colors">{l}</button>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-white/60 font-golos text-xs uppercase tracking-widest mb-4">Контакты</p>
              <ul className="space-y-2">
                <li className="flex items-center gap-2 text-white/60 font-golos text-sm">
                  <Icon name="Mail" size={14} />
                  <span>[email]</span>
                </li>
                <li className="flex items-center gap-2 text-white/60 font-golos text-sm">
                  <Icon name="Phone" size={14} />
                  <span>[телефон]</span>
                </li>
                <li className="flex items-center gap-2 text-white/60 font-golos text-sm">
                  <Icon name="Send" size={14} />
                  <span>Telegram</span>
                </li>
                <li className="flex items-center gap-2 text-white/60 font-golos text-sm">
                  <Icon name="Globe" size={14} />
                  <span>ВКонтакте</span>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between gap-4">
            <p className="text-white/30 font-golos text-xs">© 2026 Global Travel. Все права защищены.</p>
            <div className="flex flex-wrap gap-4">
              {["Политика конфиденциальности", "Согласие на обработку данных", "Политика cookies", "Публичная оферта"].map(l => (
                <button key={l} className="text-white/30 font-golos text-xs hover:text-white/60 transition-colors">{l}</button>
              ))}
            </div>
          </div>
        </div>
      </footer>

    </div>
  );
}