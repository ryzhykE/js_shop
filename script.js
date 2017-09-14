
var categories = ['T-shirt','Pullover'];
var color = ['white','black'];
var size = ['M','L'];
var sort = ["Lowest price first", "Highest price first"];
var filter = {};
var output = [];
var content = [];

function getSelect(data,myDiv){
    for (var i = 0; i < data.length; i++) {
        var option = document.createElement("option");
        option.setAttribute("value", data[i]);
        option.text = data[i];
        myDiv.appendChild(option);
        
    }
}

var catSel = document.querySelector("select[name=categories]");
getSelect(categories,catSel);

var sizeSel = document.querySelector("select[name=size]");
getSelect(size,sizeSel);

var colorSel = document.querySelector("select[name=color]");
getSelect(color,colorSel);

var sortSel = document.querySelector("select[name=sort]");
getSelect(sort,sortSel);


catSel.addEventListener('change',function(){
    var selectedIndex = catSel.options.selectedIndex;
    var val = catSel.options[selectedIndex].value;
    filter.cat = val;
    getFilteredArray();
});

sizeSel.addEventListener('change',function(){
    var selectedIndex = sizeSel.options.selectedIndex;
    var val = sizeSel.options[selectedIndex].value;
    filter.size = val;
    getFilteredArray();
});

colorSel.addEventListener('change',function(){
    var selectedIndex = colorSel.options.selectedIndex;
    var val = colorSel.options[selectedIndex].value;
    filter.color = val;
    getFilteredArray();
});

sortSel.addEventListener('change',function(){
    var selectedIndex = sortSel.options.selectedIndex;
    var val = sortSel.options[selectedIndex].value;
    filter.sort = val;
    getFilteredArray();
});

function getFilteredArray(){
    output = todo;
     if(filter.cat) {
         filterCat();
     }
    if(filter.size) {
        filterSize();
    }
    if(filter.color) {
        filterCol();
    }
    if(filter.sort) {
        filterCat();
    }
 }


 function filterCol(){
     var data = output;
    var color = filter.color;
    var result = [];
    data.forEach(function(element){
        if(element.color.includes(color))
        {
            result.push(element);
        }
    });
    content = result;
     drow.drow(content);
}


function filterCat(){
      var data = output;
      var cat = filter.cat;
      var result = [];
      data.forEach(function(element){
          if(element.category == cat)
          {
              result.push(element);
          }
            });       
             output = result;
              drow.drow(output);
            }

function filterSize() {
    var data = output;
    var cat = filter.size;
    var result = [];
    data.forEach(function(element){
        if(element.size.includes(size))
        {
            result.push(element);
        }
    });
    output = result;
    drow.drow(output);
}

function Drow () {
    this.drow = function(task){
        var list = document.querySelector(".formcontrol");
        //list.innerHTML = '';
        todo.forEach( function(task,key) {
            var container = document.createElement("div");
            container.setAttribute('class','col-sm-4 col-md-3');
            var node = document.createElement('img');
            node.src= task['img'];
            node.setAttribute('width', '200px');
            var node1 = document.createElement("h3");
            node1.innerHTML = task['name'];
            var node2 = document.createElement('p');
            node2.innerHTML = '<strong>' + task['price'] + ' EUR </strong>';
                list.appendChild(container);
                container.appendChild(node);
                container.appendChild(node1);
                container.appendChild(node2);
        });
    }
}
var drow = new Drow();
drow.drow(todo);








/** 
function unique(item, mass){
    for ( var i = 0; i < mass.length; i ++){
        if (item == mass[i]){
            return false;
        }

    }
    mass.push(item);
    return item;
}

function drowCat () {
    this.drow = function(task,id){
        var x = document.querySelector("select[name=categories]");
        x.setAttribute("id", id);
        var mass = [];
        todo.forEach( function(task) {
            var z = document.createElement("option");
            var unic =  unique(task.categories, mass);
            console.log(unic);
            if(unic){
                z.setAttribute("value", unic);
                var t = document.createTextNode(unic);
                z.appendChild(t);
                document.getElementById(id).appendChild(z);
            }
        });
    }
}

var drowCat = new drowCat();
drowCat.drow(todo,"mySelect");
*/















