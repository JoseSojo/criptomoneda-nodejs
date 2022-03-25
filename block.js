'use strict';

const SHA256 = require('crypto-js/sha256');

class Block{
  constructor({ timestamp: timestamp, data:data, hashPrevio:hashPrevio='' }){
    this.timestamp = timestamp;
    this.data = data;
    this.hashPrevio = hashPrevio;
    this.hash = this.calcualrHash();
  }

  calcualrHash(){
    return SHA256(this.timestamp + this.hashPrevio + JSON.stringify(this.data)).toString();
  }
}

module.exports = Block;
