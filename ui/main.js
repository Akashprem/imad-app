console.log('Loaded!');

counter = document.getElementById("counter");

counter.onclick = function() {
    count = document.getElementById("count").value;
    count = count + 1;
    document.getElementById("count").innerHTML = count;
};