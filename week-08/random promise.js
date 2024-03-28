function getData() {
    return new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data from an API)
    setTimeout(() => {
        let num = Math.floor(Math.random() * 10)+1;

        if
    },5000); // Simulating a delay of 2 seconds
    });
    }
    // Consuming the Promise
    getData()
    .then(data => {
    console.log('Data received:', data);
    })
    .catch(error => {
    console.error('Error:', error.message);
    });
console.log(getData());