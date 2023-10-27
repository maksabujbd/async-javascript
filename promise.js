const hasMeeting = true;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: 'Technical Meeting',
            location: 'Google Meet',
            time: '10:00 PM'
        };
        resolve(meetingDetails);
    } else {
        reject(new Error("meeting already scheduled!"));
    }
});

meeting
    .then((res)=>{
        //resolved data
        console.log(JSON.stringify(res));
    })
    .then()
    .catch((err)=>{
        // rejected data
        console.log(err.message);
    })

console.log("Hello");