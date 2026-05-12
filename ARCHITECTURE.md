# Architecture

```mermaid
flowchart TD
    User[User Browser] -->|Inputs spend data| Frontend[Next.js + Tailwind]
    Frontend -->|API call| AuditEngine[Audit Logic]
    AuditEngine -->|Compare plans| PricingData[PRICING_DATA.md]
    AuditEngine --> Results[Results Page]
    Results --> ClaudeAPI[Anthropic Claude]
    Results --> LeadCapture[Supabase DB]
    LeadCapture --> EmailService[Resend/Postmark]
    Results --> ShareLink[Unique Public URL]
