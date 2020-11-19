import React, { useState, useEffect } from 'react';


function Timer(props) {

    const [seconds, setSeconds] = useState(0);

    const tick = () => {
        setSeconds(seconds => seconds + 1);
    }

    useEffect(() => {
        console.log(seconds);
        let interval = null;
        interval = setInterval(() => {
            tick();
        }, 1000);
    }, [])

    // componentWillUnmount() {
    //     clearInterval(this.interval);
    // }

    return (
        <div>
            Seconds: {seconds}
        </div>
    );

}

export default Timer