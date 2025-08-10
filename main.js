let bowling = {
    
    players : [
        {Name : 'Pippo', Scores : []},
        {Name : 'Pluto', Scores : []},
        {Name : 'Paperino', Scores : []},
        {Name : 'Paperoga', Scores : []},
        {Name : 'Paperone', Scores : []}
        
        
    ],
    
    createSetScores : function(){
        
        this.players.forEach(player => { 
            for(i=0; i<10; i++){
                
                player.Scores[i] = Math.floor(Math.random() * 10) + 1;
            }
            
        });
        
    },

    totalMatchScores : function(){

        this.players.forEach(player =>{

            let total_score = player.Scores.reduce((score, n)=> score + n, 0);
            console.log(`Il punteggio di ${player.Name} e' ${total_score}`);
                

        });

        
    }

    
}

console.log(bowling);
bowling.createSetScores();
console.log(bowling);
bowling.totalMatchScores();

