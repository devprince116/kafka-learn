const { kafka } = require("./client");

const producer = kafka.producer();

const produce = async () => {

    console.log("producer connecting");
    await producer.connect();
    console.log("producer connected");

    // send message;
    await producer.send({
        topic: "rider-updates",
        messages: [{
            partition: 0,
            key: "location", value: JSON.stringify({ name: "joseph", location: "lucknow" })
        }]
    })

    await producer.disconnect();
}

produce();