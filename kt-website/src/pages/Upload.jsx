import "../assets/css/upload.css";

export function Upload() {
	return (
		<div className="upload-page">
			<h1 className="h1">Upload your design image</h1>
			<input type="file" id="image" name="image" className="input-field" />

			<label htmlFor="price">price</label>
			<input type="number" id="price" name="price" className="input-field" />

			<label htmlFor="quantity">quantity</label>
			<input type="number" id="quantity" name="quantity" className="input-field" />

			<label htmlFor="type">type</label>
			<input type="text" id="type" name="type" className="input-field" />

			<label htmlFor="date">date</label>
			<input type="datetime-local" id="date" name="date" className="input-field" />

			<button type="button" className="button button-primary">Upload</button>
		</div>
	)
}