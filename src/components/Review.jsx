import { BsFillPersonFill, BsHandThumbsDownFill, BsHandThumbsUpFill } from "react-icons/bs";
import AReview from "./AReview";
import axios from "axios";
import { useState } from "react";


export default function Review() {

    const baseURL = "http://property.reworkstaging.name.ng/v1";
    const [comment, setComment] = useState('');
    const [err, setErr] = useState(false);

    const handleReviews = async () => {
        if (comment === '') {
            setErr(true);
        } else {
            const postcomment = {
                property_id: property_id,
                user_id: user_id,
                text: comment
            }
            console.log(postcomment);
            try {
                const comment = await axios.post(`${baseURL}/reviews`)
                console.log(comment.data.data);
            } catch (error) {

            }
        }
    }

    return (
        <>
            <div className="rounded-xl shadow-lg h-auto p-5 mt-10 border-1">
                <h1 className="text-xl font-bold block text-left mb-2">Comment Section</h1>
                <div className="block">
                    {err === true && comment === '' ? <span className="text-red-600">Comment Required</span> : null}
                    <textarea className="w-full h-32 rounded-md p-4 bg-gray-100 text-black rounded-xl" placeholder="Add a Comment" value={comment} onChange={(e) => setComment(e.target.value)}>
                    </textarea>
                    <button className="bg-orange-500 hover:bg-orange-600 my-5 w-full h-11 rounded-xl text-white font-semibold " onClick={handleReviews}>
                        Add Comment
                    </button>
                </div>
                <div className="text-left">
                    <AReview name="Kingsley Owolabi" comment="Tour was nice, still negotiating" />
                </div>
            </div>
        </>
    )
}