import React from 'react'
import { useEmprunt } from '../context/EmpruntContext'
import Message from './Message'

const LivresEmpruntes = () => {
  const { emprunts, rendreLivre, message } = useEmprunt()

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 p-4 bg-green-500 text-white">Livres empruntés</h2>
      {message && <Message type={message.type} content={message.content} />}
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Titre</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Auteur</th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Action</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {emprunts.map(livre => (
              <tr key={livre.id}>
                <td className="px-6 py-4 whitespace-nowrap">{livre.titre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{livre.auteur}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  <button
                    onClick={() => rendreLivre(livre.id)}
                    className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded"
                  >
                    Rendre
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default LivresEmpruntes

