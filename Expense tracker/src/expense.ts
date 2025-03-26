export interface Expense {
    id: number;
    name: string;
    amount: number;
    category: ExpenseCategory;
    date: Date;
  }
  
  export enum ExpenseCategory {
    Food = "Food",
    Transport = "Transport",
    Entertainment = "Entertainment",
    Other = "Other"
  }