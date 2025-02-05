import React from 'react';
import Image from "next/image";

const About = () => {
    return (
        <div>
            <h1>About</h1>
            <Image
                className="dark:invert"
                src="https://cdn.pixabay.com/photo/2018/08/04/11/30/draw-3583548_1280.png"
                alt="Next.js logo"
                width={380}
                height={338}
                priority
            />
        </div>
    );
}

export default About;
