const hasMeeting = false;

const meeting = new Promise((resolve, reject) => {
    if (!hasMeeting) {
        const meetingDetails = {
            name: "Technical Meeting",
            location: "Google Meet",
            time: "10:00 PM"
        };
        resolve(meetingDetails);
    } else {
        reject(new Error(`Meeting has already been scheduled`));
    }
});

const addToCalendar = (meetingDetails) => {
    return Promise.resolve(`${meetingDetails.name} has been scheduled on ${meetingDetails.time} at ${meetingDetails.location}`);
}

async function myMeeting() {
    try {
        const meetingDetails = await meeting;
        return await addToCalendar(meetingDetails);
    } catch (error) {
        return `Something went wrong.`;
    }
}

myMeeting()
    .then(res => console.log(res))
    .catch(err => console.log(err));