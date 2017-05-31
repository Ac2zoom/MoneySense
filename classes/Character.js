function Character() {
    this.access_token;
    this.name;
    this.occupation = "unassigned";
    this.salary = 0;
    this.credit_card = false;
    this.credit_card_number = null;
    this.investments = [];
    this.bank_acct = new Bank();
    this.bank_acct_balance = this.bank_acct.balance;
    this.budget;
    this.game_progress = "revenue";
}