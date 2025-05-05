
const Options = ({groups}) => {


    return<>
    {(groups.length == 1)?
    //1 option group
    <>
   
   {groups[0].map((group, index) => {
    return     <option key={index} value={group.value} disabled={group.disabled}>
        {group.label}
        </option>
   }
   
)}      
             
            
    </>
    :
    
    <>

    {groups.forEach((group, index) => {
        return <optgroup key={index} label={group.label}>
        {group.options.map((option, index) => {
            return <option key={index} value={option.value} disabled={option.disabled}>
            {option.label}
            </option>
        })}
        </optgroup>
    }    )
}                   

    </>
    }

    </>
}
export default Options;