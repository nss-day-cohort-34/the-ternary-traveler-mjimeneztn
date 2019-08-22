import data from "./data.js"
import poiEditForm from "./edit.js"
import poiList from "./list.js"
const interests = {
 poiBuilder(interest) {
   let interestArticle = document.createElement("article")
   interestArticle.setAttribute("id", `interest--${interest.id}`)
   let poiName = document.createElement("h2")
   poiName.textContent = `${interest.name}, ${interest.place.name}`
   let poiDescriptionHeader = document.createElement("h3")
   poiDescriptionHeader.textContent = "Description"
   let poiDescription = document.createElement("p")
   poiDescription.textContent = interest.description
   let poiCostHeader = document.createElement("h3")
   poiCostHeader.textContent = "Cost"
   let poiCost = document.createElement("p")
   poiCost.textContent = interest.cost
   let poiReviewHeader = document.createElement("h3")
   poiReviewHeader.textContent = "Review"
   let poiReview = document.createElement("p")
   poiReview.textContent = interest.review
   let poiPlaceHeader = document.createElement("h3")
   poiPlaceHeader.textContent = "Place"
   let poiPlace = document.createElement("p")
   poiPlace.textContent = interest.place.name
   console.log(interest.place.name)
   // Edit functionality
   let editPoiButton = document.createElement("button")
   editPoiButton.textContent = "Edit"
   editPoiButton.addEventListener("click", () => {
     let articleId = event.target.parentNode.id
     let interestId = articleId.split("--")[1]
     data.getInterests(interestId)
       .then(response => {
         poiEditForm.createAndAppendForm(articleId, response)
       })
   })
   let deleteConfirmation = () => {
    let confirmationValue = confirm("Are you sure you want to delete this place?")
     if (confirmationValue == true) {
         let poiId = event.target.parentNode.id.split("--")[1]
         data.deleteInterest(poiId)
           .then(response => {
             poiList.outputPoi()
           })
       } else {
       return false;
     }
   }
   let deletePoiButton = document.createElement("button")
   deletePoiButton.textContent = "Delete"
   deletePoiButton.addEventListener("click", deleteConfirmation)

   interestArticle.appendChild(poiName)
   interestArticle.appendChild(poiDescriptionHeader)
   interestArticle.appendChild(poiDescription)
   interestArticle.appendChild(poiCostHeader)
   interestArticle.appendChild(poiCost)
   interestArticle.appendChild(poiReviewHeader)
   interestArticle.appendChild(poiReview)
   interestArticle.appendChild(editPoiButton)
   interestArticle.appendChild(deletePoiButton)
   return interestArticle
}}

   export default interests