class dtu{
    constructor(name,rollno,marks)
    {
        this.name = name;
        this.roll = rollno;
        this.sub_marks = marks;
    }
}
var detail = [
    {
        name:"Aakash",
        roll:"5",
        sub_marks:"82.5"
    },
    {
        name:"Nimisha",
        roll:"26",
        sub_marks:"65"
    },
    {
        name:"Sameer",
        roll:"37",
        sub_marks:"43"
    }
]
var occ = [
    {
        name:"Ankit",
        roll:"Phd-Teacher",
        sub_marks:"Maths"
    },
    {
        name:"Jasraj",
        roll:"Asst.Professor",
        sub_marks:"CSE"
    },
    {
        name:"Payal",
        roll:"Professor",
        sub_marks:"Maths"
    }
]
var stu = new dtu("Tanmay","45","98.5");
detail.push(stu);
addToTable(1);
var teach = new dtu("Rinku","HOD","Physics");
occ.push(teach);
addToTable(2);
function addNew(j){
    if(j==1)
    {
        console.log("neew");
        var get = [];
        for(let i = 0;i<3;i++)
        {
            get[i] = document.querySelectorAll(".student")[i].value;
            if(!get[i])
            {
                alert("Enter Value in all the fields");
                return;
            }
        }
        var val = new dtu(""+get[0]+"",""+get[1]+"",""+get[2]+"");
        detail.push(val);
        addToTable(j);
        for(let i=0;i<3;i++)
        {
            document.querySelectorAll(".student")[i].value = "";
        }
    }
    else if(j==2)
    {
        console.log("e");
        var get = [];
        for(let i = 0;i<3;i++)
        {
            get[i] = document.querySelectorAll(".teacher")[i].value;
            if(!get[i])
            alert("Enter Value in all the fields");
        }
        var val = new dtu(""+get[0]+"",""+get[1]+"",""+get[2]+"");
        occ.push(val);
        addToTable(j);
        for(let i=0;i<3;i++)
        {
            document.querySelectorAll(".teacher")[i].value = "";
        }
    }
   
}

function onlyCap(l){
    if(l==1)
    {
        var table = document.querySelector("#student");

        var str = "<caption>👨‍🎓 Student's Data</caption><tr><th>Name</th><th>Roll-no</th><th>Marks</th></tr>";
        table.innerHTML=str;
    }
    else if(l==2)
    {
        var table = document.querySelector("#teacher");

        var str = "<caption>👩‍🏫 Teacher's Data</caption><tr><th>Teacher's Name</th><th>Profession</th><th>Subject</th></tr>";
        table.innerHTML=str;
    }

}
function addToTable(k){
    if(k==1)
    {
        var table = document.querySelector("#student");
    
        console.log("hello");
        var str = "<caption>👨‍🎓 Student's Data</caption><tr><th>Name</th><th>Roll-no</th><th>Marks</th></tr>";
        for(var i = 0;i<detail.length;i++)
        {
            str+="<tr><td>"+detail[i].name+"</td>"+"<td>"+detail[i].roll+"</td>"
            +"<td>"+detail[i].sub_marks+"</td></tr>";
        }
        table.innerHTML=str;
    }
    else if(k==2)
    {
        var table = document.querySelector("#teacher");
    
        console.log("ho");
        var str = "<caption>👩‍🏫 Teacher's Data</caption><tr><th>Teacher's Name</th><th>Profession</th><th>Subject</th></tr>";
        for(var i = 0;i<occ.length;i++)
        {
            str+="<tr><td>"+occ[i].name+"</td>"+"<td>"+occ[i].roll+"</td>"
            +"<td>"+occ[i].sub_marks+"</td></tr>";
        }
        table.innerHTML=str;
    }
    
}

function shuf(i)
{
    if(i<=2)
    {
        setTimeout(function(){
            document.querySelectorAll(".data-div")[i].classList.remove("hide");
            document.querySelectorAll(".data-div")[i].classList.add("visible");
            document.querySelectorAll(".data-div")[0].classList.add("hide");
            document.querySelector("#one").checked = false;
            document.querySelector("#two").checked = false;
        },100);
    }
    else if(i==3)
    {
        setTimeout(function(){
            document.querySelectorAll(".data-div")[0].classList.remove("hide");
            document.querySelectorAll(".data-div")[0].classList.add("visible");
            document.querySelectorAll(".data-div")[1].classList.add("hide");
            document.querySelectorAll(".data-div")[2].classList.add("hide");
        },100);
    }
   
   
}

var counta = 0;
var countb = 0;
function show(i)
{
    if(i==0)  
    {
        setTimeout(function(){
            var val = document.querySelector("#student");
            if(counta%2 != 0)
            {
                val.classList.remove("hide");
                $("#student").slideUp("slow").slideDown(10);
                onlyCap(1);
                
            }
            else{
                val.classList.add("hide");
                val.classList.remove("visible");
                val.classList.remove("hide");
                addToTable(1);
            }
            
        },100);
        counta++;
    }
    else if(i==1)
    {
        setTimeout(function(){
            if(countb%2 != 0)
            {
                $("#teacher").slideUp("slow").slideDown(10);
                onlyCap(2);
            }
            else 
            {
                onlyCap(2);
                $('#teacher').slideDown(100);
                addToTable(2);
            }
        },100);
        countb++;
    }  
    
}

