let summa = 25000
let tovar = 20  
let promocod = null
let itogsumma
function calculate(summa, tovar, promocod) {
    if (promocod == "ДАРИМ300") {
         itogsumma = summa - 300
         console.log("Применилась скидка -300р.") 
         } else {
          console.log("Скидка -300 не применилась")
        }
        if (tovar >= 10) {
           itogsumma = itogsumma / 100 * 5
           console.log("Скидка 5% применилась")
        }  else {
          console.log("Скидка 5% не применилась")
        }
        if(summa > 50000) {
           itogsumma = (50000 - summa) / 100 *20
           console.log("Скидка 20% применилась")
        } else {
          console.log("Скидка 20% не применилась")
        } 
         if(summa >= 20000 && promocod == "СКИДКА15") {
            itogsumma = itogsumma / 100 * 15
            console.log("Скидка 20% применилась")
         } else {
            console.log("Скидка 20% не применилась")
         }
         
}


calculate(summa, tovar, promocod)

