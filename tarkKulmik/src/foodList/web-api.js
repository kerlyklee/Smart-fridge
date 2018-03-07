let latency = 200;
let id = 0;

function getId() {
  return ++id;
}

let foods = [{
    id: getId(),
    name: 'Piim',
    category: 'Piimatooted',
    amount: '3',
    expDate: '27/04/2018'
  },
  {
    id: getId(),
    name: 'Sink',
    category: 'Liha',
    amount: '1',
    expDate: '27/04/2018'
  },
  {
    id: getId(),
    name: 'Küpsis',
    category: 'Maiustused',
    amount: '3',
    expDate: '27/04/2018'
  }
];

export class WebAPI {
  isRequesting = false;

  getFoodList() {
    this.isRequesting = true;
    return new Promise(resolve => {
      setTimeout(() => {
        let results = foods.map(x => {
          return {
            id: x.id,
            name: x.name,
            category: x.category,
            amount: x.amount,
            expDate: x.expDate
          }
        });
        resolve(results);
        this.isRequesting = false;
      }, latency);
    });
  }
}
