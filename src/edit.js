import data from "./data.js"
import poiList from "./list.js"
import interests from "./interest.js"
const poiEditForm = {
 // This module will build an edit form and append it to the DOM. The form will contain input fields with existing values from the API and an Update button. The user can edit the the values in the input fields. An event listener on the Update button will handle taking the new values entered by the user and calling the API to update the data.
 createAndAppendForm (articleId, interestObjToEdit) {
   let formHeader = document.createElement("h4")
   formHeader.textContent = "Update or review this Point of Interest"
   let poiCostField = document.createElement("p")
   let poiCostLabel = document.createElement("label")
   poiCostLabel.textContent = "Cost"
   let poiCostInput = document.createElement("input")
   poiCostInput.value = interestObjToEdit.cost
   poiCostField.appendChild(poiCostLabel)
   poiCostField.appendChild(poiCostInput)
   let poiReviewField = document.createElement("p")
   let poiReviewLabel = document.createElement("label")
   poiReviewLabel.textContent = "Review"
   poiReviewLabel.textContent = "Review"
   poiReviewLabel.setAttribute("for", "poi__review")
   let poiReviewInput = document.createElement("input")
   poiReviewInput.value = interestObjToEdit.review
   poiReviewInput.setAttribute("id", "poi__review")
   poiReviewInput.setAttribute("name", "poi__review")
   poiReviewField.appendChild(poiReviewLabel)
   poiReviewField.appendChild(poiReviewInput)
   let updateButton = document.createElement("button")
   updateButton.textContent = "Update"

   updateButton.addEventListener("click", () => {
     let editedPoi = {
       cost: poiCostInput.value,
       review: poiReviewInput.value
     }
     console.log(editedPoi)
     data.patchExistingInterest(interestObjToEdit.id, editedPoi)
     .then(response => {
       poiList.outputPoi()
     })
   })
   let poiArticle = document.getElementById(`${articleId}`)


   while (poiArticle.firstChild) {
     poiArticle.removeChild(poiArticle.firstChild);
   }
   poiArticle.appendChild(formHeader)
   poiArticle.appendChild(poiCostField)
   poiArticle.appendChild(poiReviewField)
   poiArticle.appendChild(updateButton)
 }
}
export default poiEditForm