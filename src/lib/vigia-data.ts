export type Risk = "low" | "medium" | "high";

export type Approval = {
  id: string;
  title: string;
  intent: string;
  channel: "Gmail" | "Calendar" | "Slack" | "Banking" | "Contacts";
  recipient: string;
  risk: Risk;
  confidence: number;
  createdAt: string;
  expiresInMinutes: number;
  reasoning: string[];
  draft: string;
  sideEffects: string[];
};

export type ActivityItem = {
  id: string;
  time: string;
  day: "Today" | "Yesterday" | "Earlier";
  title: string;
  detail: string;
  channel: Approval["channel"];
  outcome: "autonomous" | "approved" | "declined" | "observed";
};

export type Connection = {
  id: string;
  name: string;
  description: string;
  status: "connected" | "syncing" | "disconnected";
  scope: string;
  lastSync: string;
  autonomy: number;
};

export const approvals: Approval[] = [
  {
    id: "apr_1",
    title: "Reschedule the Thursday design review",
    intent: "Send a rescheduling email and move the calendar event",
    channel: "Calendar",
    recipient: "Maya Osei, Devan Roy, +3",
    risk: "medium",
    confidence: 0.94,
    createdAt: "6 min ago",
    expiresInMinutes: 54,
    reasoning: [
      "Maya emailed at 08:12 asking to move the review — she is travelling Thursday morning.",
      "Friday 10:00 is the only slot free for all five attendees this week.",
      "The review blocks the handoff you flagged as important on Monday.",
    ],
    draft:
      "Hi all — Maya's flight lands Thursday midday, so I'm moving the design review to Friday 10:00–11:00. Same room, same agenda. Shout if that clashes and I'll find another slot.",
    sideEffects: [
      "Move calendar event to Fri 10:00",
      "Notify 5 attendees",
      "Keep the original agenda doc attached",
    ],
  },
  {
    id: "apr_2",
    title: "Decline the vendor demo request",
    intent: "Reply declining politely and archive the thread",
    channel: "Gmail",
    recipient: "sales@northwind.io",
    risk: "low",
    confidence: 0.98,
    createdAt: "22 min ago",
    expiresInMinutes: 180,
    reasoning: [
      "Fourth outreach from this vendor in six weeks.",
      "You declined the two previous ones with similar wording.",
      "No open procurement need matches their category.",
    ],
    draft:
      "Thanks for following up. We're not evaluating new tooling in this category right now — I'll reach out directly if that changes.",
    sideEffects: ["Send reply", "Archive thread", "Mute future follow-ups for 90 days"],
  },
  {
    id: "apr_3",
    title: "Pay the overdue studio invoice",
    intent: "Authorise a £1,240 transfer to Fieldwork Studio",
    channel: "Banking",
    recipient: "Fieldwork Studio Ltd",
    risk: "high",
    confidence: 0.86,
    createdAt: "1 hr ago",
    expiresInMinutes: 300,
    reasoning: [
      "Invoice INV-2291 is 4 days past its net-30 terms.",
      "Amount and account match the last three payments to this supplier.",
      "You approved an identical payment in June without changes.",
    ],
    draft:
      "Transfer £1,240.00 to Fieldwork Studio Ltd — reference INV-2291. Funds settle same day from the Operations account.",
    sideEffects: ["Move £1,240.00", "File receipt in Finance/2026", "Mark invoice as paid"],
  },
];

export const activity: ActivityItem[] = [
  {
    id: "a1",
    time: "09:41",
    day: "Today",
    title: "Archived 34 newsletters",
    detail: "Kept the two you have opened more than twice this month.",
    channel: "Gmail",
    outcome: "autonomous",
  },
  {
    id: "a2",
    time: "09:04",
    day: "Today",
    title: "Held Friday 15:00 for deep work",
    detail: "Declined a tentative sync that overlapped your focus block.",
    channel: "Calendar",
    outcome: "autonomous",
  },
  {
    id: "a3",
    time: "08:26",
    day: "Today",
    title: "Replied to Priya about the venue deposit",
    detail: "You approved the draft with one edit before it went out.",
    channel: "Gmail",
    outcome: "approved",
  },
  {
    id: "a4",
    time: "18:52",
    day: "Yesterday",
    title: "Did not cancel the gym membership",
    detail: "You declined — Vigia will stop suggesting this.",
    channel: "Banking",
    outcome: "declined",
  },
  {
    id: "a5",
    time: "16:10",
    day: "Yesterday",
    title: "Noticed a duplicate charge from Loop Coffee",
    detail: "Watching for a refund before raising a dispute.",
    channel: "Banking",
    outcome: "observed",
  },
  {
    id: "a6",
    time: "11:37",
    day: "Earlier",
    title: "Merged 3 duplicate contacts",
    detail: "Same person across Gmail, Slack and your phone book.",
    channel: "Contacts",
    outcome: "autonomous",
  },
];

export const connections: Connection[] = [
  {
    id: "gmail",
    name: "Gmail",
    description: "Reads threads, drafts replies, archives noise.",
    status: "connected",
    scope: "Read + send",
    lastSync: "2 min ago",
    autonomy: 3,
  },
  {
    id: "calendar",
    name: "Calendar",
    description: "Protects focus time and negotiates meetings.",
    status: "connected",
    scope: "Read + write",
    lastSync: "5 min ago",
    autonomy: 3,
  },
  {
    id: "banking",
    name: "Banking",
    description: "Watches spend, flags anomalies, pays known suppliers.",
    status: "connected",
    scope: "Read + approved payments",
    lastSync: "31 min ago",
    autonomy: 1,
  },
  {
    id: "slack",
    name: "Slack",
    description: "Summarises channels and answers routine pings.",
    status: "syncing",
    scope: "Read",
    lastSync: "syncing now",
    autonomy: 2,
  },
  {
    id: "contacts",
    name: "Contacts",
    description: "Keeps people, companies and history in one place.",
    status: "connected",
    scope: "Read + write",
    lastSync: "1 hr ago",
    autonomy: 2,
  },
  {
    id: "drive",
    name: "Drive",
    description: "Files documents and keeps receipts where you expect them.",
    status: "disconnected",
    scope: "Not connected",
    lastSync: "—",
    autonomy: 0,
  },
];

export const riskCopy: Record<Risk, { label: string; hint: string }> = {
  low: { label: "Low risk", hint: "Easily reversible" },
  medium: { label: "Medium risk", hint: "Affects other people" },
  high: { label: "High risk", hint: "Moves money — not reversible" },
};
