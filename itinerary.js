fetch("data/itinerary.json")
2
.then(r => r.json())
3
.then(data => {
4
 
5
buildSidebar(data);
6
loadDay(data.cities[0].days[0]);
7
 
8
});
9
 
10
function buildSidebar(data) {
11
 
12
const sidebar =
13
document.getElementById("sidebar");
14
 
15
data.cities.forEach(city => {
16
 
17
const cityHeader =
18
document.createElement("h3");
19
 
20
cityHeader.textContent =
21
city.name.toUpperCase();
22
 
23
sidebar.appendChild(cityHeader);
24
 
25
city.days.forEach(day => {
26
 
27
const item =
28
document.createElement("div");
29
 
30
item.className =
31
"day-nav";
32
 
33
item.innerHTML = `
34
<strong>DAY ${day.day}</strong>
35
<div>${day.title}</div>
36
`;
37
 
38
item.onclick =
39
() => loadDay(day);
40
 
41
sidebar.appendChild(item);
42
 
43
});
44
 
45
});
46
 
47
}
48
 
49
function loadDay(day){
50
 
51
document.getElementById("content")
52
.innerHTML = `
53
<h1>${day.title}</h1>
54
<p>${day.date}</p>
55
`;
56
 
57
}
