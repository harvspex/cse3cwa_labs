displayArray = (inputArray) => {
    // Create an array where each element contains <li>item</li>
    let itemArray = inputArray.map((x) => '<li>' + x + '</li>');

    // Concat all elements of list into one string
    let oneString = itemArray.reduce((acc, x) => acc+x);

    document.getElementById('cool-section').innerHTML =
        '<ul>' + oneString + '</ul>';
}


// Promise example
fetch('https://httpbin.org/image/jpeg') // Start a download
    .then(res => res.blob()) // Get the content blob
    .then(blob => { // Use the content blob
        const img = '<img src="' + URL.createObjectURL(blob) + '">';
        document.body.insertAdjacentHTML('afterend', img);
    })
    .catch(err => console.error(err));