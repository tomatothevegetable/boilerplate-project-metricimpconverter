/*
*
*
*       Complete the handler logic below
*       
*       
*/

function ConvertHandler() {
  this.getNum = function(input) {
    let result,dec;
    result=input.split(/[a-zA-Z]{1,3}/)[0].split('/');
    //console.log(result);
    if(result.length>2)return false;
    for(let i=0;i<result.length;i++)
      if(!/^\d*(\.\d+)?$/.test(result[i]))return false;
    if(result.length==2)return result=result[0]/result[1];
    return result[0]?result:1;
  };
  
  this.getUnit = function(input) {
    let result;
    result=input.match(/[a-zA-Z]{1,3}/);
    //console.log(result);
    if(result){
      if((result[0]=='l'||result[0]=='L'))result[0]=result[0].toUpperCase();
      else result[0]=result[0].toLowerCase();
      switch(result[0]){
        case 'mi':result='mi';break;
        case 'km':result='km';break;
        case 'gal':result='gal';break;
        case 'L':result='L';break;
        case 'lbs':result='lbs';break;
        case 'kg':result='kg';break;
        default:return false;
      }
    }
    return result?result:false;
  };
  
  this.getReturnUnit = function(initUnit) {
    let result;
    if(initUnit==false)return false;
    switch(initUnit.toLowerCase()){
      case 'mi':result='km';break;
      case 'km':result='mi';break;
      case 'gal':result='L';break;
      case 'l':result='gal';break;
      case 'lbs':result='kg';break;
      case 'kg':result='lbs';break;
      default:return false;
    }
    return result;
  };

  this.spellOutUnit = function(unit) {
    let result;
    switch(unit){
      case 'mi':result='miles';break;
      case 'km':result='kilometers';break;
      case 'gal':result='gallons';break;
      case 'L':result='liters';break;
      case 'lbs':result='pounds';break;
      case 'kg':result='kilograms';break;
      default:return false;
    }
    return result;
  };
  
  this.convert = function(initNum, initUnit) {
    const galToL = 3.78541;
    const lbsToKg = 0.453592;
    const miToKm = 1.60934;
    let result;
    if(initNum==false||initUnit==false)return false;
    switch(initUnit){
      case 'mi':result=initNum*miToKm;break;
      case 'km':result=initNum/miToKm;break;
      case 'gal':result=initNum*galToL;break;
      case 'L':result=initNum/galToL;break;
      case 'lbs':result=initNum*lbsToKg;break;
      case 'kg':result=initNum/lbsToKg;break;
      default:return false;
    }
    return Number(result.toFixed(5));
  };
  
  this.getString = function(initNum, initUnit, returnNum, returnUnit) {
    let result;
    result=initNum +' '+ this.spellOutUnit(initUnit) +' converts to '+returnNum +' '+this.spellOutUnit(returnUnit);
    console.log(result);
    return result;
  };
  
}

module.exports = ConvertHandler;
