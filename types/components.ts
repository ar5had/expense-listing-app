import { SyntheticEvent } from 'react'

export interface Amount {
  value: string;
  currency: string;
}

export interface User {
  first: string;
  last: string;
  email: string;
}

export interface ExpenseProps {
  [index: string]: any;
  id: string;
  amount: Amount;
  date: string;
  merchant: string;
  receipt: string;
  comment: string;
  category: string;
  user: User;
}

export interface ExpensesProps {
  data: ExpenseProps[];
}

export interface PaginationProps {
  total: number;
  perPage: number;
  offset: number;
}

export interface IndexHeaderProps {
  perPage: number;
  offset: number;
}

export interface StaticExpenseFieldsProps {
  currency: string;
  value: string;
  first: string;
  last: string;
  email: string;
  merchant: string;
  category: string;
  date: string;
}

export interface DynamicExpenseFieldsProps {
  comment: string;
  id: string;
  receipt: string;
}

export interface ErrorMessageProps {
  error: any;
}

export interface UploadFileProps {
  addReceipt: (value: string) => void;
}

export interface UploadIconProps {
  onClick: (e: SyntheticEvent) => void;
}

export interface ImagePreviewProps {
  src: string;
  deleteReceipt: () => void;
}

export interface ImageOverlayProps {
  src: string;
  hideOverlay: () => void;
  show: boolean;
}

export interface UpdateStatusProps {
  text: string;
}

export interface ExpenseFilterProps {
  filterText: string;
  changeFilterText: (text: string) => void;
}

export interface FilterOption {
  value: string;
  label: string;
}
