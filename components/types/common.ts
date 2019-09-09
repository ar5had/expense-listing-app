export interface ExpenseProps {
  [index: string]: any
  id: string
  amount: {
    currency: string
    value: string
  }
  date: string
  merchant: string
  receipt: string
  comment: string
  category: string
  user: {
    first: string
    last: string
    email: string
  }
}

export interface Image {
  preview: string
  url: string
  file: File | null
}
