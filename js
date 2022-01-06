// Returns a random DNA base
const returnRandBase = () => {
  const dnaBases = ['A', 'T', 'C', 'G']
  return dnaBases[Math.floor(Math.random() * 4)] 
}

// Returns a random single stand of DNA containing 15 bases
const mockUpStrand = () => {
  const newStrand = []
  for (let i = 0; i < 15; i++) {
    newStrand.push(returnRandBase())
  }
  return newStrand
}

const pAequorFactory = (specimenNum, dna) => {
  return {
  specimenNum: specimenNum,
  dna: dna,

  mutate(dna) {
    let newDna = [];
    let randBase = dna[Math.floor(Math.random() * 15)];
    let bases = ['A', 'T', 'C', 'G']
    if (randBase === 'A') {
      let newBases = bases.splice(0,1);
      randBase = newBases[Math.floor(Math.random() * 3)];
    } else if (randBase === 'T') {
      let newBases = bases.splice(1,1);
      randBase = newBases[Math.floor(Math.random() * 3)];
    } else if (randBase === 'C') {
      let newBases = bases.splice(2,1);
      randBase = newBases[Math.floor(Math.random() * 3)];
    } else if (randBase === 'G') {
      let newBases = bases.splice(2,1);
      randBase = newBases[Math.floor(Math.random() * 3)];
    }
    return console.log(newDna);
  },

  compareDNA() {

  }

  }
}
