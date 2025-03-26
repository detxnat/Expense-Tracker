import * as readline from "readline";
import { ExpenseManager } from "./expenseManager";
import { ExpenseCategory } from "./expense";

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

const manager = new ExpenseManager();

function mainMenu(): void {
  console.log("\n1. Add Expense\n2. View Expenses\n3. Calculate Total\n4. Filter by Category\n5. Exit");
  rl.question("Choose an option: ", (choice: any) => {
    switch (choice) {
      case "1":
        rl.question("Enter expense name: ", (name: string) => {
          rl.question("Enter amount: ", (amount: string) => {
            rl.question("Enter category (Food, Transport, Entertainment, Other): ", (category: string) => {
              if (!(category in ExpenseCategory)) {
                console.log("Invalid category!");
                return mainMenu();
              }
              manager.addExpense(name, parseFloat(amount), category as ExpenseCategory);
              mainMenu();
            });
          });
        });
        break;
      case "2":
        manager.viewExpenses();
        mainMenu();
        break;
      case "3":
        manager.calculateTotal();
        mainMenu();
        break;
      case "4":
        rl.question("Enter category to filter: ", (category: string) => {
          if (!(category in ExpenseCategory)) {
            console.log("Invalid category!");
            return mainMenu();
          }
          manager.filterByCategory(category as ExpenseCategory);
          mainMenu();
        });
        break;
      case "5":
        rl.close();
        break;
      default:
        console.log("Invalid choice!");
        mainMenu();
    }
  });
}

console.log("Welcome to Expense Tracker");
mainMenu();