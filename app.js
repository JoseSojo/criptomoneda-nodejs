'use strict';

const Block = require('./block.js');
const Blockchain = require('./blockchain.js');

const MemeCoin = new Blockchain();
MemeCoin.agregarBloque(new Block({ timestamp:'03-24-2022', data:{ cantidad: 10 } }));
MemeCoin.agregarBloque(new Block({ timestamp:'03-25-2022', data:{ cantidad: 20 } }));
MemeCoin.agregarBloque(new Block({ timestamp:'03-26-2022', data:{ cantidad: 15 } }));

console.log(JSON.stringify(MemeCoin, null, 4));
