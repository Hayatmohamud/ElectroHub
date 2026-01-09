import React, { useState } from "react";

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  // 15 Su'aalood oo Dynamic ah oo ku saabsan adeegyada shirkadda
  const faqData = [
    {
      id: 1,
      q: "Ma bixisaan dammaanad (Warranty) qalabka?",
      a: "Haa, dhammaan Laptops-ka iyo Mobiles-ka waxay leeyihiin dammaanad 1 sano ah.",
    },
    {
      id: 2,
      q: "Intee ayay qaadataa in alaabta la ii keeno?",
      a: "Magaalada dhexdeeda waa 2-4 saacadood, gobolladana waa 24-48 saacadood.",
    },
    {
      id: 3,
      q: "Ma soo celin karaa qalabka haddii aan ku qanci waayo?",
      a: "Haa, waxaad soo celin kartaa muddo 7 casho gudahood ah haddii uusan qalabku waxyeelo gaarin.",
    },
    {
      id: 4,
      q: "Laptops-kiinnu ma yihiin kuwo cusub (New) mise waa la soo isticmaalay?",
      a: "Waxaan iibinaa kaliya qalab cusub oo sanduuq ku dhex jira (Brand New).",
    },
    {
      id: 5,
      q: "Ma haysaan adeegga cilad-bixinta (Repair)?",
      a: "Haa, waxaan leenahay xarun farsamo oo casri ah oo loogu talagalay macaamiisheena.",
    },
    {
      id: 6,
      q: "Sideen u bixin karaa lacagta?",
      a: "Waxaad ku bixin kartaa EVC Plus, e-Dahab, ama kaarka bangiga (Visa/Mastercard).",
    },
    {
      id: 7,
      q: "Mobiles-ka aad iibisaan ma yihiin kuwa caalami ah (Global Version)?",
      a: "Haa, dhammaan taleefannada waa Global, waxayna ka shaqaynayaan adduunka oo dhan.",
    },
    {
      id: 8,
      q: "Ma bixisaan adeegga iibsiga qayb-qaybta (Installment)?",
      a: "Hadda adeeggaas ma bixinno, laakiin mustaqbalka dhow ayaan qorshaynaynaa.",
    },
    {
      id: 9,
      q: "Xagee ku yaallaan xafiisyadiinna?",
      a: "Xarunteena weyn waxay ku taal bartamaha magaalada, waxaan sidoo kale leenahay laamo dhowr ah.",
    },
    {
      id: 10,
      q: "Ma ka heli karaa agabka Laptops-ka (Accessories)?",
      a: "Haa, waxaan haynaa chargers, batteries, iyo boorsooyinka Laptops-ka.",
    },
    {
      id: 11,
      q: "Ma leedihiin adeegga Trade-in (Inaan qalab duug ah keeno mid cusubna qaato)?",
      a: "Haa, waxaan kugu qiimaynaynaa qalabkaaga hore si aad mid cusub u qaadato.",
    },
    {
      id: 12,
      q: "Sideen u ogaan karaa in alaabtaydii la soo diray?",
      a: "Waxaan kuu soo diraynaa fariin SMS ah iyo lambarka raad-raaca (Tracking ID).",
    },
    {
      id: 13,
      q: "Ma bixisaan tababar ku saabsan sida loo isticmaalo qalabka?",
      a: "Haa, farsamayaqaannadayadu waxay ku siinayaan sharaxaad kooban xilliga iibsiga.",
    },
    {
      id: 14,
      q: "Ma ka heli karaa Software-yada asalka ah (Genuine OS)?",
      a: "Dhammaan Laptops-keena waxay ku yimaadaan Windows original ah oo shaqaynaya.",
    },
    {
      id: 15,
      q: "Ma jiraan qiimo dhimis haddii aan wax badan iibsado?",
      a: "Haa, waxaan leenahay qiimo dhimis gaar ah (Wholesale) oo loogu talagalay shirkadaha iyo dukaamada.",
    },
  ];

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

return (
  <div className="min-h-screen bg-white dark:bg-[#020617] text-slate-900 dark:text-white py-20 px-6 pt-24 transition-colors">
    <div className="max-w-3xl mx-auto">
      <h1 className="text-4xl font-bold text-center mb-12">
        Frequently Asked Questions
      </h1>
      <div className="space-y-4">
        {faqData.map((item, index) => (
          <div
            key={index}
            className="border border-slate-200 dark:border-slate-800 rounded-2xl bg-slate-50 dark:bg-white/5 overflow-hidden"
          >
            <button
              onClick={() =>
                setActiveIndex(activeIndex === index ? null : index)
              }
              className="w-full px-6 py-5 flex justify-between items-center hover:bg-slate-100 dark:hover:bg-white/5 transition-colors"
            >
              <span className="font-semibold">{item.q}</span>
              <span
                className={`transform transition-transform ${
                  activeIndex === index ? "rotate-180" : ""
                }`}
              >
                ▼
              </span>
            </button>
            {activeIndex === index && (
              <div className="px-6 pb-6 text-slate-600 dark:text-slate-400 border-t border-slate-200 dark:border-slate-800 pt-4">
                {item.a}
              </div>
            )}
          </div>
        ))}
      </div>
    </div>
  </div>
);
};

export default FAQ;
