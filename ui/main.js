console.log('Loaded!');

counter = document.getElementById("counter");

counter.onclick = function() {
    count = document.getElementById("count");
    count.value = count.value + 1;
    count.innerHTML = count.value;
}