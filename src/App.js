import React, { useState } from 'react'
import { CSSTransition, TransitionGroup } from 'react-transition-group'
import './App.css'
import Item from './Item/Item'

function App() {

	const [data, setData] = useState([
		{ id: 1, text: 'End this project', editMode: false},
		{ id: 2, text: 'Wash the car', editMode: false},
		{ id: 3, text: 'Go to the gym', editMode: false},
    { id: 4, text: 'Buy some foods', editMode: false},
		{ id: 5, text: 'Go to the gym', editMode: false}
	])

	const [input, setInput] = useState('')

	const handleClick = () => {
		setData([...data, { id: Date.now(), text: input, editMode: false }])
		setInput('')
	}

	const handleDelete = (id) => {
		const newList = data.filter((item) => id !== item.id)
		setData(newList)
	}

	const handleChangeText = (id) => {
    const newList = data.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          ...item,
          editMode: true,
        };
        return updatedItem;
      }
      return item;
    });
    setData(newList);
	}

  const handleSave = (id, input) => {
		const newList = data.map((item) => {
      if (item.id === id) {
        const updatedItem = {
          id:id,
          text: input,
          editMode: false,
        };
        return updatedItem;
      }
      return item;
    });
    setData(newList);
	}

	return (
		<div className='App'>
			<h1 className='title'>Todolist</h1>
			<input
      className='input'
				type='text'
				placeholder='What to do?'
				value={input}
				onChange={(e) => setInput(e.target.value)}
			/>
			<button className='btn' onClick={() => handleClick()}>Add</button>
			<TransitionGroup>
				{data.map((item) => (
					<CSSTransition 
					key={item.id} 
					timeout={500}
					classNames='animation'
					>
						<Item
							item={item}
							handleDelete={handleDelete}
							handleChangeText={handleChangeText}
							handleSave={handleSave}
						/>
					</CSSTransition>
				))}
			</TransitionGroup>
		</div>
	)
}

export default App
