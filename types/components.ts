import { SyntheticEvent, FormEvent } from 'react'

export interface Amount {
  value: string;
  currency: string;
}

export interface User {
  first: string;
  last: string;
  email: string;
}

export interface Receipt {
  id: string;
  url: string;
}

export interface ExpenseProps {
  id: string;
  amount: Amount;
  date: string;
  merchant: string;
  receipts: Receipt[];
  comment: string;
  category: string;
  user: User;
}

export interface ExpensesProps {
  data: ExpenseProps[];
}

export interface FilterProps {}

export interface FilterValuesProps {
  open: boolean;
}

export interface FilterListProps {
  value: string;
  textVal: string;
  isActive: boolean;
  onClick: (e: SyntheticEvent) => void;
}

export interface FilterButtonProps {}

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
  receipts: Receipt[];
}

export interface ErrorMessageProps {
  error: any;
}
