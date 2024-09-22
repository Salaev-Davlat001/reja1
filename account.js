const moment = require ('moment');
class Account{
#amount;
#account_id;

    constructor (name, amount, account_id) {
      this.name = name;
      this.#amount = amount;
      this.#account_id = account_id;
    }

    tellMeBalance() {
        console.log(`Sizning hisobingizdagi qoldiq:`, this.#amount)
        return this.#amount;
    }

    withdrawMoney(amount) {
        if (this.#amount > amount) {
            this.#amount-= amount;
            console.log(`Hisobingizdan ${amount} yechildi va qoldiq ${this.#amount} $ni tashkil etadi`);
        } else{
           console.log(`Hisobingizda mablag yetarli emas:${this.#amount}`) 
        }
    }

    makeDeposit(amount) {
   this.#amount += amount;
   console.log(`Hisobingiz toldirildi, ayni paytdagi hisobingiz ${this.#amount} $ni tashkil etadi`);
    }

    giveMeDetails() {
  console.log(`Salom hurmatli ${this.name}, sizning hisobingiz ${this.#amount} $ga teng`);
  console.log(`Hisob raqamingiz: `, this.#account_id )
    }


    static tellmeAboutClass() {
        console.log(`Bu class accountlarni yasash uchun xizmat qiladi`)
    }


    static tellMeTime() {
    console.log(`Hozirgi vaqt ${moment(). format("YYYY.MM.DD HH:mm:ss") }`);
    }
}
module.exports = Account;