import { useState } from "react"

export default function ThemeSelector({handleThemeChange}){
    
    return(
        <>
        <select name="themes"
        defaultValue="os-default" 
        aria-label="select a theme" 
        className="theme-selector"
        onChange={handleThemeChange}>
            <option value="light">Light Mode</option>
            <option value="dark">Dark Mode</option>
            <option value="os-default">OS Default</option>
        </select>
        </>
    )
}