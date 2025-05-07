function authentication(username,password){
  if(!username || !password) return false;
  return username==='varshitha' && password==='1234';
}
if(typeof module!=='undefined'){
  module.exports={
    authentication
  };
}