const { kafka } = require("./client");

const consumer = kafka.consumer({ groupId: "test-group" });

const consume = async () => {

    console.log("consumer connecting");
    await consumer.connect();
    console.log("consumer connected");

    // subscribe to a topic
    await consumer.subscribe({
        topic: "rider-updates",
        fromBeginning: true,
    })

    // consume messages
    await consumer.run({
        eachMessage: async ({ topic, partition, message }) => {
            console.log([`TOPIC: ${topic}, PARTITION: ${partition}, message ${message.value.toString()}`]);
        }
    })

}

consume();