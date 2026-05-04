import React, { useState } from 'react'

export function Card({ title, children }) {
  return (
    <div className="card">
			{title && <h2>{title}</h2>}
      {children}
    </div>
  )
}

export function RadioItem({ name, id, value, label, onChange }) {
  return (
    <div className="symptom-item">
      <input type="radio" name={name} id={id} value={value}
	  onChange={() => onChange && onChange (value)}/>
      <label htmlFor={id}>{label}</label>
    </div>
  )
}

export function TextInput({ id, label, placeholder, onChange }) {
  return (
    <div className="info-item">
      <label htmlFor={id}>{label}</label>
      <input
        type="text"
        id={id}
        placeholder={placeholder}
        onChange={(e) => onChange && onChange(e.target.value)}
      />
    </div>
  )
}

export function NumberInput({ id, label, placeholder, min, max, onChange }) {
  return (
    <div className="info-item">
      <label htmlFor={id}>{label}</label>
      <input type="number" id={id} placeholder={placeholder} min={min} max={max}
        onChange={(e) => onChange && onChange(e.target.value)} />
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

export function CheckboxRow({ label, options, onChange }) {
  const [selected, setSelected] = useState([])

  function handleChange(opt) {
    const newSelected = selected.includes(opt)
      ? selected.filter(o => o !== opt)
      : [...selected, opt]
    setSelected(newSelected)
    if (onChange) onChange(newSelected)
  }

  return (
<div className="checkbox-row">
  <label>{label}</label>
  <div className='options'>
    {options.map(opt => (
      <div key={opt} className="symptom-item">
        <input type="checkbox" id={opt} checked={selected.includes(opt)}
          onChange={() => handleChange(opt)} />
        <label htmlFor={opt}>{opt}</label>
      </div>
    ))}
  </div>
</div>
  )
}

export function RadioRow({ name, label, options, onChange }) {
  const [selected, setSelected] = useState('')
  function handleChange(opt) {
    setSelected(opt)
    if (onChange) onChange(opt)
  }
  return (
    <div className="checkbox-row">
      <label>{label}</label>
      <div className='options'>
        {options.map(opt => (
          <div key={opt} className="symptom-item">
            <input type="radio" name={name} id={`${name}-${opt}`} value={opt}
              checked={selected === opt}
              onChange={() => handleChange(opt)} />
            <label htmlFor={`${name}-${opt}`}>{opt}</label>
          </div>
        ))}
      </div>
    </div>
  )
}

export function CheckboxItem({ id, value, label, extraInput, onChange }) {
  const [checked, setChecked] = useState(false)
  const [inputVal, setInputVal] = useState('')

  function handleChange(e) {
    const isChecked = e.target.checked
    setChecked(isChecked)
    if (onChange) onChange(id, isChecked ? (inputVal ? `${value}: ${inputVal}` : value) : '')
  }

  return (
    <div>
      <div className="symptom-item">
        <input type="checkbox" id={id} value={value} onChange={handleChange} />
        <label htmlFor={id}>{label}</label>
      </div>
      {checked && extraInput && (
        <div className="field-input-wrapper">
          {React.cloneElement(extraInput, { onChange: (e) => {
            setInputVal(e.target.value)
            if (onChange) onChange(id, `${value}: ${e.target.value}`)
          }})}
        </div>
      )}
    </div>
  )
}
