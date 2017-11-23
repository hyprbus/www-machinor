// return the text in an object array of objects based on id
// [ {id: "xyz", text: "About us"}, ... , {id: "10", text: "Contact information:"}]
// WRITE UNIT TEST FOR THIS ONE!
// element found, element not found, 2 or more elements found

export default function txt(objArray, id) {
  let textObj = objArray.find(element => element.id === id)
  let text = textObj == null ? "content missing for element id: " + id: textObj.text
  return text
}
