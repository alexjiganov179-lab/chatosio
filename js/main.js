// Translation dictionary for three languages: Russian (ru), English (en) and Amharic (am).
const translations = {
  ru: {
    nav_home: "Главная",
    nav_buy: "Где купить",
    nav_support: "Поддержка",
    nav_about: "О бренде",
    nav_b2b: "B2B / B2G",
    nav_vacancies: "Вакансии",
    nav_contacts: "Контакты",
    hero_title: "Идеальное совпадение",
    hero_subtitle: "Ты приносишь вкусный кофе. Мы приносим высококлассные ноутбуки. В OSiO мы уверены, что великие дела начинаются с правильной энергии и правильных инструментов.",
    baseline_title: "BaseLine",
    baseline_desc: "Надежный помощник для работы и учебы",
    baseline_price: "50 000 ETB",
    focus_title: "FocusLine",
    focus_desc: "Стильный ноутбук для офиса и дома",
    focus_price: "40 333 ETB",
    cyber_title: "CyberLine",
    cyber_desc: "Мощный ноутбук для игр и монтажа",
    cyber_price: "202 000 ETB",
    spec_button: "Характеристики",
    buy_button: "Купить",
    buy_intro: "Вы можете приобрести наши ноутбуки прямо на сайте через Chapa или у партнеров. Все цены указаны в ETB и включают курьерскую доставку или самовывоз в Аддис‑Абебе.",
    partners_title: "Партнеры и альтернативные способы покупки",
    crypto_contact: "Оплата криптовалютой через Telegram:",
    shipping_title: "Доставка и самовывоз",
    shipping_desc: "Мы доставляем по всей стране курьером. Также вы можете забрать заказ в нашем сервисном центре в Аддис‑Абебе.",
  },
  en: {
    nav_home: "Home",
    nav_buy: "Where to Buy",
    nav_support: "Support",
    nav_about: "About",
    nav_b2b: "B2B / B2G",
    nav_vacancies: "Vacancies",
    nav_contacts: "Contacts",
    hero_title: "It's a match",
    hero_subtitle: "You bring the delicious coffee. We bring the high‑end laptops. At OSiO, we believe great work starts with the right energy — and the right tools.",
    baseline_title: "BaseLine",
    baseline_desc: "Trusted helper for work & study",
    baseline_price: "50,000 ETB",
    focus_title: "FocusLine",
    focus_desc: "Stylish laptop for office & home",
    focus_price: "40,333 ETB",
    cyber_title: "CyberLine",
    cyber_desc: "Powerful device for games & editing",
    cyber_price: "202,000 ETB",
    spec_button: "Specs",
    buy_button: "Buy",
    buy_intro: "You can purchase our laptops directly through our website using Chapa, or via our partners. All prices are in ETB and include courier delivery or self‑pickup in Addis Ababa.",
    partners_title: "Partners & Alternative Purchasing",
    crypto_contact: "Crypto payments via Telegram:",
    shipping_title: "Delivery & Pickup",
    shipping_desc: "We deliver nationwide via courier. You can also pick up your order from our service center in Addis Ababa.",
  },
  am: {
    nav_home: "መግቢያ",
    nav_buy: "የመግዛት ቦታ",
    nav_support: "ድጋፍ",
    nav_about: "ስለ ብራንድ",
    nav_b2b: "B2B / B2G",
    nav_vacancies: "ስራዎች",
    nav_contacts: "እውቂያዎች",
    hero_title: "ተመሳሳይ ነው",
    hero_subtitle: "አንተ የማርተኛ ቡና ትመጣለህ። እኛ የላፖት ከፍ የሆነ መጠን እንቀርባለን። በ OSiO የትክክለኛ ኃይል እና ትክክለኛ መሳሪያዎች መጀመር ትልቅ ስራዎችን ለማጀምር መልካም እንደሚሆን እናምናለን።",
    baseline_title: "BaseLine",
    baseline_desc: "የስራ እና ትምህርት የታመነ አጋዥ",
    baseline_price: "50,000 ETB",
    focus_title: "FocusLine",
    focus_desc: "ስድስት ላፖት ለቢሮ እና ቤት",
    focus_price: "40,333 ETB",
    cyber_title: "CyberLine",
    cyber_desc: "ለጨዋታዎች እና ለስራዎች ብልህ መሳሪያ",
    cyber_price: "202,000 ETB",
    spec_button: "ዝርዝሮች",
    buy_button: "መግዛት",
    buy_intro: "ላፖቶቻችንን በ Chapa በመጠቀም በእኛ ድር ገጽ ቀጥታ ወይም በጓደኞቻችን መግዛት ይችላሉ። ሁሉም ዋጋዎች በ ETB ይሰጣሉ፣ እና በአዲስ አበባ በኩርያ መድረስ ወይም በተጠቃሚው ራስ መውሰድ ያካትታሉ።",
    partners_title: "አጋር ሾለት እና የተለያዩ የግዢ አማራጮች",
    crypto_contact: "በ ቴሌግራም ስልክ ክሪፕቶ መክፈያ:",
    shipping_title: "ማስተላለፊያ እና ዝርግ ማድረሻ",
    shipping_desc: "እኛ በአገር ውስጥ ሁሉ ኮሩያር እንደማድረስ እንለዋለን። እንዲሁም ትዕዛዛችሁን ከአዲስ አበባ አገልግሎት ማዕከላችን መውሰድ ይችላሉ።",
  }
};

// Initialize language switching and persist selection
(function() {
  const buttons = document.querySelectorAll('.lang-switch button');
  // Default to Russian (ru) if no language was stored. This ensures RU is the primary
  // language on first visit. Users can still switch to EN or AM via the language
  // buttons, and the choice is persisted in localStorage.
  let currentLang = localStorage.getItem('osio-lang') || 'ru';
  function applyLang(lang) {
    currentLang = lang;
    localStorage.setItem('osio-lang', lang);
    buttons.forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const value = translations[lang] && translations[lang][key];
      if (value) {
        el.textContent = value;
      }
    });
  }
  buttons.forEach(btn => {
    btn.addEventListener('click', () => applyLang(btn.dataset.lang));
  });
  applyLang(currentLang);
})();

// Modal functions
function showModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.style.display = 'flex';
  }
}

function closeModal(id) {
  const modal = document.getElementById('modal-' + id);
  if (modal) {
    modal.style.display = 'none';
  }
}

// Payment integration using Chapa test keys via API route
async function buyProduct(product) {
  const email = prompt('Enter your email:');
  const firstName = prompt('First name:');
  const lastName = prompt('Last name:');
  if (!email || !firstName) return;
  const amounts = { 'BaseLine': 50000, 'FocusLine': 40333, 'CyberLine': 202000 };
  const amount = amounts[product] || 0;
  try {
    const response = await fetch('/api/checkout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ amount: amount.toString(), email, first_name: firstName, last_name: lastName })
    });
    const data = await response.json();
    if (data && data.data && data.data.checkout_url) {
      window.location.href = data.data.checkout_url;
    } else {
      alert('Payment initialization failed');
    }
  } catch (err) {
    alert('Error: ' + err.message);
  }
}