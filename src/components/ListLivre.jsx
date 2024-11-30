import React, { useState, useEffect } from 'react';
import { useEmprunt } from '../context/EmpruntContext';
import { fetchLivres } from '../services/api';
import Message from './Message';

const ListLivre = () => {
  const [livres, setLivres] = useState([]);
  const { emprunts, empruntLivre, message, clearMessage } = useEmprunt();

  useEffect(() => {
    const getLivres = async () => {
      try {
        const data = await fetchLivres();
        setLivres(data);
      } catch (error) {
        console.error('Failed to fetch livres:', error);
      }
    };

    getLivres();
  }, []);

  useEffect(() => {
    if (message) {
      const timer = setTimeout(() => {
        clearMessage();
      }, 3000);

      return () => clearTimeout(timer);
    }
  }, [message, clearMessage]);

  const handleEmprunt = (livre) => {
    if (livre.disponible) {
      empruntLivre(livre);
    }
  };

  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      <h2 className="text-2xl font-bold mb-4 p-4 bg-blue-500 text-white">Livres disponibles</h2>
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
            {livres.map((livre) => (
              <tr key={livre.id}>
                <td className="px-6 py-4 whitespace-nowrap">{livre.titre}</td>
                <td className="px-6 py-4 whitespace-nowrap">{livre.auteur}</td>
                <td className="px-6 py-4 whitespace-nowrap">
                  {livre.disponible && !emprunts.some((e) => e.id === livre.id) ? (
                    <button
                      onClick={() => handleEmprunt(livre)}
                      className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                    >
                      Emprunter
                    </button>
                  ) : (
                    <span className="text-gray-500">Indisponible</span>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ListLivre;
