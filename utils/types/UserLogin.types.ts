export type UserCredentials = { username: string; password: string };

export type UserType =
  | "directProducerApproved"
  | "directProducerDelegated"
  | "directProducerBasic"
  | "indirectProducerApproved"
  | "indirectProducerDelegated"
  | "indirectProducerBasic"
  | "complianceSchemeMember"
  | "approvedUserWithAdmin"
  | "adminUserInvitedToElevate"
  | "automationUser";

export type UserRoles = "Approved" | "Delegated" | "Basic";