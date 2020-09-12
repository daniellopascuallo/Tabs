import React, { useState } from 'react';
import TabHeader from './components/TabHeader';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  const [tabs, setTabs] = useState([
    { index: 0, text: "hello from tab 0", selected: true },
    { index: 1, text: "hello from tab 1", selected: false },
    { index: 2, text: "hello from tab 2", selected: false }
  ])

  const handleClick = (clickedIndex) => {
    console.log(`You clicked tab number ${clickedIndex}`);
    // map through our tabs state
    tabs.map((t, i) => {
      // check if the index we have clicked down (clickedIndex) is equal to the index we are looking at in this loop (i), and if so we want to setState to true:
      if (clickedIndex === i) {
        // we need a temporary copy of t (object we clicked) called tempT for example
        let tempT = t;
        // set the selected property to be true for this object we clicked down, this tempT
        tempT.selected = true;
        // update the state (setTabs) of all the array (we have to give it the whole array, we have to update the state of all the array) with all what we want: setTabs()
        // we have an array so square brackets[]:
        // 1) Add everything at the beginning: ...spread operator to include everything from the beginning up until the point where we are clicking (but NOT included), so right before the tab we clicked, right before tempT.
        // 2) then we add our changed tab: tempT, the temporary copy of the item we clicked down
        // 3) then we add everything else at the end with .concat
        return setTabs([...tabs.slice(0, i), tempT,].concat(tabs.slice(i + 1)))
      }
      // else: do the same but false:
      else {
        let tempT = t;
        tempT.selected = false;
        return setTabs([...tabs.slice(0, i), tempT,].concat(tabs.slice(i + 1)))
      }
    })
  }

  // // refactoring & return statement added for handleClick:
  // const handleClick = (clickedIndex) => {
  //   console.log(`You clicked tab number ${clickedIndex}`);
  //   tabs.map((t, i) => {
  //     let tempT = t;
  //     if (clickedIndex === i) {
  //       tempT.selected = true;
  //     }
  //     else {
  //       tempT.selected = false;
  //     }
  //     return setTabs([...tabs.slice(0, i), tempT,].concat(tabs.slice(i + 1)))
  //   })
  // }


  return (
    <div className="container text-center">
      <div className="row d-flex justify-content-center my-4">
        {
          tabs.map((t, i) => {
            return <TabHeader
              index={i}
              selected={t.selected}
              key={i}
              handleClick={handleClick}
            />
          })
        }
      </div>

      <div className="row my-4" style={{ height: "200px" }}>
        <div className="col-4 mx-auto">
          {
            tabs.map((t, i) => {
              return t.selected ? <h2 key={i}>{t.text}</h2> : "";
            })
          }
        </div>
      </div>
    </div>
  );
}

export default App;
