// Code your solutions in this file

Function writeCards(cards, event){
  let finalEvent = [];
  for (let i=0; i<cards.length; i++)
  {
    
    finalEvent[i]="Thank you,"+cards[i]+", for the "+event+ "gift";
  }
  return finalEvent;
} 

writeCards(['Lisa', 'Kaitlin', 'Jan' ], 'surprise');