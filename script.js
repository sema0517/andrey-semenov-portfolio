const DATA = {
  hero: {
    title: {
      ru: "Senior IT Project Manager<br><span class=\"hero-title-sub\">от vision<br class=\"mobile-break\"> AI-продукта до внедрения</span>",
      en: "Senior IT Project Manager<br><span class=\"hero-title-sub\">from AI product vision<br class=\"mobile-break\"> to production</span>"
    },
    sub: {
      ru: "11 лет в проектах на стыке бизнеса, SAP и AI — от логистики РУСАЛ до собственных AI-прототипов",
      en: "11 years across business, SAP and AI — from RUSAL logistics to my own AI prototypes"
    },
    tags: ["SAP ERP", "FastAPI", "Qdrant", "LLM / RAG", "DataLens", "JTBD / CJM", "Agile / PMI"],
    stats: [
      { num: { ru: "11 лет", en: "11 years" }, label: { ru: "опыта", en: "experience" } },
      { num: { ru: "5–40 млн ₽", en: "$60K–$500K+" }, label: { ru: "бюджеты проектов", en: "project budgets" } },
      { num: { ru: "35 чел.", en: "35 people" }, label: { ru: "кросс-функц. команды", en: "cross-functional teams" } }
    ]
  },
  labels: {
    projects: { ru: "Проекты", en: "Projects" },
    how: { ru: "Как я работаю", en: "How I work" },
    skills: { ru: "Навыки", en: "Skills" },
    mainFlag: { ru: "Главный проект", en: "Flagship project" }
  },
  categories: [
    {
      label: "AI Product",
      count: { ru: "3 проекта", en: "3 projects" },
      projects: [
        {
          main: true,
          title: { ru: "AI-агент для создания сбытовых контрактов", en: "AI agent for export sales contract generation" },
          teaser: { ru: "Сформулировал vision и спроектировал прототип для экспортных контрактов → эффект $70K/год", en: "Defined the vision and designed a prototype for export contracts → expected $70K/year impact" },
          task: { ru: "Долгое согласование и финансирование экспортных сбытовых контрактов.", en: "Slow approval and financing cycles for export sales contracts." },
          solution: { ru: "Построил CJM пользовательского пути сервиса, сформулировал ценность проекта, спроектировал UI-прототип в Claude Design; совместно с коллегой при помощи ИИ собрал рабочий прототип на базе внутренней LLM-платформы. Протестирован и принят бизнесом на моковых данных.", en: "Built a CJM of the service's user journey, defined the project's value, and designed a UI prototype in Claude Design. With a colleague, used AI to assemble a working prototype on the internal LLM platform. Tested and approved by the business on mock data." },
          role: { ru: "Автор vision → руководитель проекта внедрения.", en: "Vision author → implementation project lead." },
          result: { ru: "Ожидаемый эффект $70 000/год за счёт роста скорости согласования и сокращения времени финансирования контракта.", en: "Expected impact of $70,000/year from faster approval and shorter contract financing time." }
        },
        {
          main: false,
          title: { ru: "AI-ассистент для сбора требований в формате JTBD", en: "JTBD requirements-gathering AI assistant" },
          teaser: { ru: "Структурированные бизнес-требования сразу в бэклог разработки — без потери контекста", en: "Structured business requirements straight into the dev backlog — no context lost" },
          task: { ru: "При подготовке проекта контрактного AI-агента требования бизнеса терялись и размывались между обсуждениями и бэклогом разработки.", en: "While preparing the contract AI-agent project, business requirements kept getting lost or diluted between discussions and the dev backlog." },
          solution: { ru: "Создал AI-ассистента, который переводит запросы бизнеса в структурированный формат Jobs To Be Done и фиксирует их напрямую в бэклоге.", en: "Built an AI assistant that converts business requests into structured Jobs-To-Be-Done format and logs them directly in the backlog." },
          role: { ru: "Автор инструмента и методологии сбора требований.", en: "Author of the tool and the requirements-gathering methodology." },
          result: { ru: "Требования фиксируются в бэклоге без потери контекста, discovery-фаза проекта ускорилась.", en: "Requirements are captured in the backlog without losing context; the discovery phase sped up." }
        },
        {
          main: false,
          title: { ru: "Семантический поиск по НСИ материалов", en: "Semantic search for materials master data" },
          teaser: { ru: "Гибридный dense+sparse поиск на FRIDA-эмбеддингах → 3x меньше дублей, 2x быстрее", en: "Hybrid dense+sparse search on FRIDA embeddings → 3x fewer duplicates, 2x faster" },
          task: { ru: "Массовое дублирование заявок на создание материалов в SAP из-за неэффективного поиска по справочнику НСИ.", en: "Mass duplication of material-creation requests in SAP caused by inefficient search in the materials master directory." },
          solution: { ru: "FRIDA embeddings, гибридный dense+sparse поиск, FastAPI, PostgreSQL + Qdrant, интеграция с SAP ERP через SAP XI.", en: "FRIDA embeddings, hybrid dense+sparse search, FastAPI, PostgreSQL + Qdrant, integration with SAP ERP via SAP XI." },
          role: { ru: "Инициатор и технический владелец проекта.", en: "Initiator and technical owner of the project." },
          result: { ru: "Дублирующие заявки сократились в 3 раза, время поиска/создания — в 2 раза.", en: "Duplicate requests dropped 3x; search/creation time dropped 2x." }
        }
      ]
    },
    {
      label: "AI Engineering",
      count: { ru: "1 проект", en: "1 project" },
      projects: [
        {
          main: true,
          title: { ru: "3 AI-ассистента для первой линии поддержки SAP", en: "3 AI assistants for SAP first-line support" },
          teaser: { ru: "Рост пропускной способности обработки заявок и SLA групп поддержки", en: "Increased ticket throughput and support team SLA" },
          task: { ru: "Ограниченная пропускная способность консультантов первой линии поддержки SAP приводила к росту очереди заявок и просадке SLA.", en: "Limited throughput of first-line SAP support consultants caused ticket queues to grow and SLA to slip." },
          solution: { ru: "Настроил 3 AI-ассистентов для консультантов первой линии поддержки, взявших на себя типовые обращения.", en: "Set up 3 AI assistants for first-line support consultants to handle routine requests." },
          role: { ru: "Инициатор и владелец решения.", en: "Initiator and owner of the solution." },
          result: { ru: "Повышена пропускная способность обработки заявок и SLA групп поддержки.", en: "Improved ticket-handling throughput and support team SLA." }
        }
      ]
    },
    {
      label: "Enterprise PM",
      count: { ru: "8 проектов", en: "8 projects" },
      projects: [
        {
          main: true,
          title: { ru: "Тиражирование системы проверки документов на 12 предприятий РУСАЛ", en: "Rollout of a document-verification system to 12 RUSAL plants" },
          teaser: { ru: "Синхронизация процессов между заводами и кросс-функциональной командой до 35 человек", en: "Synchronized processes across plants with a cross-functional team of up to 35 people" },
          task: { ru: "Разрозненная проверка входящих первичных документов от поставщиков автотранспортных и ЖД услуг на разных предприятиях.", en: "Incoming primary documents from road- and rail-freight suppliers were checked inconsistently across different plants." },
          solution: { ru: "Разработал и внедрил решение на пилотном участке, затем растиражировал на 12 предприятий; координировал кросс-функциональную команду до 35 человек.", en: "Built and rolled out a solution at a pilot site, then scaled it to 12 plants; coordinated a cross-functional team of up to 35 people." },
          role: { ru: "Руководитель проекта полного цикла.", en: "Full-cycle project lead." },
          result: { ru: "Единый стандарт проверки документов на 12 площадках, снижение ручных ошибок.", en: "A single document-verification standard across 12 sites, fewer manual errors." }
        },
        {
          main: false,
          title: { ru: "Оптимизационная модель распределения сырья", en: "Raw material distribution optimization model" },
          teaser: { ru: "Расширенная модель факторов маршрута и объёма поставки → ~$500K/год экономии", en: "Extended routing/volume factor model → ~$500K/year savings" },
          task: { ru: "Ручное распределение углеродсодержащего сырья по заводам не учитывало полный набор факторов маршрутизации и приводило к неоптимальным затратам на закупку.", en: "Manual distribution of carbon-containing raw materials across plants didn't account for the full set of routing factors, leading to suboptimal procurement costs." },
          solution: { ru: "Разработал математическую модель планирования распределения сырья с расширенным перечнем факторов выбора объёма и маршрута поставки; модель выявляет точки повышения эффективности снабжения предприятий. Интегрирована с системой планирования производства и SAP ERP.", en: "Built a mathematical planning model for raw material distribution with an extended set of volume- and route-selection factors; the model surfaces opportunities to improve plant supply efficiency. Integrated with the production planning system and SAP ERP." },
          role: { ru: "Владелец модели и процесса внедрения.", en: "Owner of the model and the rollout process." },
          result: { ru: "~$500 000/год экономии на сырьевой корзине по сравнению с ручным распределением.", en: "~$500,000/year saved on the raw material basket compared to manual distribution." }
        },
        {
          main: false,
          title: { ru: "Электронные перевозочные документы в SAP ERP (140-ФЗ)", en: "Electronic transport documents in SAP ERP (Federal Law 140-FZ)" },
          teaser: { ru: "Обеспечение требований № 140-ФЗ — команда 6 человек + вендор", en: "Compliance with Federal Law No. 140-FZ — team of 6 in-house developers + vendor" },
          task: { ru: "Вступление в силу № 140-ФЗ (7 июня 2025) потребовало перевода перевозочных документов в электронный вид к установленному сроку.", en: "Federal Law No. 140-FZ (effective June 7, 2025) required transport documents to move to electronic form by the deadline." },
          solution: { ru: "Провёл анализ процессов и внедрил функционал управления электронными перевозочными документами в SAP ERP; руководил командой из 6 внутренних разработчиков и вендора.", en: "Analyzed processes and implemented electronic transport document management functionality in SAP ERP; led a team of 6 in-house developers plus a vendor." },
          role: { ru: "Руководитель проекта.", en: "Project lead." },
          result: { ru: "Требования 140-ФЗ обеспечены к сроку (процессный эффект).", en: "140-FZ requirements met by the deadline (process-level effect, no quantified metric)." }
        },
        {
          main: false,
          title: { ru: "Интерактивная BI-отчётность контейнерных перевозок", en: "Interactive BI reporting for container logistics" },
          teaser: { ru: "Оборачиваемость контейнерного парка и сквозная видимость → -30% к длительности контроля простоев", en: "Container fleet turnover and end-to-end visibility → -30% control duration" },
          task: { ru: "Департамент контейнерных перевозок не имел оперативной сквозной видимости по парку — расчёт оборачиваемости и статусы в пути велись вручную.", en: "The container logistics department had no real-time end-to-end fleet visibility — turnover and in-transit status were tracked manually." },
          solution: { ru: "Разработал систему интерактивной отчётности на Superset: расчёт оборачиваемости контейнерного парка, данные о контейнерах в пути, пунктах погрузки/выгрузки, объёмах в разрезе предприятий, портов, стран назначения и схем перевозки.", en: "Built an interactive Superset reporting system: container fleet turnover, in-transit data, loading/unloading points, and volumes by plant, port, destination country and route." },
          role: { ru: "Разработчик решения, владелец продукта.", en: "Solution developer, product owner." },
          result: { ru: "Сократил длительность контроля простоев на 30%.", en: "Cut downtime-control duration by 30%." }
        },
        {
          main: false,
          title: { ru: "Интеграция SAP-СЭД по транспортным услугам (12 предприятий)", en: "SAP-EDMS integration for transport services (12 plants)" },
          teaser: { ru: "Автоматизированный контроль корректности выставления затрат за транспортные услуги", en: "Automated verification of transport-service billing accuracy" },
          task: { ru: "Ручная проверка актов за транспортные услуги допускала повторную приёмку услуги и приёмку фактически неоказанных услуг.", en: "Manual verification of transport-service certificates allowed duplicate acceptance and acceptance of services never actually rendered." },
          solution: { ru: "Разработал интеграцию SAP-СЭД по транспортным услугам с автоматизированной проверкой каждого поступившего акта на факт оказания услуги в привязке к поставке; растиражировал решение на 12 предприятий группы.", en: "Built a SAP-EDMS integration for transport services with automated verification of every incoming certificate against actual service delivery tied to a shipment; rolled out to 12 group plants." },
          role: { ru: "Руководитель проекта / аналитик.", en: "Project lead / analyst." },
          result: { ru: "Исключена повторная приёмка услуги и приёмка неоказанных услуг, контроль корректности затрат полностью автоматизирован.", en: "Eliminated duplicate acceptance and acceptance of undelivered services; billing accuracy control fully automated." }
        },
        {
          main: false,
          title: { ru: "Бизнес-планирование транспортировки сырья (SAP BI)", en: "Raw material transport business planning (SAP BI)" },
          teaser: { ru: "Прозрачная стоимость перевозки на каждом плече, расчёт до тонны груза", en: "Transparent per-leg shipping cost, down to cost per ton" },
          task: { ru: "Данные о стоимости перевозки сырья по плечам маршрута и совокупных транспортных затратах были непрозрачны и несогласованы между системами.", en: "Data on shipping cost per route leg and total transport costs was opaque and inconsistent across systems." },
          solution: { ru: "Разработал процесс бизнес-планирования транспортировки сырья на базе SAP BI: отражение стоимости перевозки на каждом плече, агрегация транспортных затрат (тариф, пошлина), формирование бизнес-плана с расчётом стоимости на тонну груза. Руководил командой разработки из 4 человек.", en: "Built a raw-material transport business-planning process on SAP BI: cost per route leg, aggregated transport costs (tariff, duty), and a business plan with cost-per-ton calculation. Led a development team of 4." },
          role: { ru: "Руководитель проекта, владелец продукта.", en: "Project lead, product owner." },
          result: { ru: "Повышена точность планирования транспортных услуг, исключена неконсистентность данных, движение данных стало прозрачным.", en: "Improved transport-planning accuracy, eliminated data inconsistency, made data flow transparent." }
        },
        {
          main: false,
          title: { ru: "Контроль разрешительной документации ФСТЭК при отгрузке", en: "FSTEC export-control permit compliance for shipments" },
          teaser: { ru: "CJM и точки контроля исключили отгрузки без разрешительной документации", en: "CJM and control points eliminated shipments without required permits" },
          task: { ru: "Отгрузка готовой продукции клиентам могла происходить без разрешительной документации ФСТЭК, что создавало риски штрафов и простоев на таможне.", en: "Finished-goods shipments could go out without required FSTEC export-control permits, creating fine and customs-delay risk." },
          solution: { ru: "Разработал CJM процесса и определил точки контроля для своевременного уведомления уполномоченных подразделений о необходимости выпуска документации; перевёл процесс на ручной контроль/блокировку отгрузки в SAP ERP при отсутствии документации.", en: "Built a process CJM and defined control points to notify authorized departments in time about required documentation; moved to manual control/shipment blocking in SAP ERP when documentation was missing." },
          role: { ru: "Руководитель проекта, аналитик, владелец продукта / архитектор решения.", en: "Project lead, analyst, product owner / solution architect." },
          result: { ru: "Отгрузки без разрешительной документации исключены; риски штрафов от госорганов и простоев на таможне устранены.", en: "Shipments without required permits eliminated; fine and customs-delay risk removed." }
        },
        {
          main: false,
          title: { ru: "Контроль комплаенс-рисков при закупке ТМЦ", en: "Procurement compliance risk control" },
          teaser: { ru: "Автоматическая проверка товарной группы на вхождение в санкционный перечень", en: "Automatic check of commodity group against the sanctions list" },
          task: { ru: "Закупки ТМЦ с комплаенс-риском требовали ручной проверки, что либо создавало риск пропуска, либо перегружало комплаенс избыточным согласованием.", en: "Procurement with compliance risk required manual review, either risking missed cases or overloading compliance with excessive approvals." },
          solution: { ru: "Разработал систему автоматического контроля комплаенс-рисков при заключении контрактов на закупку ТМЦ: проверка вхождения товарной группы в санкционный перечень, блокировка процесса закупки при выявлении риска, передача данных между учётными системами.", en: "Built an automated compliance risk control system for procurement contracts: checks the commodity group against the sanctions list, blocks the procurement process if risk is found, and transfers data between accounting systems." },
          role: { ru: "Руководитель проекта, владелец продукта.", en: "Project lead, product owner." },
          result: { ru: "При закупке с комплаенс-риском автоматически уведомляется GCO; закупки с нулевым риском проходят без участия GCO.", en: "Compliance-risk procurement automatically notifies GCO; zero-risk procurement proceeds without GCO involvement." }
        }
      ]
    }
  ],
  principles: [
    { ru: "Довожу AI-идею от vision до продакшна, а не только до презентации", en: "I take AI ideas from vision to production, not just to a demo." },
    { ru: "Эскалирую точечно и с пакетом решения, а не проблемой без контекста", en: "I escalate precisely, with a proposed solution — not just a problem without context." },
    { ru: "Строю коммуникацию со стейкхолдерами под их язык — от топ-менеджмента до разработчиков", en: "I tailor stakeholder communication to their language — from top management to developers." },
    { ru: "Использую LLM ежедневно в работе PM — не как эксперимент, а как рабочий инструмент", en: "I use LLMs daily in PM work — not as an experiment, but as a working tool." }
  ],
  skills: {
    management: {
      title: { ru: "💼 Ключевые управленческие навыки", en: "💼 Key management skills" },
      items: {
        ru: [
          "11+ лет опыта управления проектами, бюджеты 5–40 млн ₽, команды до 35 человек",
          "Классическое управление проектами (PMI) + Agile / Scrum / Kanban",
          "Управление релизами и планирование серверных мощностей",
          "Кросс-функциональные команды: IT, Data Science, веб-разработка, бизнес-стейкхолдеры",
          "JTBD-сессии с заказчиками, обучение и внедрение PM-практик в командах",
          "Продуктовый discovery: CJM, User Story, Value–Effort",
          "Управление стейкхолдерами и ожиданиями, контроль комплаенса и рисков"
        ],
        en: [
          "11+ years of project management experience, budgets $60K–$500K+, teams up to 35 people",
          "Classic project management (PMI) + Agile / Scrum / Kanban",
          "Release management and server capacity planning",
          "Cross-functional teams: IT, Data Science, web development, business stakeholders",
          "JTBD discovery sessions with customers, training and implementing PM practices in teams",
          "Product discovery: CJM, User Story, Value-Effort",
          "Stakeholder and expectations management, compliance and risk control"
        ]
      }
    },
    technical: {
      title: { ru: "👨‍💻 Ключевые технические навыки", en: "👨‍💻 Key technical skills" },
      items: {
        ru: [
          "SAP ERP (LE/MM/SD, SAP XI)",
          "Apache Superset, Power BI, DataLens",
          "Веб-разработка на уровне PM (vibe coding: VS Code + Claude)",
          "Управление задачами и релизами: YouTrack, TFS, Atlassian Confluence, Advanta",
          "Прототипирование: Claude Design, AI/no-code инструменты",
          "A/B-тестирование, продуктовая аналитика (SQL, продуктовые метрики)"
        ],
        en: [
          "SAP ERP (LE/MM/SD, SAP XI)",
          "Apache Superset, Power BI, DataLens",
          "Web development at a PM level (vibe coding: VS Code + Claude)",
          "Task and release management: YouTrack, TFS, Atlassian Confluence, Advanta",
          "Prototyping: Claude Design, AI/no-code tools",
          "A/B testing, product analytics (SQL, product metrics)"
        ]
      }
    }
  },
  contact: {
    title: { ru: "Связаться", en: "Get in touch" },
    desc: { ru: "Открыт к предложениям на позиции Senior PM / AI Product с фокусом на прототипирование и внедрение.", en: "Open to Senior PM / AI Product roles focused on prototyping and delivery." },
    telegram: { ru: "Написать в Telegram", en: "Message on Telegram" },
    vcard: { ru: "Сохранить контакт (vCard)", en: "Save contact (vCard)" }
  },
  footer: { ru: "Андрей Семёнов — Senior IT Project Manager", en: "Andrey Semenov — Senior IT Project Manager" }
};

