import { useState, useEffect } from "react";
import axios from "axios";
import { Informe, Publisher } from "../types/Types";

const usePublishers = () => {
  const [publicadores, setPublicadores] = useState<Publisher[]>([]);
  const [informes, setInformes] = useState<Informe[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPublicadores = async () => {
      try {
        const response = await axios.get("http://localhost:3000/publicadores");
        setPublicadores(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los publicadores");
        setLoading(false);
      }
    };

    const fetchInformes = async () => {
      try {
        const response = await axios.get("http://localhost:3000/informes");
        setInformes(response.data);
        setLoading(false);
      } catch (error) {
        setError("Error al obtener los informes");
        setLoading(false);
      }
    };

    fetchPublicadores();
    fetchInformes();
  }, []);

  return { publicadores, informes, loading, error };
};

export default usePublishers;
