console.log('Loaded!');

counter = document.getElementById("counter");
count = parseInt(document.getElementById("count").value);

counter.onclick = function() {
    count = count + 1;
    count.innerHTML = count;
};