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

  mutate() {
    let randElement = Math.floor(Math.random() * 15);
    let bases = ['A', 'T', 'C', 'G']
    if (this.dna[randElement] === 'A') {
      let newBases = bases.splice(0,1);
      let replacementBase = bases[Math.floor(Math.random() * 3)];
      this.dna.splice(randElement, 1, replacementBase);
    } else if (this.dna[randElement] === 'T') {
      let newBases = bases.splice(1,1);
      let replacementBase = bases[Math.floor(Math.random() * 3)];
      this.dna.splice(randElement, 1, replacementBase);
    } else if (this.dna[randElement] === 'C') {
      let newBases = bases.splice(2,1);
      let replacementBase = bases[Math.floor(Math.random() * 3)];
      this.dna.splice(randElement, 1, replacementBase);
    } else if (this.dna[randElement] === 'G') {
      let newBases = bases.splice(2,1);
      let replacementBase = bases[Math.floor(Math.random() * 3)];
      this.dna.splice(randElement, 1, replacementBase);
    }
    return dna;
  },

compareDNA (pAObject) {
  //compare this.dna with pAObject.dna
  let dnaMatchCount = 0;
  for (i = 0; i < 15; i++) {
    if (this.dna[i] === pAObject.dna[i]) {
      dnaMatchCount += 1;
      //console.log (dnaMatchCount);
    };
  };
  let percMatch = dnaMatchCount/15*100;
  console.log(`Specimen ${this.specimenNum} and ${pAObject.specimenNum} have ${percMatch}% DNA in common`);
  },

  willLikelySurvive() {
    let baseCount = 0;
    for (i = 0; i < 15; i++) {
      if ((this.dna[i] = 'C') || (this.dna[i] = 'G')) {
        baseCount += 1;
      }
    };
    if ((baseCount/15) > 0.6) {
      return true;
    } else {
      return false;
    }
  }

  }
}

const survivingSpecimen = [];
let idCounter = 1;

while (survivingSpecimen.length < 30) {
  let newOrg = pAequorFactory(idCounter, mockUpStrand());
  if (newOrg.willLikelySurvive()) {
    survivingSpecimen.push(newOrg);
  }
  idCounter++;
}

console.log(survivingSpecimen)

//survivingSpecimen[0].compareDNA(survivingSpecimen[1]);
