import React, { useState } from 'react'

import styles from './Item.module.css'
import remove from '../img/remove.png'
import edit from '../img/edit.png'
import accept from '../img/accept.png'
import { Data } from '../App'

interface ItemProps {
  item: Data;
  handleDelete: (id: number) => void;
  handleChangeText:(id: number) => void;
  handleSave:(id: number, input:string) => void;
}

const Item = ({item, handleDelete, handleChangeText, handleSave}:ItemProps) => {

  const { id, text, editMode} = item

  const [input, setInput] = useState(text)

  return (
    <div className={styles.item}>
        <div className={styles.title}>
          { editMode ? <input className={styles.input} type="text" value={input} onChange={(e)=>setInput(e.target.value)}/> : <span>{text}</span>}
          </div>
        <div className={styles.itemBtns}>
            <div className={styles.itemBtn}>{editMode ? <img src={accept} alt="edit" onClick={()=> handleSave(id, input)}/> : <img src={edit} alt="edit" onClick={()=>handleChangeText(id)}/>}</div>
            <div className={styles.itemBtn}><img onClick={()=>handleDelete(id)} src={remove} alt="delete" /></div>
        </div>
        
    </div>
  )
}

export default Item