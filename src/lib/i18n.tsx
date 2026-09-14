import { createContext, useCallback, useContext, useEffect, useState, type ReactNode } from "react";

export type Locale = "en" | "pt";

export type Translations = typeof translations.en;

const translations = {
  en: {
    nav: {
      today: "Today",
      approvals: "Approvals",
      activity: "Activity",
      connections: "Connections",
    },
    sidebar: {
      workingQuietly: "Working quietly",
      handledToday: (n: number) => `Vigia handled 41 things today and asked you about ${n}.`,
    },
    home: {
      eyebrow: "Wednesday, 26 August",
      title: "Good evening, Ana.",
      description: "Vigia handled 41 things today without needing you. Three decisions are waiting — they're the only ones that genuinely need a human.",
      handledQuietly: "Handled quietly",
      needsYou: "Needs you",
      timeSaved: "Time saved",
      waitingOnYou: "Waiting on you",
      seeAll: "See all",
      allClear: "You're all clear",
      allClearHint: "Vigia will keep working and only interrupt when it matters.",
    },
    approvals: {
      eyebrow: "Approvals",
      title: "Nothing happens without you.",
      description: "Vigia only asks when an action touches other people, money, or something it cannot undo. Everything else it simply handles.",
      allPending: "All pending",
      highRiskOnly: "High risk only",
      inboxZero: "Inbox zero, decision zero",
      inboxZeroHint: "Nothing needs your judgement right now.",
    },
    activity: {
      eyebrow: "Activity",
      title: "Everything Vigia has done.",
      description: "A plain record you can audit at any time — including the things it deliberately left alone.",
      handledOnItsOwn: "Handled on its own",
      youApproved: "You approved",
      youDeclined: "You declined",
      watching: "Watching",
    },
    connections: {
      eyebrow: "Connections",
      title: "You decide how far it goes.",
      description: "Every service has its own leash. Tighten it whenever you like — Vigia never widens its own access.",
      off: "Off",
      askEverything: "Ask me everything",
      askSensitive: "Ask on anything sensitive",
      actThenTell: "Act, then tell me",
      updated: (name: string) => `${name} updated`,
    },
    approvalCard: {
      expires: "expires in",
      hours: "h",
      confident: "confident",
      whatVigiaWillSend: "What Vigia will send",
      edit: "Edit",
      done: "Done",
      whySuggests: "Why Vigia suggests this",
      approve: "Approve",
      approved: "Approved",
      decline: "Decline",
      approvedToast: "Approved — Vigia is on it",
      declinedToast: "Declined — Vigia will learn from this",
    },
    risk: {
      low: "Low risk",
      medium: "Medium risk",
      high: "High risk",
    },
    channel: {
      Gmail: "Gmail",
      Calendar: "Calendar",
      Slack: "Slack",
      Banking: "Banking",
      Contacts: "Contacts",
    },
    error: {
      notFound: "Page not found",
      notFoundHint: "The page you're looking for doesn't exist or has been moved.",
      goHome: "Go home",
      didntLoad: "This page didn't load",
      didntLoadHint: "Something went wrong on our end. You can try refreshing or head back home.",
      tryAgain: "Try again",
    },
    lang: {
      en: "English",
      pt: "Portugues",
    },
    data: {
      approvals: [
        {
          title: "Reschedule the Thursday design review",
          intent: "Send a rescheduling email and move the calendar event",
          recipient: "Maya Osei, Devan Roy, +3",
          reasoning: [
            "Maya emailed at 08:12 asking to move the review — she is travelling Thursday morning.",
            "Friday 10:00 is the only slot free for all five attendees this week.",
            "The review blocks the handoff you flagged as important on Monday.",
          ],
          draft: "Hi all — Maya's flight lands Thursday midday, so I'm moving the design review to Friday 10:00\u201311:00. Same room, same agenda. Shout if that clashes and I'll find another slot.",
          sideEffects: ["Move calendar event to Fri 10:00", "Notify 5 attendees", "Keep the original agenda doc attached"],
        },
        {
          title: "Decline the vendor demo request",
          intent: "Reply declining politely and archive the thread",
          recipient: "sales@northwind.io",
          reasoning: [
            "Fourth outreach from this vendor in six weeks.",
            "You declined the two previous ones with similar wording.",
            "No open procurement need matches their category.",
          ],
          draft: "Thanks for following up. We're not evaluating new tooling in this category right now \u2014 I'll reach out directly if that changes.",
          sideEffects: ["Send reply", "Archive thread", "Mute future follow-ups for 90 days"],
        },
        {
          title: "Pay the overdue studio invoice",
          intent: "Authorise a \u00a31,240 transfer to Fieldwork Studio",
          recipient: "Fieldwork Studio Ltd",
          reasoning: [
            "Invoice INV-2291 is 4 days past its net-30 terms.",
            "Amount and account match the last three payments to this supplier.",
            "You approved an identical payment in June without changes.",
          ],
          draft: "Transfer \u00a31,240.00 to Fieldwork Studio Ltd \u2014 reference INV-2291. Funds settle same day from the Operations account.",
          sideEffects: ["Move \u00a31,240.00", "File receipt in Finance/2026", "Mark invoice as paid"],
        },
      ],
      activity: [
        { title: "Archived 34 newsletters", detail: "Kept the two you have opened more than twice this month.", day: "Today" as const },
        { title: "Held Friday 15:00 for deep work", detail: "Declined a tentative sync that overlapped your focus block.", day: "Today" as const },
        { title: "Replied to Priya about the venue deposit", detail: "You approved the draft with one edit before it went out.", day: "Today" as const },
        { title: "Did not cancel the gym membership", detail: "You declined \u2014 Vigia will stop suggesting this.", day: "Yesterday" as const },
        { title: "Noticed a duplicate charge from Loop Coffee", detail: "Watching for a refund before raising a dispute.", day: "Yesterday" as const },
        { title: "Merged 3 duplicate contacts", detail: "Same person across Gmail, Slack and your phone book.", day: "Earlier" as const },
      ],
      connections: [
        { name: "Gmail", description: "Reads threads, drafts replies, archives noise.", scope: "Read + send" },
        { name: "Calendar", description: "Protects focus time and negotiates meetings.", scope: "Read + write" },
        { name: "Banking", description: "Watches spend, flags anomalies, pays known suppliers.", scope: "Read + approved payments" },
        { name: "Slack", description: "Summarises channels and answers routine pings.", scope: "Read" },
        { name: "Contacts", description: "Keeps people, companies and history in one place.", scope: "Read + write" },
        { name: "Drive", description: "Files documents and keeps receipts where you expect them.", scope: "Not connected" },
      ],
    },
  },
  pt: {
    nav: {
      today: "Hoje",
      approvals: "Aprovacoes",
      activity: "Atividade",
      connections: "Conexoes",
    },
    sidebar: {
      workingQuietly: "Trabalhando silenciosamente",
      handledToday: (n: number) => `Vigia cuidou de 41 coisas hoje e perguntou a voce sobre ${n}.`,
    },
    home: {
      eyebrow: "Quarta-feira, 26 de agosto",
      title: "Boa noite, Ana.",
      description: "Vigia cuidou de 41 coisas hoje sem precisar de voce. Tres decisoes estao esperando \u2014 sao as unicas que realmente precisam de um ser humano.",
      handledQuietly: "Cuidado silenciosamente",
      needsYou: "Precisa de voce",
      timeSaved: "Tempo economizado",
      waitingOnYou: "Esperando por voce",
      seeAll: "Ver tudo",
      allClear: "Tudo pronto",
      allClearHint: "Vigia continuara trabalhando e so interrompera quando importar.",
    },
    approvals: {
      eyebrow: "Aprovacoes",
      title: "Nada acontece sem voce.",
      description: "Vigia so pergunta quando uma acao afeta outras pessoas, dinheiro ou algo que nao pode desfazer. Todo o resto, ele simplesmente faz.",
      allPending: "Todas pendentes",
      highRiskOnly: "Alto risco apenas",
      inboxZero: "Caixa zero, decisao zero",
      inboxZeroHint: "Nada precisa do seu julgamento agora.",
    },
    activity: {
      eyebrow: "Atividade",
      title: "Tudo que o Vigia fez.",
      description: "Um registro simples que voce pode auditar a qualquer momento \u2014 incluindo as coisas que ele deliberadamente deixou de lado.",
      handledOnItsOwn: "Fez sozinho",
      youApproved: "Voce aprovou",
      youDeclined: "Voce recusou",
      watching: "Observando",
    },
    connections: {
      eyebrow: "Conexoes",
      title: "Voce decide ate onde vai.",
      description: "Cada servico tem sua propria coleira. Aperte quando quiser \u2014 Vigia nunca amplia seu proprio acesso.",
      off: "Desligado",
      askEverything: "Perguntar tudo",
      askSensitive: "Perguntar sobre coisas sensiveis",
      actThenTell: "Agir e depois me contar",
      updated: (name: string) => `${name} atualizado`,
    },
    approvalCard: {
      expires: "expira em",
      hours: "h",
      confident: "confiante",
      whatVigiaWillSend: "O que o Vigia vai enviar",
      edit: "Editar",
      done: "Pronto",
      whySuggests: "Por que Vigia sugere isso",
      approve: "Aprovar",
      approved: "Aprovado",
      decline: "Recusar",
      approvedToast: "Aprovado \u2014 Vigia esta cuidando",
      declinedToast: "Recusado \u2014 Vigia vai aprender com isso",
    },
    risk: {
      low: "Baixo risco",
      medium: "Risco medio",
      high: "Alto risco",
    },
    channel: {
      Gmail: "Gmail",
      Calendar: "Calendario",
      Slack: "Slack",
      Banking: "Banco",
      Contacts: "Contatos",
    },
    error: {
      notFound: "Pagina nao encontrada",
      notFoundHint: "A pagina que voce procura nao existe ou foi movida.",
      goHome: "Ir para home",
      didntLoad: "Esta pagina nao carregou",
      didntLoadHint: "Algo deu errado do nosso lado. Voce pode tentar atualizar ou voltar para a pagina inicial.",
      tryAgain: "Tentar novamente",
    },
    lang: {
      en: "Ingles",
      pt: "Portugues",
    },
    data: {
      approvals: [
        {
          title: "Reagendar a revisao de design de quinta",
          intent: "Enviar email de reagendamento e mover o evento no calendario",
          recipient: "Maya Osei, Devan Roy, +3",
          reasoning: [
            "Maya mandou email as 08:12 pedindo para mover a revisao \u2014 ela esta viajando na Quinta de manha.",
            "Sexta 10:00 \u00e9 o unico horario livre para os cinco participantes esta semana.",
            "A revisao bloqueia a entrega que voce sinalizou como importante na segunda.",
          ],
          draft: "Ola pessoal \u2014 o voo da Maya pousa Quinta ao meio-dia, entao estou movendo a revisao de design para Sexta 10:00\u201311:00. Mesma sala, mesmo agenda. Me avise se conflitar e eu encontro outro horario.",
          sideEffects: ["Mover evento para Sex 10:00", "Notificar 5 participantes", "Manter o documento de agenda original"],
        },
        {
          title: "Recusar a solicitacao de demo do fornecedor",
          intent: "Responder recusando educadamente e arquivar o thread",
          recipient: "sales@northwind.io",
          reasoning: [
            "Quarto contato deste fornecedor em seis semanas.",
            "Voce recusou os dois anteriores com redacao semelhante.",
            "Nenhuma necessidade de compra aberta corresponde a categoria deles.",
          ],
          draft: "Obrigado por insistir. Nao estamos avaliando novas ferramentas nessa categoria agora \u2014 entro em contato diretamente se isso mudar.",
          sideEffects: ["Enviar resposta", "Arquivar thread", "Silenciar follow-ups por 90 dias"],
        },
        {
          title: "Pagar a fatura atrasada do estudio",
          intent: "Autorizar transferencia de R$7.440 para Fieldwork Studio",
          recipient: "Fieldwork Studio Ltd",
          reasoning: [
            "Fatura INV-2291 esta 4 dias alem do prazo net-30.",
            "Valor e conta conferem com os tres ultimos pagamentos a este fornecedor.",
            "Voce aprovou um pagamento identico em junho sem alteracoes.",
          ],
          draft: "Transferir R$7.440,00 para Fieldwork Studio Ltd \u2014 referencia INV-2291. Fundos compensam no mesmo dia da conta Operacoes.",
          sideEffects: ["Mover R$7.440,00", "Arquivar recibo em Financeiro/2026", "Marcar fatura como paga"],
        },
      ],
      activity: [
        { title: "Arquivou 34 newsletters", detail: "Manteve as duas que voce abriu mais de duas vezes este mes.", day: "Today" as const },
        { title: "Mantinha Sexta 15:00 para trabalho profundo", detail: "Recusou um sync tentative que sobrepos seu bloco de foco.", day: "Today" as const },
        { title: "Respondeu a Priya sobre o deposito do venue", detail: "Voce aprovou o rascunho com uma edicao antes de enviar.", day: "Today" as const },
        { title: "Nao cancelou a academia", detail: "Voce recusou \u2014 Vigia vai parar de sugerir isso.", day: "Yesterday" as const },
        { title: "Notou uma cobranca duplicada do Loop Coffee", detail: "Observando antes de abrir uma disputa.", day: "Yesterday" as const },
        { title: "Mesclou 3 contas duplicadas", detail: "Mesma pessoa no Gmail, Slack e sua agenda telefonica.", day: "Earlier" as const },
      ],
      connections: [
        { name: "Gmail", description: "Le threads, redige respostas, arquiva ruido.", scope: "Leitura + envio" },
        { name: "Calendario", description: "Protege tempo de foco e negocia reunioes.", scope: "Leitura + escrita" },
        { name: "Banco", description: "Monitora gastos, sinaliza anomalias, paga fornecedores conhecidos.", scope: "Leitura + pagamentos aprovados" },
        { name: "Slack", description: "Resume canais e responde pings rotineiros.", scope: "Leitura" },
        { name: "Contatos", description: "Mantem pessoas, empresas e historico em um so lugar.", scope: "Leitura + escrita" },
        { name: "Drive", description: "Arquiva documentos e guarda comprovantes onde voce espera.", scope: "Nao conectado" },
      ],
    },
  },
} as const;

type TranslationKeys = typeof translations.en;

function getTranslation(locale: Locale): TranslationKeys {
  return translations[locale];
}

const LanguageContext = createContext<{
  locale: Locale;
  setLocale: (l: Locale) => void;
  t: TranslationKeys;
}>({ locale: "en", setLocale: () => {}, t: translations.en });

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [locale, setLocaleState] = useState<Locale>("en");

  useEffect(() => {
    const stored = localStorage.getItem("vigia-locale") as Locale | null;
    if (stored === "en" || stored === "pt") {
      setLocaleState(stored);
    }
  }, []);

  const setLocale = useCallback((l: Locale) => {
    setLocaleState(l);
    localStorage.setItem("vigia-locale", l);
    document.documentElement.lang = l === "pt" ? "pt" : "en";
  }, []);

  const t = getTranslation(locale);

  return (
    <LanguageContext.Provider value={{ locale, setLocale, t }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}
