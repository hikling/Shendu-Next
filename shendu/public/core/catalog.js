export const TYPES = {
  daily:{label:'每日复盘',meta:'每日看行动 · 5–8m',position:'看行动',date:'date'},
  weekly:{label:'每周复盘',meta:'找规律 · 30–45m',position:'找规律',date:'week'},
  monthly:{label:'每月复盘',meta:'调系统 · 45–60m',position:'调系统',date:'month'},
  quarterly:{label:'90 天复盘',meta:'校方向 · 60–90m',position:'校方向',date:'date'},
  yearly:{label:'年度复盘',meta:'看人生 · 90–120m',position:'看人生',date:'year'},
  decision:{label:'重大决策',meta:'留依据 · 20–30m',position:'留依据',date:'date'}
};
export const TYPE_ICONS = {daily:'日',weekly:'周',monthly:'月',quarterly:'季',yearly:'年',decision:'决'};
const NAV_ICON_PATHS = {
  daily:'<rect x="4" y="4" width="16" height="16" rx="3"/><path d="M8 9h8M8 13h8M8 17h5"/>',
  weekly:'<rect x="3" y="5" width="18" height="16" rx="2"/><path d="M7 3v4M17 3v4M3 10h18M7 14h4M14 14h3M7 18h4"/>',
  monthly:'<circle cx="12" cy="12" r="9"/><path d="M12 3v9l5 3"/>',
  quarterly:'<path d="M4 4h7v7H4zM13 4h7v7h-7zM4 13h7v7H4zM13 13h7v7h-7z"/>',
  yearly:'<path d="M4 20V4h16v16H4ZM8 8h8M8 12h8M8 16h5"/>',
  decision:'<path d="M12 3 4 7v5c0 5 3.4 8.4 8 9 4.6-.6 8-4 8-9V7l-8-4Z"/><path d="m9 12 2 2 4-4"/>',
  history:'<path d="M3 12a9 9 0 1 0 2.4-6.1M3 4v4h4M12 7v5l3 2"/>',
  actions:'<path d="M4 5h16M4 12h16M4 19h16M7 3v4M7 10v4M7 17v4"/>',
  backup:'<rect x="3" y="5" width="18" height="14" rx="2"/><path d="M3 9h18M10 13h4"/>',
  users:'<circle cx="9" cy="8" r="3"/><path d="M3 19v-1a6 6 0 0 1 12 0v1M16 5a3 3 0 0 1 0 6M17 14a5 5 0 0 1 4 5"/>'
};
export function navIcon(route){return `<span class="${TYPE_ICONS[route]?'nav-type-icon type-'+route:'nav-glyph'}" aria-hidden="true"><svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">${NAV_ICON_PATHS[route]||NAV_ICON_PATHS.daily}</svg></span>`}
export const STATUS = {draft:'草稿',completed:'已完成',verified:'已验证'};
export const PALETTES = {
  '潮汐青':['#176B67','#A86436','#536C9C'],'花间莓':['#A33770','#657637','#71609C'],'蓝色气息':['#466A9B','#A26A42','#7E619A'],
  '琥珀微光':['#956322','#397A76','#A25556'],'薄荷新生':['#397C60','#A35C65','#5C6C9D'],'云上留白':['#535D62','#987447','#5E7890']
};
export const QUOTES = {
  daily:['记下真实发生的事，带着一个小调整走向明天。今天不必交出完美答卷。','先看今天做了什么，再看明天能改什么。让一个具体动作代替一句自责。','进步有时很小：按时吃饭，完成一页，早睡半小时。值得的变化，也值得被记住。','今天的偏差是一条线索。找到它发生的条件，比反复责怪自己更有用。','忙碌结束后，留几分钟给自己。看看哪些投入，真的换来了想要的生活。','把完成的事写具体，把遗憾的事说清楚。明天只需要一个更容易开始的安排。','状态不佳的日子也可以记录。降低一点门槛，把最重要的一小步留下。','留意今天顺利的时刻：什么环境、准备和节奏，值得明天再用一次？','允许计划被现实打断。记清发生了什么，再决定下一步怎样继续。','不用证明今天足够努力。用一件看得见的成果，认识自己真正有效的方法。','把今天的感受放在事实旁边。它们都值得被看见，但不必替彼此下结论。','回看今天，也为明天留一点余地。一个清楚的开始，比很满的计划更好执行。','今天及时休息、求助或停止，也可能是进展。记录选择背后的真实理由。','结束一天前，挑一件想继续的事。让今天留下的经验，成为明天的小帮手。'],
  weekly:['把七天放在一起，看看哪些事情反复发生。规律常常藏在几次相似的经历里。','这一周，哪一种安排让你更容易行动？把它留下，给下周一个可靠的起点。','不必用某一天评价整周。把高低起伏放在一起，再看真正的变化。','回看一周的时间，找出值得继续投入的地方。下周最多选三件重点。','重复的阻碍，值得换一种处理方式。把“再努力一点”改成具体的环境或流程调整。','哪些进展来自计划，哪些来自意外？两种收获都可以成为下一周的线索。','给完成的事留一点位置。及时交付、恢复秩序、说清需要，都是实际的进展。','这周有没有做了很多，却迟迟没有产出？下周试着把一个成果放在学习之前。','回看承诺，也回看容量。重要的事情，需要真实可用的时间来承接。','一周结束时，选一个成功条件和一个主要阻碍。先弄清楚，再做取舍。','不必把下周排满。留出缓冲，才能让真正重要的安排更有机会发生。','哪些事每次开始都很难？先缩小第一步，看看下一周是否更容易持续。','这周谁帮助过你，你又把时间留给了谁？把关系也放进生活的复盘里。','用一条证据决定保留，用一条证据决定改变。带着更清楚的节奏进入下周。'],
  monthly:['把目标和结果放在一起。下个月，只主攻一个最值得改变的瓶颈。','这一个月，哪些变化真实改善了生活？用事实区分忙碌、产出和结果。','如果没有人知道，你还愿意追求这个目标吗？给自己的真实需要一点发言权。','反复加大努力之前，先检查做事的系统。一个更好的安排，可能比更长的工时有效。','选一个可以验证的小实验。写清假设、做法和日期，再让结果帮助你判断。','看见结果，也看见代价。睡眠、关系和恢复，同样属于这个月的账本。','哪些方法有证据支持，哪些只是一直沿用？下个月给有效的方法更多空间。','结果可能比行动来得慢。观察趋势与条件，再决定是坚持、调整还是停止。','本月最值得解决的问题，未必是最显眼的问题。寻找那个牵动其他事情的环节。','把想做的事情排出先后。明确暂时不做什么，也是在保护真正重要的目标。','不要一次改十件事。保留比较的基线，才能知道下个月的变化来自哪里。','有些投入需要减少，有些习惯值得继续。用这个月的证据，重新分配精力。','目标可以重新选择。问问它完成之后，会具体改善你的哪一部分生活。','给下个月定一个可执行的主题。让每天的行动，都能与它产生一点联系。'],
  quarterly:['停下来看看，生活是否真的发生了变化。下一阶段的方向，可以重新选择。','回到阶段开始时的期待。哪些判断仍然成立，哪些已经被现实改写？','把三个月的证据摊开。身体、收入、关系与注意力，分别在往哪里走？','已经投入很多，不代表一定要继续。下一步的价值，要从现在重新判断。','有些阶段适合稳住底盘，有些适合扩大产出。先辨认自己真正需要什么。','结果不如预期时，区分执行、方法和方向。不同的问题，需要不同的调整。','想象下一阶段结束时的一天。你希望哪些日常，已经变得具体而不同？','把成长写成证据：新的能力、稳定的行动、真实的交付。也承认尚未改变的部分。','回看成果，也回看为此放下了什么。下一阶段的安排，需要你愿意承担的代价。','继续、调整、停止，各选一件事。清楚的取舍能为新的阶段腾出空间。','如果方向没有变，方法仍然可以换。为最重要的假设安排一次现实检验。','下一阶段最多三个目标。为每个目标留下基线、行动标准和重新评估的条件。','阶段复盘不要求一次看清人生。只需要让接下来的选择，比上一次更有依据。','把有效的方法带走，把不合适的目标放下。用真实的生活变化检验下一段路。'],
  yearly:['用几件重要的事，留下这一年的坐标。那些改变了你的经历，值得慢慢回看。','这一年，什么真正变得不同？从身体、工作、关系和体验中寻找具体的答案。','回顾年初的期待，也接纳计划外的收获。人生不只发生在待办清单里。','哪些人、事和选择值得感谢？把想珍惜的关系，放进下一年的时间安排。','不只盘点得到的，也看放下的。一次及时的告别，可能为生活留下了空间。','回看重要决定时，记得当时能知道的信息。把判断质量与后来的运气分开。','哪种生活让你愿意持续投入？用这一年的亲身经历，修正对自己的认识。','成就之外，还有恢复、陪伴与体验。让年终复盘装得下完整的生活。','这一年反复出现的提醒是什么？如果它很重要，明年准备怎样真正回应？','有些目标来自过去的自己。给现在的需要留位置，允许明年的追求发生变化。','看看时间花在了哪里，价值又体现在哪里。下一年，把二者慢慢靠近。','未来一年想把时间留给谁、留给什么？先选主题，再选择少数值得投入的目标。','不要把一年的变化压成一个分数。几条清楚的证据，比一句成功或失败更有用。','给这一年一个诚实的结尾。把下一年的第一步，落在接下来九十天的日常里。'],
  decision:['先留下当时的依据，再等待结果。未来的自己，需要一份没有改写过的记录。','写清你正在决定什么。问题越具体，备选方案和取舍就越容易比较。','除了倾向的选项，也看看维持现状。每一种选择，都有自己的收益和代价。','区分事实、推测与愿望。它们都可能影响判断，但需要被清楚地标出来。','寻找一条反对自己倾向的证据。让决定经得住追问，比尽快说服自己更重要。','如果决定失败，最可能因为什么？提前为可以承受的风险准备退路。','问问这个决定是否可逆。可逆的小尝试，与难以撤回的承诺，值得不同的准备。','给预期写上时间与概率。承认不确定，才能在结果出现后认真校准判断。','哪些新信息会让你改变主意？在行动之前，把重新评估的条件写下来。','机会成本也是成本。选择一条路时，看看自己暂时放下了哪些可能。','结果好，不一定说明过程好。把好运和方法分开，避免复制一次冒险的侥幸。','结果差，也不等于当时的判断毫无道理。回到原先的信息与可选的方案。','决定做出后，第一步是什么？把判断接到行动，再给行动安排一个回看的时间。','一段经历可以形成假设，不必马上成为人生原则。写清这条经验适用的条件。']
};
export const QUESTIONS = {
  daily:[['today','今天，哪件事最值得记下来？',1],['cause','是什么让它发生？',0]],
  weekly:[['plan','这周原本要完成什么？实际呢？',1],['progress','本周最有价值的三个进展',1],['patterns','反复出现的成功条件与阻碍',0],['keepStop','下周保留一件事，停止一件事',0],['nextThree','下周最重要的三件事',1]],
  monthly:[['goalResult','月初的目标与现在的结果',1],['change','哪个变化真正改善了生活？',1],['want','这些目标，仍然是我想要的吗？',0],['bottleneck','下个月只主攻哪一个瓶颈？',1],['experiment','一个小实验：假设、做法、成功标准',1]],
  quarterly:[['hope','这一阶段原本希望生活发生什么变化？',1],['evidence','90 天后，哪些变化有证据？',1],['worth','目标值得继续吗？付出的代价能接受吗？',0],['choices','继续、调整、停止：分别是什么？',1],['nextGoals','下一阶段最多三个目标',1]],
  yearly:[['coordinates','用五件事，留下这一年的坐标',1],['expectations','年初的期待，哪些成为了现实？',1],['areas','人生几个重要领域，分别发生了什么？',0],['decisions','最重要的决定，现在怎么看？',0],['keepRelease','我想保留什么，又该放下什么？',1],['nextYear','明年的主题与最多三个目标',1]],
  decision:[['decision','我正在做什么决定？为什么现在要做？',1],['options','有哪些选项？包括维持现状',1],['facts','我现在掌握哪些事实？哪些仍未知？',1],['expectation','预期结果、概率与出现的时间',1],['failure','如果决定失败，最可能因为什么？',1],['choice','最终选择与理由',1],['firstStep','决定后的第一步行动',1]]
};

