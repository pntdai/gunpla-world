export interface Scammer {
  id: string;
  name: string;
  alias?: string;
  platform: string;
  profileLink?: string;
  phone?: string;
  bankAccount?: string;
  summary: string;
  lastReported?: string;
  reportCount?: number;
}

export const mockScammers: Scammer[] = [
  {
    id: "1",
    name: "John Doe",
    alias: "JD_Seller",
    platform: "Facebook",
    profileLink: "https://facebook.com/johndoe",
    phone: "+84 123 456 789",
    bankAccount: "1234567890 - Vietcombank",
    summary: "Reported for selling fake Gunpla models. Takes payment but never ships items. Multiple victims reported similar pattern.",
    lastReported: "2024-01-15",
    reportCount: 12,
  },
  {
    id: "2",
    name: "Jane Smith",
    platform: "Shopee",
    profileLink: "https://shopee.vn/seller/janesmith",
    phone: "+84 987 654 321",
    summary: "Sells counterfeit Bandai products. Uses stock photos from official retailers. Delivers low-quality knockoffs.",
    lastReported: "2024-01-20",
    reportCount: 8,
  },
  {
    id: "3",
    name: "Mike Johnson",
    alias: "MG_Collector",
    platform: "Facebook",
    phone: "+84 555 123 456",
    bankAccount: "9876543210 - Techcombank",
    summary: "Scammer who collects deposits for pre-orders but disappears before delivery. Known to create new accounts after being reported.",
    lastReported: "2024-01-18",
    reportCount: 15,
  },
  {
    id: "4",
    name: "Sarah Lee",
    platform: "Lazada",
    profileLink: "https://lazada.vn/seller/sarahlee",
    summary: "Sells used Gunpla kits as new. Misrepresents condition and refuses returns. Poor communication.",
    lastReported: "2024-01-22",
    reportCount: 5,
  },
  {
    id: "5",
    name: "David Chen",
    alias: "DC_Hobby",
    platform: "Facebook",
    phone: "+84 111 222 333",
    bankAccount: "5555666677 - BIDV",
    summary: "Known for bait-and-switch tactics. Advertises rare kits at low prices, then claims out of stock and offers expensive alternatives.",
    lastReported: "2024-01-19",
    reportCount: 10,
  },
];

export function searchScammers(query: string, scammers: Scammer[]): Scammer[] {
  if (!query.trim()) return [];
  
  const lowerQuery = query.toLowerCase();
  return scammers.filter(
    (scammer) =>
      scammer.name.toLowerCase().includes(lowerQuery) ||
      scammer.alias?.toLowerCase().includes(lowerQuery) ||
      scammer.platform.toLowerCase().includes(lowerQuery) ||
      scammer.phone?.includes(lowerQuery) ||
      scammer.bankAccount?.toLowerCase().includes(lowerQuery) ||
      scammer.summary.toLowerCase().includes(lowerQuery)
  );
}
