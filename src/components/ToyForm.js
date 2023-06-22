import React, {useState} from "react";

function ToyForm() {

  const blankToy = {
    id: "",
    name: "",
    image: "",
    likes: "0"
  }

  const [formData, setFormData] = useState(blankToy)

  const handleData = e => {
    setFormData({...formData, [e.target.name]: e.target.value})
  }

  console.log('formData: ', formData)

  const handleSubmit = (e) => {
    e.preventDefault()

    //POST formData
  }

  return (
    <div className="container">
      <form className="add-toy-form" onSubmit={handleSubmit}>
        <h3>Create a toy!</h3>
        <input onChange={handleData}
          type="text"
          name="name"
          placeholder="Enter a toy's name..."
          className="input-text"
        />
        <br />
        <input onChange={handleData}
          type="text"
          name="image"
          placeholder="Enter a toy's image URL..."
          className="input-text"
        />
        <br />
        <input
          type="submit"
          name="submit"
          value="Create New Toy"
          className="submit"
        />
      </form>
    </div>
  );
}

export default ToyForm;
