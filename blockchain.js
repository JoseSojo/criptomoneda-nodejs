'use strict';

const Block = require('./block.js');

class Blockchain{
  constructor(){
    this.chain = [this.crearBloqueGenesis()];
  }

  crearBloqueGenesis(){
    return new Block({ timestamp:'03-23-2022', data: 'Bloque Genesis', hashPrevio:'0' });
  }

  getUltimoBloque(){
    return this.chain[this.chain.length - 1];
  }

  agregarBloque(nuevoBLoque){
    nuevoBLoque.hashPrevio = this.getUltimoBloque().hash;
    nuevoBLoque.hash = nuevoBLoque.calcualrHash();
    this.chain.push(nuevoBLoque);
  }

  validarChain(){
    for (let i = 1; i < this.chain.length; i++) {
      const bloqueActual = this.chain[i];
      const bloqueAnterior = this.chain[i-1];

      if(bloqueActual.hash != bloqueActual.calcualrHash()){
        return false;
      }

      if(bloqueActual.hashPrevio != bloqueAnterior.hash){
        return false;
      }
    }
    return true;
  }
}

module.exports = Blockchain;