export const DEFAULT_REVIEW_TEMPLATES = Object.fromEntries(Object.entries(QUESTIONS).map(([type,questions])=>[type,{
  ...Object.fromEntries(questions.map(([key,label])=>[key,label])),
  actionTitle:type==='daily'?'明天最重要的一件事':'接下来，具体要做什么？',
  obstacleTitle:'如果遇到阻碍，那么我就……',
  verifyDateTitle:type==='daily'?'预期何时验证？':'预期什么时候验证？',
  ...(type==='decision'?{recordTitle:'决定的名字'}:{})
}]));
export const DEFAULT_ACTION_TEMPLATE = {
  pageTitle:'行动验证',pageIntro:'预期验证日期和实际提交时间会同时保留，提前、按期或延后完成一眼可见。',historyButton:'查看全部历史',
  pendingTitle:'等待验证',pendingIntro:'按预期日期排列，实际验证时间将在提交时自动记录。',pendingEmptyTitle:'没有等待验证的行动',pendingEmptyText:'完成一份复盘后，约定的行动会出现在这里。',
  verifiedTitle:'已经验证',verifiedIntro:'保留预期与实际时间，便于以后判断是否提前完成。',verifiedEmptyTitle:'还没有已验证行动',verifiedEmptyText:'提交第一条验证结果后会显示在这里。',
  waitingStatus:'等待验证',overdueStatus:'已过约定日期',todayStatus:'今天验证',verifiedStatus:'已验证',countUnit:'项',earlyTimingText:'提前 {days} 天完成',lateTimingText:'晚于预期 {days} 天完成',onTimeText:'按预期日期完成',
  expectedDateLabel:'预期验证日期',actualDateLabel:'实际验证时间',expectedMissingText:'未设置',actualMissingText:'尚未验证',
  agreementEyebrow:'行动约定',agreementTitle:'复盘时锁定的计划',agreementNote:'原始记录',originalActionTitle:'原定行动',planTitle:'如果—那么预案',
  reviewEyebrow:'验证回看',reviewTitle:'实际结果与后续调整',reviewNote:'已永久锁定',resultTitle:'实际结果',adjustmentTitle:'保留或调整',
  ifLabel:'如果',thenLabel:'那么',responseLabel:'应对',missingActionText:'未填写行动',missingPlanText:'未填写预案',missingResponseText:'未填写应对动作',missingResultText:'未填写',
  submitActionButton:'提交验证结果',decisionActionButton:'进入结果后回看',viewRecordButton:'查看原复盘与验证结果',
  modalTitle:'提交行动验证',decisionModalTitle:'结果后回看',modalIntro:'提交后，验证结果与实际提交时间都会永久锁定。',originalActionLabel:'原定行动',actualAutoText:'提交时自动记录（北京时间）',
  resultPrompt:'实际发生了什么？与预期差在哪里？',outcomePrompt:'结果如何？',processPrompt:'当时的决策过程？',adjustmentPrompt:'我会保留、修正什么判断？',cancelButton:'取消',submitButton:'提交并锁定结果',
  decisionOutcomeLabel:'结果',decisionProcessLabel:'过程',lockedTitle:'行动验证结果',lockedIntro:'结果、预期日期与实际提交时间均已锁定。',
  lockedPendingTitle:'结果还没有验证',lockedPendingIntro:'无需等到当天；提前完成也可以直接提交，系统会记录实际验证时间。',lockedPendingButton:'填写行动验证'
};

export function mergeReviewTemplate(type,value){return{...DEFAULT_REVIEW_TEMPLATES[type],...(value&&typeof value==='object'?value:{})}}
export function mergeActionTemplate(value){return{...DEFAULT_ACTION_TEMPLATE,...(value&&typeof value==='object'?value:{})}}
