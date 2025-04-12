const useGlassess = async () => {
  const res = await fetch("/api/glassess.json");
  const glassess = await res.json();

  return { glassess };
};

export default useGlassess;
