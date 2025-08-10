let bowling = {
    
    players : [
        {Name : 'Pippo', Scores : []},
        {Name : 'Pluto', Scores : []},
        {Name : 'Paperino', Scores : []},
        {Name : 'Paperoga', Scores : []},
        {Name : 'Paperone', Scores : []}
        
        
    ],
    
    createMatchScores : function(){
        
        this.players.forEach(player => { 
            for(i=0; i<10; i++){
                
                player.Scores[i] = Math.floor(Math.random() * 10) + 1;
            }
            
        });
        
    }

    
}

console.log(bowling);
bowling.createMatchScores();
console.log(bowling);

