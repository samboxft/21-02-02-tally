function get_sum() {
  let tally = new Array();
  let storage = localStorage.getItem("sum");
  if (storage !== null) {
    tally = JSON.parse(storage);
  }
  return tally;
}
function add(){
    let tally = get_sum();
    let zap = [];
    let a = +$("#num").val()
if (isNaN(a) == true) {
    alert("is Not a number");
    clearDefault(a);
    return false;
  }
  zap.push(a);
  let sum = zap.reduce(function (a, b) {
    return a + b;
  }, 0);
  tally.push(sum);
  localStorage.setItem('sum',JSON.stringify(tally));
show();
}
$('#btn').on('click',add)

function clearDefault(e) {
  if (e.defaultValue == e.value) {
    e.value = "";
    $("#num").focus();
  }
}


let show = function(){
    let tally = get_sum();
   let show = tally.reduce(function(a,b){
        return a +b;
    },0);
    $("#display").html(show);
}

$('#rst').on('click', reset)
function reset(){
    localStorage.removeItem('sum')
    $('#display').html("");
    document.getElementById("num").value="";
    document.getElementById('num').focus();}