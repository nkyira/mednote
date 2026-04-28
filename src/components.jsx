import React, { useState } from 'react'

export function Card({ title, children }) {
  return (
    <div className="card">
			{title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export function RadioItem({ name, id, value, label }) {
  return (
    <div className="symptom-item">
      <input type="radio" name={name} id={id} value={value} />
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export function TextInput({ id, label, placeholder }) {
  return (
    <div className="info-item">
      <label htmlFor={id}>{label}</label>
      <input type="text" id={id} placeholder={placeholder} />
    </div>
  )
}

export function NumberInput({ id, label, placeholder, min, max }) {
  const [val, setVal] = useState('')
  return (
    <div className="info-item">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} placeholder={placeholder} min={min} max={max}
        onChange={(e) => setVal(e.target.value)} />
    </div>
  )
}

export function SelectInput({ id, label, options }) {
  return (
    <div className="info-item">
      <label htmlFor={id}>{label}</label>
      <select id={id}>
        <option value="">--</option>
        {options.map(opt => (
          <option key={opt} value={opt}>{opt}</option>
        ))}
      </select>
    </div>
  )
}

export function CheckboxItem({ id, value, label, extraInput, extraCard }) {
  const [checked, setChecked] = useState(false)
  const [inputVal, setInputVal] = useState('')

  return (
    <div>
      <div className="symptom-item">
        <input
          type="checkbox"
          id={id}
          value={checked ? (inputVal ? `${value}: ${inputVal}` : value) : ''}
          onChange={(e) => setChecked(e.target.checked)}
        />
        <label htmlFor={id}>{label}</label>
      </div>
      {checked && extraInput && (
        <div className="field-input-wrapper">
          {React.cloneElement(extraInput, { onChange: (e) => setInputVal(e.target.value) })}
        </div>
      )}
      {checked && extraCard}
    </div>
  )
}
