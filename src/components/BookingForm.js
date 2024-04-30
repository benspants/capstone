import React, { useState } from "react";

const BookingForm = (props) => {
    const [date, setDate] = useState("");
    const [times, setTimes] = useState("");
    const [guests, setGuests] = useState("");
    const [occasion, setOccasion] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        props.SubmitForm(e)
    }
    const handleChange = (e) =>{
        setDate(e);
        props.dispatch(e);
    }
   return(
   <header>
    <section>
        <form onSubmit={handleSubmit}>
            <fieldset>
                <div>
                    <label htmlFor="book-date">Choose Date:</label>
                    <input id="book-date" value={date} onChange={(e) => handleChange(e.target.value)} type="date" required/>
                </div>

                <div>
                <label htmlFor="book-time" value={times}
                onChange={(e) => setTimes(e.target.value)}>Choose Time:</label>
                <select id="book-time">
                    <option value="">Select a time</option>
                    {props.availableTimes.availableTimes.map
                        (availableTimes => {return <option key ={availableTimes} required>(availableTimes)</option>})
                    }
                </select>
                </div>

                <div>
                    <label htmlFor="book-guests">Number of Guests:</label>
                    <input type="number" id="book-guests" min="1" value={guests} onChange={(e) => setGuests(e.target.value)} placeholder={0} max={10} required></input>
                </div>

                <div>
                    <label htmlFor="book-occasion">Occasion</label>
                    <select id="book-occasion" key={occasion} value={occasion}
                    onChange={e => setOccasion(e.target.value)}>
                        <option value="">Select an Option</option>
                        <option>Birthday</option>
                        <option>Anniversary</option>
                        <option>Engagement</option>
                        <option>No Occasion</option>
                    </select>
                </div>

                <div className="btnReceive">
                    <input aria-label="On Click" type={"submit"} value={"Make your reservation"}></input>
                </div>
            </fieldset>
        </form>
    </section>
   </header>
   );
};
export default BookingForm