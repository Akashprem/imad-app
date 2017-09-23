console.log('Loaded!');

counter = document.getElementById("counter");
count = document.getElementById("count");

counter.onclick = function() {
    count = count + 1;
    count.innerHTML = count;
}