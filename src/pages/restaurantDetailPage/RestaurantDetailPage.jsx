import { useNavigate, useParams } from "react-router-dom";
import "./RestaurantDetailPage.css";
import { useContext, useState } from "react";
import { DataContext } from "../../contexts/DataProvider";
import { AddReviewModal } from "../../components/addReviewModal/AddReviewModal";


export function RestaurantDetailPage() {

    const [modal, setModal] = useState(false);

    const navigate = useNavigate();

    const {restaurantId} = useParams();
    // console.log(restaurantId);

    const {dataState} = useContext(DataContext);

    const selectedRestaurant = dataState.restaurantData.find(({id}) => id == restaurantId )

    // console.log(selectedRestaurant)

    const toggleModal = () => setModal(!modal)

    return (
        <>
            <div className="gobackarrow" onClick={() => navigate("/")}>
            <i class="fa-solid fa-arrow-left"></i>
            </div>
            <div className="restaurant-detail-page-container">

                <div className="top-section-restaurant-details">
                    <div className="restaurant-details-section-left">
                        <div className="restaurant-name-dp">
                            {selectedRestaurant.name}
                        </div>
                        <div className="selectedrest-disheslist">
                            {selectedRestaurant.menu.map((dish) => (
                                <span>{dish.name}, </span>
                            ))}
                        </div>
                        <div className="selectedrest-address">
                            {selectedRestaurant.address}
                        </div>
                        <div className="selectedrest-avgrating">
                            Average rating: {selectedRestaurant.averageRating}
                        </div>
                    </div>
                    <div className="addreview-btn-container">
                        <button className="addreview-btn" onClick={toggleModal}>Add Review</button>
                    </div>
                </div>

                {/* Modal */}
                {modal && (
                    <AddReviewModal toggleModal={toggleModal} restaurantId={selectedRestaurant.id}/>
                )}
                

                <div className="reviewslist-container">
                    <div className="reviewheading-dp">
                        <h2>Reviews</h2>
                    </div>
                    {selectedRestaurant.ratings.map((review) => (
                        <div className="review-n-dp-n-revdetails-container">
                            <div className="reviewer-n-review">
                                <div className="avatar-n-name">
                                    <div className="avatar-container">
                                        <img src={review?.pp} alt="" className="avatar" />
                                    </div>
                                    <div className="reviewer-name">
                                        {review.revName}
                                    </div>
                                </div>
                                <div className="reviewtext">
                                    {review.comment}
                                </div>
                            </div>
                            <div className="rating-given">
                                <span ><strong>{review.rating}</strong></span>☆
                            </div>
                        </div>
                    ))}
                </div>

            </div>
        </>
    )
}