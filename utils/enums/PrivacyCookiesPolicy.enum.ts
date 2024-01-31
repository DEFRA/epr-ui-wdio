export enum PrivacyPolicy {
  Section1 = "Who collects your personal data",
  Section2 = "What personal data we collect and how it is used",
  Section3 = "Lawful basis for processing your personal data",
  Section4 = "Consent to process your personal data",
  Section5 = "Who we share your personal data with",
  Section6 = "How long we hold personal data",
  Section7 = "What happens if you do not provide the personal data",
  Section8 = "Use of automated decision-making or profiling",
  Section9 = "Transfer of your personal data outside of the UK",
  Section10 = "Your rights",
  Section11 = "Complaints",
  Section12 = "Defra’s personal information charter",
  Section13 = "Changes to this policy",
}

export enum SharedPrivacyPolicy {
  PageTitle = "Privacy notice - ‘Report packaging data’ service",
}

export enum RegulatorsPrivacyPolicy {
  PageTitle = "Privacy notice - pEPR: Regulators’ service",
}

export enum SharedCookiesPolicy {
  PageTitle = "Cookies",
  EssentialCookiesHeader = "Essential cookies",
  OptionalCookiesHeader = "Analytics cookies (optional)",
}

export enum EssentialCookieNames {
  xmscpim = "x-ms-cpim-*",
  TSxxxxxxxx = "TSxxxxxxxx",
  epr_session = ".epr_session",
  epr_auth = ".epr_auth",
  epr_anti_forgery = ".epr_anti_forgery",
  epr_temp = ".epr_temp",
}

export enum SharedEssentialCookieNames {
  epr_cookies_policy = ".epr_cookies_policy",
  epr_correlation = ".epr_correlation",
  epr_openid_nonce = ".epr_openid_nonce",
}

export enum RegulatorsEssentialCookieNames {
  epr_regulator_cookies_policy = ".epr_regulator_cookies_policy",
}

export enum AnalyticalCookieNames {
  _ga = "_ga",
  _ga_VMDE8PW9W7 = "_ga_VMDE8PW9W7",
}
