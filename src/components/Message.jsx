import React from 'react'

const Message = ({ type, content }) => {
  const bgColor = type === 'success' ? 'bg-green-100' : 'bg-red-100'
  const textColor = type === 'success' ? 'text-green-700' : 'text-red-700'
  const borderColor = type === 'success' ? 'border-green-400' : 'border-red-400'

  return (
    <div className={`${bgColor} ${textColor} ${borderColor} border-l-4 p-4 mb-4`} role="alert">
      <p className="font-bold">{type === 'success' ? 'Succès' : 'Erreur'}</p>
      <p>{content}</p>
    </div>
  )
}

export default Message

