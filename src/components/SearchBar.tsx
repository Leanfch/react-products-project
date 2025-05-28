interface SearchBarProps {
    searchTerm: string;
    onSearchChange: ( term: string ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange}) => {
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    }

    return (
        <section className="searchBar" style={{ marginBottom: '20px' }}>
            <label htmlFor="search">Buscar producto:</label>
            <input 
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Escribe para buscar..."
        /></section>
    )
}

export default SearchBar;