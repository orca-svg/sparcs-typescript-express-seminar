class BankDB {
  static inst: BankDB;
  static getInst = () => {
    if (!BankDB.inst) BankDB.inst = new BankDB();
    return BankDB.inst;
  };

  total = 10000;

  getBalance = () => {
    return { success: true, data: this.total };
  };

  transaction = (amount: number) => {
    this.total += amount;
    return { success: true, data: this.total };
  };
}

export default BankDB.getInst();
