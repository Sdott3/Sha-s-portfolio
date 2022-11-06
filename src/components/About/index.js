import React from "react";
import avatar from "../../assets/images/coder.jpg";

function About () {

    return(
        <section>
            <h1 className="pt-6 pb-6 ml-3 text-xl text-center">
                About Me
            </h1>
            <img src={avatar}  class="w-24 h-24 md:w-48 md:h-auto md:rounded-none rounded-full mx-auto" alt="" width="384" height="512"></img>
            <div className="pt-6 md:p-8 text-center md:text-left space-y-4">
                <p class="text-lg font-small">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus 
                ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean 
                sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. 
                In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis.
                In hac habitasse platea dictumst.
                </p>
            </div>
        </section>
    );
}

export default About; 