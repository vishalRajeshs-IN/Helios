// ===============================
// HELIOS Dashboard Charts
// ===============================

// ---------- Graph 1 ----------
// Daily Energy Generation vs Efficiency

const labels1 = ["10%","15%","20%","25%"];

const data1 = {
    labels: labels1,
    datasets: [{
        label: "Daily Energy (kWh)",
        data: [2.5,3.8,5.4,7.2],
        borderColor:"#2563eb",
        backgroundColor:"rgba(37,99,235,.2)",
        fill:true,
        tension:.4
    }]
};

const chart1 = new Chart(document.getElementById("chart1"),{
    type:"line",
    data:data1,
    options:{
        animation:false,
        responsive:true
    }
});
// ---------- Graph 2 ----------
// Solar Power Variation Throughout the Day

const time=[];

for(let i=0;i<20;i++)
    time.push(i);

const power=[];

for(let i=0;i<20;i++)
    power.push(600+Math.random()*150);

const chart2=new Chart(document.getElementById("chart2"),{

type:"line",

data:{

labels:time,

datasets:[{

label:"Power Output",

data:power,

borderColor:"#f59e0b",

backgroundColor:"rgba(245,158,11,.2)",

fill:true,

tension:.35

}]

},

options:{

animation:false,

responsive:true,

plugins:{

legend:{display:false}

}

}

});

// ---------- Graph 3 ----------
// Weekly Energy Generation
const labels3=[];

const energy=[];

for(let i=1;i<=20;i++){

labels3.push(i);

energy.push(45+Math.random()*8);

}

const chart3=new Chart(document.getElementById("chart3"),{

type:"line",

data:{

labels:labels3,

datasets:[{

label:"Weekly Energy",

data:energy,

borderColor:"#10b981",

backgroundColor:"rgba(16,185,129,.2)",

fill:true,

tension:.35

}]

},

options:{

animation:false,

responsive:true

}

});

// ===============================
// Simulated Live Dashboard Values
// ===============================

setInterval(() => {

    const cards = document.querySelectorAll(".card h1");

    if(cards.length >= 8){

        cards[0].innerHTML =
            (7.4 + Math.floor(Math.random()*6)) + " V";

        cards[1].innerHTML =
            (1 + Math.random()).toFixed(2) + " A";

        cards[2].innerHTML =
            (1 + Math.floor(Math.random()*15)) + " W";

        cards[3].innerHTML =
            (92 + Math.floor(Math.random()*7)) + "%";

        cards[4].innerHTML =
            (0.3 + Math.random()*2).toFixed(2) + " kWh";

        cards[5].innerHTML =
            (5 + Math.floor(Math.random()*10)) + " kWh";

        cards[6].innerHTML =
            (96 + Math.floor(Math.random()*4)) + "%";

        cards[7].innerHTML =
            (30 + Math.floor(Math.random()*6)) + "°C";

    }

},3000);
setInterval(()=>{

// Graph 2

time.push("");

time.shift();

power.push(650+Math.random()*250);

power.shift();

chart2.update();


// Graph 3

labels3.push("");

labels3.shift();

energy.push(48+Math.random()*10);

energy.shift();

chart3.update();

},1000);