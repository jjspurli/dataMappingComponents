var dataset = [
    {
        color:"red",
        message:"I am a cool message!"
    },
    {
        color:"blue",
        message:"Living on the planet that is cool and blue as me!"
    },
    {
        color:"green",
        message:"The grass is always greener"
    }
]
var datasets = [];
function List(clr, mess) {
var that = this;
  this.color = clr;
  this.message = mess;
  this.ele = document.createElement("div");
    this.ele.innerHTML = this.color;
    this.ele.style.backgroundColor = this.color;
    this.ele.addEventListener("click", function(){

        that.ele.innerHTML = that.message;
    });
   document.body.appendChild(this.ele);
}

for (var i=0; i<dataset.length; i++){
    datasets.push(new List(dataset[i].color, dataset[i].message));
   }