const CONTACT_INFO = {
  fullName: "Andrey Semenov",
  email: "sema0517@gmail.com",
  phone: "+79636917707",
  telegramUsername: "semen77a"
};

let currentLang = 'ru';

function render() {
  document.documentElement.lang = currentLang;
  document.querySelectorAll('.lang-btn').forEach(b => b.classList.toggle('active', b.dataset.lang === currentLang));

  document.getElementById('hero-title').innerHTML = DATA.hero.title[currentLang];
  document.getElementById('hero-sub').textContent = DATA.hero.sub[currentLang];

  document.getElementById('hero-tags').innerHTML = DATA.hero.tags.map(t => `<span class="tag">${t}</span>`).join('');
  document.getElementById('hero-stats').innerHTML = DATA.hero.stats.map(s =>
    `<div><div class="stat-num">${s.num[currentLang]}</div><div class="stat-label">${s.label[currentLang]}</div></div>`
  ).join('');

  document.getElementById('label-projects').textContent = DATA.labels.projects[currentLang];
  document.getElementById('label-how').textContent = DATA.labels.how[currentLang];
  document.getElementById('label-skills').textContent = DATA.labels.skills[currentLang];

  document.getElementById('categories').innerHTML = DATA.categories.map((cat, ci) => `
    <div class="category" data-cat="${ci}">
      <div class="category-header">
        <div class="category-header-left">
          <span class="category-label">${cat.label}</span>
          <span class="category-count">${cat.count[currentLang]}</span>
        </div>
        <div class="category-chevron">+</div>
      </div>
      <div class="category-body">
        <div class="category-body-inner">
          <div class="cards">
            ${cat.projects.map((p, pi) => `
              <div class="card ${p.main ? 'main' : ''}" data-cat="${ci}" data-idx="${pi}">
                <div class="card-top">
                  <div>
                    ${p.main ? `<div class="main-flag">${DATA.labels.mainFlag[currentLang]}</div>` : ''}
                    <div class="card-title">${p.title[currentLang]}</div>
                    <div class="card-teaser">${p.teaser[currentLang]}</div>
                  </div>
                  <div class="chevron">+</div>
                </div>
                <div class="card-body">
                  <div class="card-row"><div class="label">${currentLang === 'ru' ? 'Задача' : 'Task'}</div><div class="val">${p.task[currentLang]}</div></div>
                  <div class="card-row"><div class="label">${currentLang === 'ru' ? 'Решение' : 'Solution'}</div><div class="val">${p.solution[currentLang]}</div></div>
                  <div class="card-row"><div class="label">${currentLang === 'ru' ? 'Роль' : 'Role'}</div><div class="val">${p.role[currentLang]}</div></div>
                  <div class="card-row"><div class="label">${currentLang === 'ru' ? 'Результат' : 'Result'}</div><div class="val">${p.result[currentLang]}</div></div>
                </div>
              </div>
            `).join('')}
          </div>
        </div>
      </div>
    </div>
  `).join('');

  document.getElementById('principles').innerHTML = DATA.principles.map(pr =>
    `<div class="principle"><span class="mark">—</span> ${pr[currentLang]}</div>`
  ).join('');

  document.getElementById('skills-groups').innerHTML = [DATA.skills.management, DATA.skills.technical].map(g => `
    <div class="skills-group">
      <div class="skills-group-title">${g.title[currentLang]}</div>
      <div class="skills-list">
        ${g.items[currentLang].map((item, i) => `<div class="skills-item ${i === 0 ? 'key' : ''}"><span class="mark">—</span>${item}</div>`).join('')}
      </div>
    </div>
  `).join('');

  document.getElementById('contact-title').textContent = DATA.contact.title[currentLang];
  document.getElementById('contact-desc').textContent = DATA.contact.desc[currentLang];
  const btnTelegram = document.getElementById('btn-telegram');
  btnTelegram.textContent = DATA.contact.telegram[currentLang];
  btnTelegram.href = `https://t.me/${CONTACT_INFO.telegramUsername}`;
  btnTelegram.target = '_blank';
  btnTelegram.rel = 'noopener';
  document.getElementById('btn-vcard').textContent = DATA.contact.vcard[currentLang];
  document.getElementById('footer-text').textContent = DATA.footer[currentLang];

  attachHandlers();
}

