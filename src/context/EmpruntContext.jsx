import React, { createContext, useState, useContext } from 'react'

const EmpruntContext = createContext()

export const useEmprunt = () => useContext(EmpruntContext)

export const EmpruntProvider = ({ children }) => {
  const [emprunts, setEmprunts] = useState([])
  const [message, setMessage] = useState(null)

  const empruntLivre = (livre) => {
    setEmprunts([...emprunts, { ...livre, disponible: false }])
    setMessage({ type: 'success', content: `Le livre "${livre.titre}" a été emprunté avec succès.` })
  }

  const rendreLivre = (id) => {
    const livre = emprunts.find(l => l.id === id)
    setEmprunts(emprunts.filter(livre => livre.id !== id))
    setMessage({ type: 'success', content: `Le livre "${livre.titre}" a été rendu avec succès.` })
  }

  const clearMessage = () => {
    setMessage(null)
  }

  return (
    <EmpruntContext.Provider value={{ emprunts, empruntLivre, rendreLivre, message, clearMessage }}>
      {children}
    </EmpruntContext.Provider>
  )
}

