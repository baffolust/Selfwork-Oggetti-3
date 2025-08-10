let bowling = {
    
    players : [
        {Name : 'Topolino', Scores : []},
        {Name : 'Pluto', Scores : []},
        {Name : 'Spiderman', Scores : []},
        {Name : 'Paperoga', Scores : []},
        {Name : 'Batman', Scores : []},
        {Name : 'Zorro', Scores : []}
        ],

    
    
    // crea punteggi casuali ai giocatori in lista
    createSetScores : function(){
        
        this.players.forEach(player => { 
            for(let i=0; i<10; i++){
                
                player.Scores[i] = Math.floor(Math.random() * 10) + 1;
            }
            
        });
        
    },
    
    createPlayerScores : function(player_Name){
        
        // indice della posizione del giocaotore nell'array. Se non esiste da risultato -1
        let index = this.players.findIndex((player)=>player.Name == player_Name);
        
        // ciclo verifica esistenza del giocatore ed assegnazione punteggio random
        if (index != -1){
            for(let i=0; i<10; i++){
                
                this.players[index].Scores[i] = Math.floor(Math.random() * 10) + 1;
                
            }
        } else 
            console.log(`Giocatore ${player_Name} non trovato. Punteggio non creato`);
        
    },
    
        // aggiunta giocatore
    addPlayer : function(player_Name){
        
        this.players.push({Name : player_Name, Scores : []});
        this.createPlayerScores(player_Name);
        console.log(`${player_Name} aggiunto e punteggio assegnato`);
    },
    

    // metodo che stampa a video nomi e punteggi finali. Commentato dato che finalRanking fa la stessa cosa aggiungendo anche una classifica
    // totalMatchScores : function(){
        
    //     this.players.forEach(player =>{
            
    //         let total_score = player.Scores.reduce((score, n)=> score + n, 0);
    //         console.log(`Il punteggio di ${player.Name} e' ${total_score}`);
            
            
    //     });
        
        
    // },
    
    sortByName : function(){
        
        this.players.sort((a, b) => {
            const nameA = a.Name.toUpperCase(); 
            const nameB = b.Name.toUpperCase(); 
            if (nameA < nameB) {
                return 1;
            } else if (nameA > nameB) {
                return -1;
            } else 
                
            return 0;
            
        });
        
    },
    

    // metodo che crea un clone del vettore players aggiungendo il totale del punteggio per ogni giocatore e il ranking
    
    finalRanking : function(){
        
        let Ranking = this.players.map((player)=>({
            
            Name : player.Name,
            finalScore : player.Scores.reduce((score, n)=> score + n, 0)
            
        }));
        
        Ranking.sort((a, b) => b.finalScore - a.finalScore);
        
        Ranking.forEach((player, i)=>{
            
            console.log(`Posizione ${i + 1} - ${player.Name} - Punteggio ${player.finalScore}`);
            
        });
        
    }
}


console.log(bowling);
bowling.createSetScores();
bowling.sortByName();
bowling.createPlayerScores('Pluto');
bowling.addPlayer('SuperMario');
bowling.finalRanking();




