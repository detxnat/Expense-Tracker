import { Expense, ExpenseCategory } from "./expense";

export class ExpenseManager {
  private expenses: Expense[] = [];
  private idCounter = 1;

  addExpense(name: string, amount: number, category: ExpenseCategory): void {
    const expense: Expense = {
      id: this.idCounter++,
      name,
      amount,
      category,
      date: new Date()
    };
    this.expenses.push(expense);
    console.log("Expense added successfully!");
  }

  viewExpenses(): void {
    console.log("\nExpenses List:");
    this.expenses.forEach(exp => {
      console.log(`${exp.id}. ${exp.name} - ${exp.amount} (${exp.category}) on ${exp.date.toLocaleDateString()}`);
    });
  }

  calculateTotal(): void {
    const total = this.expenses.reduce((sum, exp) => sum + exp.amount, 0);
    console.log(`\nTotal Expenses: ${total}`);
  }

  filterByCategory(category: ExpenseCategory): void {
    const filtered = this.expenses.filter(exp => exp.category === category);
    console.log(`\nExpenses in category ${category}:`);
    filtered.forEach(exp => {
      console.log(`${exp.id}. ${exp.name} - ${exp.amount} on ${exp.date.toLocaleDateString()}`);
    });
  }
}
