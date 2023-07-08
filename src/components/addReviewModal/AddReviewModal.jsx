import { useContext, useState } from "react";
import "./AddReviewModal.css";
import { ACTIONS, DataContext } from "../../contexts/DataProvider";

export function AddReviewModal({toggleModal}) {

    const {dispatchData} = useContext(DataContext);

    const {ADD_REVIEW} = ACTIONS;

    const [formdata, setFormdata] = useState({rating: "", comment: "", revName: "Reviewer Name", pp: ""})

    const changeHandler = (e) => setFormdata((formdata) => setFormdata({...formdata, [e.target.name]: e.target.value}) )

    console.log(formdata)

    return (
        <>
        <div className="addreview-modal-container">
            <div className="overlay"></div>
            <div className="modalcontent-container">
            <div className="closemodal"><i class="fa-solid fa-xmark" onClick={toggleModal}></i></div>
                <div className="addreviewheading">
                    <h2>Add Your Review</h2>
                </div>
                <form>
                    <div className="rating-input">
                        <span>Rating:</span>
                        <select name="rating" id="" onChange={(e) => changeHandler(e) }>
                            <option value="">Selct Rating</option>
                            <option value="1">1</option>
                            <option value="2">2</option>
                            <option value="3">3</option>
                            <option value="4">4</option>
                            <option value="5">5</option>
                        </select>
                    </div>
                    <div className="commentinput-container">
                        Comment: <input type="text" className="comment" name="comment" onChange={(e) => changeHandler(e)}/>
                    </div>
                    <div className="submit-container">
                        <button type="submit">Submit</button>
                    </div>
                </form>
            </div>
        </div>
        </>
    )
}