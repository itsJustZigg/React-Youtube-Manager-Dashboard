import { TextField } from "@mui/material"
import { Autocomplete } from "@mui/material"
import { useState } from "react"
import { useOutletContext } from "react-router-dom"


export default function SearchBar({tableData, handleOpenModal}){
    
    
    const [searchValue, setSearchValue] = useState('')
    
    function findProjectId(){
        const foundProject = tableData.find((project) => searchValue === project.projectName)

        if(foundProject){
            handleOpenModal(foundProject.id)
        }
    }

    return (
        <div className="searchbar">
        <Autocomplete 
        id="searchbar-autocomplete"
        onChange={(event, newSearch) => setSearchValue(newSearch)}
        onKeyDown={(e) => {
            if(e.key === 'Enter'){
                e.defaultMuiPrevented = true
                findProjectId()
            }
        }}
        freeSolo
        options={tableData.map((option) => option.projectName)}
        renderInput={(params) => 
        <TextField  {...params} 
            label="Search for a Project..." size="small" 
            helperText="Search for a project by video title"
            sx={{"& .MuiOutlinedInput-root": {
                borderRadius: "12px", 
                color: "var(--text-primary)", 
            "& fieldset": {
                borderColor: "rgb(46, 51, 71)", 
            },
            "&:hover fieldset": {
                borderColor: "rgb(46, 51, 71)",
            },

            "&.Mui-focused fieldset": {
                borderColor: "rgb(25, 118, 210)",
                borderWidth: "1px",
            },
            
        },
            "& .MuiAutocomplete-clearIndicator": {
                color: "var(--text-primary)",
            },
            "& .MuiOutlinedInput-input": {
                padding: "0 8px",
            },
            "& .MuiFormLabel-root": {
                color: "var(--text-primary)",
            },
            "& .MuiFormHelperText-root":{
                position: 'absolute',
                width: 1,
                height: 1,
                padding: 0,
                margin: -1,
                overflow: 'hidden',
                clip: 'rect(0, 0, 0, 0)',
                whiteSpace: 'nowrap',
                border: 0,
            }
        }}  
        />}
        />
        </div>
    )
}