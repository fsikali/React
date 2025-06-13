/* 
--- Select
- A drop down list, or a select box, in React is also a bit different from HTML
- In HTML, the selected value in the drop down list was defined with the selected attribute:
- In React, the selected value is defined with a value attribute on the select tag:
- Example: A simple select box, where the selected value "Volvo" is initialized in the constructor:

- By making these slight changes to <textarea> and <select>, React is able to handle all input elements
  in the same way.
*/

function MyForm() {
    const [myCar, setMyCar] = useState("Volvo"); 

    const handleChange = (event) => {
        setMyCar(event.target.value)
    }

    return (
        <form>
            <select value={myCar} onChange={handleChange}>
                <option value="Ford">Ford</option>
                <option value="Volvo">Volvo</option>
                <option value="Fiat">Fiat</option>
            </select>
        </form>
    )
}