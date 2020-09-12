import React from 'react';

const TabHeader = props => {

    const { index, selected, handleClick } = props;

    // defining objects for the inline style on selected property:
    const selectedStyle = {
        backgroundColor: "green"
    };
    const notSelectedStyle = {
        backgroundColor: "grey"
    };

    return(
        <div>
            {/* defined button for tabheaders with inline style previously defined (above) which are inline style objects: now there is only one pair of curly braces since the others are taken from the object style we are passing */}
            {/* using a ternary operator to define this selected | notSelected style */}
            <button
            className="btn-lg m-2"
            style={selected ? selectedStyle : notSelectedStyle}
            // add onClick event on the button with an anonymous function because we want to give it an argument (index) defined on the function with the parameter(clickedIndex)        
            onClick={() => handleClick(index)}
            >Tab # {index}    
            </button>
        </div>
    );
}

export default TabHeader;