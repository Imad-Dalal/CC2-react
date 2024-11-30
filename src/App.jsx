import React from 'react'
import ListLivre from './components/ListLivre'
import LivresEmpruntes from './components/LivresEmpruntes'
import { EmpruntProvider } from './context/EmpruntContext'

function App() {
  return (
    <EmpruntProvider>
      <div className="container mx-auto p-4">
        <h1 className="text-3xl font-bold mb-8 text-center text-blue-600">Bibliothèque</h1>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <ListLivre />
          <LivresEmpruntes />
        </div>
      </div>
    </EmpruntProvider>
  )
}

export default App

