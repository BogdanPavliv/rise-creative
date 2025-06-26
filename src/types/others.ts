export interface FormState {
  email: string;
  emptyName: string;
  emptyWebsite: string;
  emailDirty: boolean;
  emptyNameDirty: boolean;
  emptyWebsiteDirty: boolean;
  emailError: string;
  emptyNameError: string;
  emptyWebsiteError: string;
  formValid: boolean;
}

export interface MenuState {
  isOpen: boolean;
}