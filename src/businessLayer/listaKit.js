export const totalsProcess = (kit) => {    
    //console.log(kit)
    // TOTAL JEWELS, PARTIAL JEWELS, TOTAL SELL
    let totalJewels = 0
    let partialJewels = 0
    let totalSell = 0
    let partialSell = 0
    kit.jewels.map(function(value, index){        
        totalJewels++        
        totalSell += value.valor
        if(value.isSold == true){
            partialJewels++
            partialSell += value.valor
        }                    
    })  
    kit.totalJewels = totalJewels      
    kit.partialJewels = partialJewels
    kit.totalSell = totalSell
    kit.partialSell = partialSell
    return kit
}