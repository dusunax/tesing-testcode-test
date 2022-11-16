const runFile = () => console.log("Running file singSingStore.");

type Store = {
  storeName: string;
  location: string;
  itemList: string[];
  addItem: null | ((arg: string) => void);
};

const singSingStore: Store = {
  storeName: "과일 가게",
  location: "서울 중랑구",
  itemList: ["사과"],
  addItem: function (item: string) {
    this.itemList.push(item);
    console.log(this.itemList);
  },
};

// 그냥 호출, this
// singSingStore.addItem("버터");

const snackStore: Store = {
  storeName: "과자 가게",
  location: "서울 노원구",
  itemList: ["사탕"],
  addItem: null,
};

const addItem = singSingStore.addItem!;

addItem.call(snackStore, "빼빼로");
addItem.call(singSingStore, "빼빼로");

const addSnack = addItem.bind(snackStore);
addSnack("초코밥");

const addBug = addItem.bind(snackStore, "바퀴벌레");
addBug();
addBug();

console.assert(snackStore.storeName === "과자 가게");

export { runFile, addSnack, addBug, addItem };
