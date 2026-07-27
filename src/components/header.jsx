import SearchBar from "./searchbar";
import ThemeSelector from "./themeSelector";

export default function Header({tableData, handleOpenModal, pageHeader}){

    return (
        <header className="header">
            <h2>{pageHeader}</h2>
            <SearchBar tableData={tableData} handleOpenModal={handleOpenModal}/>
            <ThemeSelector />
        </header>
    )
}