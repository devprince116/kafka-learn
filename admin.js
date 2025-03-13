const { kafka } = require("./client");

// create a function to connect admin 
const init = async () => {
    const admin = kafka.admin();
    console.log("kafka connecting");
    await admin.connect();
    console.log("kafka connected");


    // create a topic
    await admin.createTopics({
        topics: [{ topic: "rider-updates", numPartitions: 2, }],
    })

    console.log("topic created");
    await admin.disconnect();

}

// call the init function ;
init()
