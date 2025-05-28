interface SearchBarProps {
    searchTerm: string;
    onSearchChange: ( term: string ) => void;
}

const SearchBar: React.FC<SearchBarProps> = ({ searchTerm, onSearchChange}) => {
    const handleChange = ( event: React.ChangeEvent<HTMLInputElement>) => {
        onSearchChange(event.target.value);
    }

    return (
        <header className="searchBar" style={{ marginBottom: '20px' }}>
            <div>
            <h1>Mini E-commerce</h1>
            <input 
            type="text"
            id="search"
            value={searchTerm}
            onChange={handleChange}
            placeholder="Escribe para buscar..."
            />
            </div>
        </header>

    )
}

export default SearchBar;