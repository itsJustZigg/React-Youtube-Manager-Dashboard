import SearchBar from "./searchbar";
import ThemeSelector from "./themeSelector";

export default function Header({handleThemeChange, tableData, handleOpenModal, pageHeader}){

    return (
        <header className="header">
            <h1>{pageHeader}</h1>
            <SearchBar tableData={tableData} handleOpenModal={handleOpenModal}/>
            <ThemeSelector handleThemeChange={handleThemeChange}/>
        </header>
    )
}