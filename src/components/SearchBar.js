function SearchBar({ onSubmit }) {
    const handleFormSubmit = (event) => {
        event.preventDefault();
        onSubmit('cars')
    }
    return <div>
        <form onSubmit={handleFormSubmit}>
            <input>
            </input>
        </form>
    </div>


}
export default SearchBar;