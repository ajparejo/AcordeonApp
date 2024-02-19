import { useState } from "react";
import data from './data.js'

export const Acordeon = () => {

    const [open, setOpen] = useState(null);
    const [multiSelect, setMultiSelect] = useState(false);
    const [selections, setSelections] = useState([]);

    function handleSelection(getCurrentId) {
        setOpen(getCurrentId === open ? null : getCurrentId)
    }

    function handleMultiSelection(getCurrentId) {
        let newSelections = [...selections];
        const findIndex = newSelections.indexOf(getCurrentId);

        if(findIndex === -1) {
            newSelections.push(getCurrentId);
        } else {
            newSelections.splice(findIndex, 1);
        }
        setSelections(newSelections);
    }

  return (
    <div className="wrapper">
        <button onClick={() => setMultiSelect(!multiSelect)}>Enable Multiple Selections</button>
        <div className="container">
            {
                data && data.length > 0 ?
                data.map((item) => (
                    <div key={item.id} className='item'>
                        <div onClick={multiSelect ? () => handleMultiSelection(item.id) : () => handleSelection(item.id)} className='title'>
                            <h3>{item.question}</h3>
                            <span>+</span>
                            {
                                open === item.id || selections.indexOf(item.id) !== -1 ?
                                <div className="answer">{item.answer}</div>
                                : null
                            }
                        </div>
                    </div>
                ))
                : null
            }
        </div>
    </div>
  )
}
