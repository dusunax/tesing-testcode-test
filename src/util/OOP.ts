class Department {
  static readonly fiscalYear = 2022;
  static hello = Department.fiscalYear - 22;
  protected employees: string[] = [];

  constructor(private readonly id: string, public name: string) {}

  static createEmployee(name: string) {
    return { name: name, hello: Department.hello };
  }

  describe(this: Department) {
    console.log(`Department: ${this.name}`);
  }

  addEmployee(employees: string) {
    this.employees.push(employees);
  }

  printEmployeed() {
    console.log(this.employees.length);
    console.log(this.employees);
  }
}
class ITDepartement extends Department {
  constructor(id: string, public admins: string[]) {
    super(id, "IT");
  }
}

class AccountingDepartment extends Department {
  private lastReport: string;

  get mostRecentReport() {
    if (this.lastReport) {
      return this.lastReport;
    }
    throw new Error("report가 없습니다.");
  }

  set mostRecentReport(value: string) {
    if (!value || value === "") {
      throw new Error("값을 입력해주세요");
    }
    this.addReport(value);
  }

  constructor(id: string, private reports: string[]) {
    super(id, "Accounting");
    this.lastReport = reports[0];
  }

  addEmployee(name: string) {
    if (name === "kim") return;

    this.employees.push(name);
  }

  addReport(text: string) {
    this.reports.push(text);
  }

  printReport() {
    console.log(this.reports);
  }
}

// 여기부터 인스턴스
const IT = new ITDepartement("0124", ["Jack"]);
IT.addEmployee("Micheal");

const accounting = new AccountingDepartment("0125", []);

accounting.addReport("hello");

// console.log((accounting.mostRecentReport = "hi"));
// console.log(accounting.mostRecentReport);

console.log(AccountingDepartment.fiscalYear);
console.log(Department.createEmployee("hi"));

export { accounting, IT };
