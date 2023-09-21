//D-Task

console.log("TRAIN AREA!");


class Shop {
    constructor(maxsulot_1, maxsulot_2, maxsulot_3) {
      this.products = {
        non: maxsulot_1,
        lagmon: maxsulot_2,
        cola: maxsulot_3,
      };
    }
  
    getCurrentTime() {
      const now = new Date();
      const time = now.toLocaleTimeString();
      return time;
    }
  
    remaining() {
      const time = this.getCurrentTime();
      console.log(`Ayni vaqtda ya'ni soat ${time}da, ${this.products.non} non, ${this.products.lagmon} lagmon, va ${this.products.cola} cola mavjud!.`);
    }
  
    sell(productName, quantity) {
      const time = this.getCurrentTime();
      if (this.products.hasOwnProperty(productName) && this.products[productName] >= quantity) {
        this.products[productName] -= quantity;
        console.log(`Ayni vaqtda ya'ni soat ${time}da, ${quantity} ${productName} sotildi.`);
      } else {
        console.log(`Ayni vaqtda ya'ni soat ${time}da, ${productName} sotuv uchun yetarli mavjud emas`);
      }
    }
  
    receive(productName, quantity) {
      const time = this.getCurrentTime();
      if (this.products.hasOwnProperty(productName)) {
        this.products[productName] += quantity;
        console.log(`Ayni vaqtda ya'ni soat ${time}, ${quantity} ${productName} qabul qilindi`);
      } else {
        console.log(`Ayni vaqtda ya'ni soat ${time}, ${productName} nomli sotuvga aloqasi yo'q maxsulot vozvrat qilindi`);
      }
    }
  }
  
  const shop = new Shop(4, 5, 2);
  
  shop.remaining(); // Example: Now at 20:40, there are 4 breads, 5 lemons, and 2 colas!
  
  shop.sell('non', 3); // Example: Now at 20:50, sold 3 breads.
  shop.sell('cola', 5);  // Example: Now at 20:50, not enough cola to sell.
  
  shop.receive('cola', 4);  // Example: Now at 20:55, received 4 colas.
  shop.receive('apple', 2); // Example: Now at 20:55, cannot receive unknown product: apple.
  
  shop.remaining(); // Example: Now at 20:55, there are 1 bread, 5 lemons, and 6 colas!
  