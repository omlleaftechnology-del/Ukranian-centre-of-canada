const toggle = document.querySelector('.menu-toggle');
const nav = document.querySelector('.nav');
toggle.addEventListener('click', () => {
  const open = nav.classList.toggle('open');
  toggle.setAttribute('aria-expanded', open);
});
nav.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
  nav.classList.remove('open');
  toggle.setAttribute('aria-expanded', 'false');
}));

const slides = [...document.querySelectorAll('.slide')];
const dots = [...document.querySelectorAll('.slide-dots i')];
let currentSlide = 0;
if (slides.length) {
  setInterval(() => {
    slides[currentSlide].classList.remove('active');
    dots[currentSlide].classList.remove('active');
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].classList.add('active');
    dots[currentSlide].classList.add('active');
  }, 4000);
}

const translations = {
  uk: {
    nav: ['Місії', 'Досягнення', 'Підтримка', 'Контакти'], donateNav: 'Підтримати нас ↗', slogan: 'Разом ми сила!', missionLabel: '01 — НАШІ МІСІЇ', missionTitle: 'Наша місія.', missionKickers: ['ПЕРША МІСІЯ', 'ДРУГА МІСІЯ'], missionHeads: ['Шлях до PR', 'Представництво перед урядом'], missionText: ['Домогтися створення спрощеної програми отримання статусу Permanent Resident (PR) для українців, які втекли від війни та прибули до Канади за програмою CUAET, — щоб кожен, хто знайшов тут свій дім, мав можливість залишитися та будувати своє майбутнє.', 'Представляти інтереси українців перед урядом Канади, захищати їхні права та протидіяти дискримінації й несправедливості.'], achievements: '02 — НАШІ ДОСЯГНЕННЯ', letterHead: 'Звернення до прем’єрів провінцій', letterText: 'Надіслали листи прем’єрам кожної провінції з проханням створити спеціальну PR-програму для українців, які прибули за CUAET.', signatures: '45 000+ підписів', responses: 'Офіційні відповіді провінцій', provinces: ['Квебек ↗', 'Британська Колумбія ↗', 'Онтаріо ↗', 'Альберта ↗'], petitionHead: 'Офіційна петиція', petitionText: 'Чітко описали проблему українців: ми втекли від війни, не можемо повернутися, працюємо, сплачуємо податки та повністю інтегрувалися в канадське суспільство. Нам потрібна максимально спрощена спеціальна програма. Цю позицію було представлено в Національній асамблеї Квебеку депутатом André-Albert Morin.', petitionLink: 'Переглянути петицію ↗', supportLabel: '03 — ПІДТРИМАТИ НАС', supportHead: 'Незалежність у дії.', supportText: 'Ваша підтримка робить нас незалежними. Лише незалежність дає нам можливість по-справжньому представляти інтереси українців.', gofundme: 'Підтримати на GoFundMe ↗', monobank: 'Підтримати гривнями — Monobank ↗', socialKicker: 'БУДЬМО НА ЗВ’ЯЗКУ', socialHead: 'Наші соцмережі', contact: 'Зв’яжіться з нами'
  },
  en: {
    nav: ['Missions', 'Achievements', 'Support', 'Contact'], donateNav: 'Support us ↗', slogan: 'Together we are strong!', missionLabel: '01 — OUR MISSIONS', missionTitle: 'Our mission.', missionKickers: ['FIRST MISSION', 'SECOND MISSION'], missionHeads: ['Path to PR', 'Government representation'], missionText: ['Achieve a simplified Permanent Resident (PR) pathway for Ukrainians who fled the war and arrived in Canada through CUAET, so everyone who has found a home here can stay and build their future.', 'Represent Ukrainians’ interests before the Canadian government, protect their rights, and oppose discrimination and injustice.'], achievements: '02 — OUR ACHIEVEMENTS', letterHead: 'Letters to provincial premiers', letterText: 'We sent letters to the premier of every province asking for a special PR program for Ukrainians who arrived through CUAET.', signatures: '45,000+ signatures', responses: 'Official provincial responses', provinces: ['Quebec ↗', 'British Columbia ↗', 'Ontario ↗', 'Alberta ↗'], petitionHead: 'Official petition', petitionText: 'We clearly described Ukrainians’ situation: we fled the war, cannot return, work, pay taxes, and have fully integrated into Canadian society. We need a highly simplified special program. This position was presented in the National Assembly of Quebec by MNA André-Albert Morin.', petitionLink: 'View the petition ↗', supportLabel: '03 — SUPPORT US', supportHead: 'Independence in action.', supportText: 'Your support makes us independent. Only independence lets us genuinely represent the interests of Ukrainians.', gofundme: 'Support on GoFundMe ↗', monobank: 'Support in hryvnias — Monobank ↗', socialKicker: 'STAY CONNECTED', socialHead: 'Our social media', contact: 'Contact us'
  },
  fr: {
    nav: ['Missions', 'Réalisations', 'Soutien', 'Contact'], donateNav: 'Nous soutenir ↗', slogan: 'Ensemble, nous sommes forts !', missionLabel: '01 — NOS MISSIONS', missionTitle: 'Notre mission.', missionKickers: ['PREMIÈRE MISSION', 'DEUXIÈME MISSION'], missionHeads: ['Parcours vers la RP', 'Représentation auprès du gouvernement'], missionText: ['Obtenir un parcours simplifié vers le statut de résident permanent (RP) pour les Ukrainiens qui ont fui la guerre et sont arrivés au Canada dans le cadre de CUAET, afin que chacun ayant trouvé un foyer ici puisse rester et bâtir son avenir.', 'Représenter les intérêts des Ukrainiens auprès du gouvernement canadien, protéger leurs droits et lutter contre la discrimination et l’injustice.'], achievements: '02 — NOS RÉALISATIONS', letterHead: 'Lettres aux premiers ministres provinciaux', letterText: 'Nous avons envoyé des lettres aux premiers ministres de chaque province demandant un programme spécial de RP pour les Ukrainiens arrivés dans le cadre de CUAET.', signatures: '45 000+ signatures', responses: 'Réponses officielles des provinces', provinces: ['Québec ↗', 'Colombie-Britannique ↗', 'Ontario ↗', 'Alberta ↗'], petitionHead: 'Pétition officielle', petitionText: 'Nous avons clairement décrit la situation des Ukrainiens : nous avons fui la guerre, ne pouvons pas rentrer, travaillons, payons des impôts et sommes pleinement intégrés à la société canadienne. Nous avons besoin d’un programme spécial extrêmement simplifié. Cette position a été présentée à l’Assemblée nationale du Québec par le député André-Albert Morin.', petitionLink: 'Voir la pétition ↗', supportLabel: '03 — NOUS SOUTENIR', supportHead: 'L’indépendance en action.', supportText: 'Votre soutien nous rend indépendants. Seule l’indépendance nous permet de représenter véritablement les intérêts des Ukrainiens.', gofundme: 'Soutenir sur GoFundMe ↗', monobank: 'Soutenir en hryvnias — Monobank ↗', socialKicker: 'RESTONS EN CONTACT', socialHead: 'Nos réseaux sociaux', contact: 'Nous contacter'
  }
};

