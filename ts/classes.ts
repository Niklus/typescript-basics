interface IAccount {
  name: string;
  balance: number;
  deposit?: () => void;
}

class InvestmentAccount implements IAccount {
  constructor(public name, public balance) {}

  private withdraw() {
    return this.balance;
  }
}
