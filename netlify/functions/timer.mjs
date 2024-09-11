// /netlify/functions/timer.mjs

const timers = {
    fermi: { duration: 60 * 5, endTime: null }, // 5 minutes for Fermi Problems
    calculus: { duration: 60 * 10, endTime: null }, // 10 minutes for Calculus Round
    proof: { duration: 60 * 15, endTime: null } // 15 minutes for In Pursuit of Proof
};

exports.handler = async (event, context) => {
    // Initialize or update timers
    Object.keys(timers).forEach(key => {
        if (!timers[key].endTime) {
            // Start the timer if it hasn't been started yet
            timers[key].endTime = Date.now() + timers[key].duration * 1000;
        }
    });
    
    // Calculate remaining time for each timer
    const remainingTimes = {};
    Object.keys(timers).forEach(key => {
        remainingTimes[key] = Math.max(timers[key].endTime - Date.now(), 0);
    });

    return {
        statusCode: 200,
        body: JSON.stringify(remainingTimes),
    };
};
