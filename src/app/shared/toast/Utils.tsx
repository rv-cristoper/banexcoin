import ReactDOM from "react-dom"

const createElementToAdd = (idC: string) => {
  if(document.querySelector("#"+idC))
    return
  let d = document.createElement("div")
  d.id = idC
  return document.body.append(d)
}

export const addElementBody = (e: any) => {
  createElementToAdd("output")
  ReactDOM.render(e, document.getElementById("output"))
}

export const removeElementBody = (): void => {
  window.onbeforeunload = function () {
    return null
  }
  document.getElementById("output")?.remove()
}