function downloadVCard() {
  const vcard = [
    'BEGIN:VCARD',
    'VERSION:3.0',
    `FN:${CONTACT_INFO.fullName}`,
    'N:Semenov;Andrey;;;',
    `EMAIL:${CONTACT_INFO.email}`,
    `TEL;TYPE=CELL:${CONTACT_INFO.phone}`,
    `URL:https://t.me/${CONTACT_INFO.telegramUsername}`,
    'END:VCARD'
  ].join('\r\n');
  const blob = new Blob([vcard], { type: 'text/vcard' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'andrey-semenov.vcf';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
}

function attachHandlers() {
  document.getElementById('btn-vcard').onclick = (e) => {
    e.preventDefault();
    downloadVCard();
  };
  document.querySelectorAll('.category-header').forEach(header => {
    header.addEventListener('click', () => {
      const cat = header.closest('.category');
      cat.classList.toggle('open');
      const chev = header.querySelector('.category-chevron');
      chev.textContent = cat.classList.contains('open') ? '–' : '+';
    });
  });
  document.querySelectorAll('.card').forEach(card => {
    card.addEventListener('click', (e) => {
      e.stopPropagation();
      card.classList.toggle('open');
      const chev = card.querySelector('.chevron');
      chev.textContent = card.classList.contains('open') ? '–' : '+';
    });
  });
  document.querySelectorAll('.lang-btn').forEach(btn => {
    btn.addEventListener('click', () => {
      currentLang = btn.dataset.lang;
      render();
    });
  });
}

render();
