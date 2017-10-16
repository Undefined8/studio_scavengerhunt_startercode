var num = Math.floor(Math.random()*101)
var dt = new Date();
var now = dt.getHours() + ":" + dt.getMinutes() + ":" + dt.getSeconds();
var names = ["Lisandro", "Daniel Z.", "Jackie", "Nia", "Richard", "Abdul", "Ryan", "Ramata", "Daniel L.", "Shang", "Other people"]
var teachers = {
    Turt: ["Tessler"],
    Devraj: ["Mehta"],
    Kirill: ["Cherkashin"],
    Edwin: ["Fuquen"],
}

function log(turd) {
    console.log(turd);
}

function randInt(min, max) {
    return (Math.floor(Math.random()*(max-min)))+min;
}

for (var i=0; i < names.length; i++) {
    console.log(names[i]);
}

function numberWords(number) {
    var toString = "" + number;
    
    var result = "";
    
    if(toString !== "0"){
        for(i = toString.length - 1; i >= 0 ; i--) {
            
                if(i === 0){
                    result = "shi " + result;
                }
                
                if(toString.substr(i,1) === "1")
                    result = "yi " + result;
                else if(toString.substr(i,1) === "2")
                    result = "er " + result;
                else if(toString.substr(i,1) === "3")
                    result += "san " + result;
                else if(toString.substr(i,1) === "4")
                    result += "si " + result;
                else if(toString.substr(i,1) === "5")
                    result += "wu " + result;
                else if(toString.substr(i,1) === "6")
                    result += "liu " + result;
                else if(toString.substr(i,1) === "7")
                    result += "qi " + result;
                else if(toString.substr(i,1) === "8")
                    result += "ba " + result;
                else if(toString.substr(i,1) === "9")
                    result += "jiu " + result;
        }
    } else {
      result = "ling ";  
    }
    
    console.log(result);
}

numberWords(21);