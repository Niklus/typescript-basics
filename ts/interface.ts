interface IAccount {
  name: string;
  balance: number;
  deposit?: () => void;
}

const account: IAccount = {
  name: "Nicholas",
  balance: 1000000,
};

console.log(account);
