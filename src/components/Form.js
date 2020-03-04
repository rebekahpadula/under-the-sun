import React from "react";

class Form extends React.Component {

    shouldComponentUpdate(nextProps) {}
    // built in functions dont need to be bound
    // arrow functions bind automatically
    // regular functions need to be bound

    render() {
        return (
                                        // does this work or do i need a <a> ?  
            <Form className="form" action="mailto:rebekah.adair@yahoo.com" method="post">
                <label for="name">Name</label>
                <input type="text" id="name" required/>

                <label for="email">Email</label>
                <input type="text" id="email" required/>

                <label for="phone">Phone</label>
                <input type="tel" id="phone" required/>

                <label for="date">Event date</label>
                <input type="date" id="date" required/>

                <label for="location">Location of event</label>
                <input type="text" id="location" required/>

                <label for="type">What type of event are you planning?</label>
                <select type="text" id="type" required>
                    {/* best practice for this termonology? */}
                    <option value="Make a selection">Make a selection</option>
                    <option value="Corporate event">Corporate event</option>
                    <option value="Private or social event">Private or social event</option>
                    <option value="Association, conference, or convention event">Association, conference, or convention event</option>
                    <option value="School or university event">School or university event</option>
                    <option value="Fair or festival">Fair or festival</option>
                    <option value="Performing arts event">Performing arts event</option>
                    <option value="Bar or nightclub event">Bar or nightclub event</option>
                    <option value="Birthday party">Birthday party</option>
                    <option value="Wedding">Wedding</option>   
                    <option value="Other">Other</option>
                </select>
                <label for="more">Tell us more</label>
                <textarea id="more"/>
                
                <input type="submit" value="Send Inquiry"/>

            </Form>
        );
    }
}

export default Form;