const setText = (selector, value, index = 0) => {
  const element = document.querySelectorAll(selector)[index];
  if (element) element.textContent = value;
};

function applyLanguage(language) {
  const copy = translations[language];
  const navLinks = document.querySelectorAll('.nav > a');
  copy.nav.forEach((item, index) => { if (navLinks[index]) navLinks[index].textContent = item; });
  if (navLinks[4]) navLinks[4].textContent = copy.donateNav;
  setText('.hero-slogan strong', copy.slogan);
  setText('.section-label', copy.missionLabel);
  setText('.mission-content h2', copy.missionTitle);
  copy.missionKickers.forEach((item, index) => setText('.mission-kicker', item, index));
  copy.missionHeads.forEach((item, index) => setText('.mission-card h3', item, index));
  copy.missionText.forEach((item, index) => setText('.mission-card p:not(.mission-kicker)', item, index));
  setText('.achievements-heading .eyebrow', copy.achievements);
  setText('.achievement-copy h3', copy.letterHead);
  setText('.achievement-copy > span', copy.letterText);
  setText('.achievement-number', copy.signatures);
  setText('.response-links > b', copy.responses);
  copy.provinces.forEach((item, index) => setText('.response-links a', item, index));
  setText('.video-copy h3', copy.petitionHead);
  setText('.video-copy p', copy.petitionText);
  setText('.video-copy .petition-link', copy.petitionLink);
  setText('.donate-copy .eyebrow', copy.supportLabel);
  setText('.donate-copy h2', copy.supportHead);
  setText('.donate-copy > p:not(.eyebrow)', copy.supportText);
  setText('.donate-actions a', copy.gofundme, 0);
  setText('.donate-actions a', copy.monobank, 1);
  setText('.social-heading .eyebrow', copy.socialKicker);
  setText('.social-heading h2', copy.socialHead);
  setText('footer p', copy.contact);
  document.documentElement.lang = language;
  document.querySelectorAll('[data-language]').forEach(button => {
    const active = button.dataset.language === language;
    button.classList.toggle('active', active);
    button.setAttribute('aria-pressed', String(active));
  });
}

document.querySelectorAll('[data-language]').forEach(button => {
  button.addEventListener('click', () => applyLanguage(button.dataset.language));
});
